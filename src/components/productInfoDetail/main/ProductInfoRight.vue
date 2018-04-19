<template>
  <div class="productDetail">
        <div v-for="(item, index) in productInfoData" :key="index">
            <h4 title="infoData.goods_name">{{item.goods_name}}</h4>
        <div class="price">
            <span>价格：<strong>&yen; {{item.first_price}}</strong></span>
        </div>
        <div class="diffNumPrice">
            <ul class="differentNum clearfix">
                <li v-for="(itemprice, index) in item.prices" :key="index" v-if="index < 3">  
                    <span class="num">{{itemprice.min_quantity}} {{item.sales_unit}} - {{itemprice.max_quantity}} {{item.sales_unit}}</span>
                    <span class="numPrice">&yen; {{itemprice.price}}</span>
                </li>
            </ul> 
        </div>
        <ul class="detailAndBuy">
            <li>订货编码 : <span class="color_red">{{item.gno}}</span></li>
            <li>品&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;牌 : <span>{{item.brand_name}}</span></li>
            <li>起&nbsp;&nbsp;订&nbsp;&nbsp;量 : <span>{{item.min_buy}} {{item.sales_unit}}</span></li>
            <li>发&nbsp;&nbsp;货&nbsp;&nbsp;期 : <span>{{item.lead_time}}</span><a href="javascript">发货交期详述>></a></li> 
            <li>当前库存 : <span>{{item.stock}}</span></li>
        </ul>
       <div class="numChange">
           <CountChange :min="item.min_buy" :max="item.stock"/>
       </div>
        <div class="addShopCar">
            <!-- <button v-if="dataList.is_trade===0">该商品已下架</button> -->
            <button class="addToShoppingCar">
            <span class="iconfont icon-caigou-xianxing"></span>加入购物车</button>
            <button class="saveGoods"><span class="iconfont icon-mn_shoucang"></span>收藏商品</button>
        </div>
        </div>
    </div>
</template>
<script>
import CountChange from "../../countChange/main/countChange";
import { mapState } from 'vuex';
export default {
  components:{
      CountChange
  },
  data(){
      return {
          infoData:[]
      }
  },
  mounted(){
    
  },
  computed:{
      ...mapState(['productInfoData'])
  },
}
</script>
<style lang="less" scoped>
@fontSize: 1/16rem;
@baseColor: #0275d8;
.productDetail {
    margin-top: 30*@fontSize;
    h4 {
        color:#333;
        font-weight: 700;
        font-size: 16*@fontSize;
    }
    .price {
        height: 40*@fontSize;
        line-height: 40*@fontSize;
        padding-left:10*@fontSize;
        background: url("../../../assets/images/bgPic.png") no-repeat;
        background-size: cover;
        margin-bottom: 20*@fontSize;
        color: #666;
        font-size: 14*@fontSize;
        strong {
            color: #0275d8;
            font-weight: 700;
            font-family: Arial;
            font-size: 16*@fontSize;
            margin-left: 15*@fontSize;
        }
    }
    .diffNumPrice {
        position: relative;
        margin-bottom: 20px;
        .differentNum {
            li {
                height: 26px;
                line-height: 26px;
                float: left;
                position: relative;
                margin-right: 37px;
                font-size: 14*@fontSize;
                &:last-of-type {
                    margin-right: 0;
                }
                &::before {
                    content:"";  
                    position:absolute;  
                    left:0;  
                    top:0;  
                    right:0;  
                    bottom:-2px;
                    clip-path: polygon(91px 30px, 128px 27px, 120px 1px, 105px 30px);
                    background-color: #fff;
                    border-bottom: 1px solid #0275d8;
                }
                .num {
                    background-color: #0275d8;
                    color: #fff;
                    float: left;
                    width: 120px;
                    height: 28px;
                    line-height: 28px;
                    text-align: center;
                }
                .numPrice {
                    color: #0275d8;
                    width: 90px;
                    float: left;
                    text-align: center;
                    border: 1px solid #0275d8;
                    border-left: none;
                }
            }
        }
    }
    .detailAndBuy {
        margin-bottom: 15*@fontSize;
        li {
            padding: 6px 0;
            font-size: 14*@fontSize;
            span {
                margin-left: 5px;
            }
            a {
                margin-left: 10px;
                color: @baseColor;
            }
        }
    }
    .numChange {
        width: 150*@fontSize;
    }
}
.addShopCar button {
    margin-top: 30*@fontSize;
    width: 110*@fontSize;
    height: 40*@fontSize;
    font-size:14*@fontSize;
    transition:all 0.3s;
    border: none;
    background-color: #0275d8;
    border: 1px solid #0275d8;
    color: #fff;
    margin-right: 30*@fontSize;
    cursor: pointer;
    .iconfont {
        margin-right: 5px;
        font-size: 15*@fontSize;
    }
}
.addShopCar .saveGoods {
    background-color: rgba(2, 117, 216, 0.03);
    border: 1px solid #0275d8;
    color: #0275d8;
}

</style>
