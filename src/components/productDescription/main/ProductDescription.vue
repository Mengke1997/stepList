<template>
  <div class="productDescription">
    <div v-if="pageIndex">
        <router-link :to="'/productInfo/'+productInfo.gno">
            <img :src="productInfo.cover_url" alt="">
        </router-link>
        <p><span class="price">&yen; {{productInfo.first_price}}</span></p>
        <router-link :to="'/productInfo/'+productInfo.gno">
            <p class="desc">{{productInfo.goods_name}}</p>
        </router-link>
        <p class="clearfix productOperation">
           <span class="iconfont icon-mn_shoucang"></span> 
            <span class="iconfont icon-caigou-xianxing"></span>
        </p>
    </div>
    <div v-if="!pageIndex">
        <img src="../../../assets/images/1.png" alt="">
        <p>价格: <span class="price">&yen; 1200</span></p>
        <p class="desc">桥田(QUICKQT) 机器人末端快换装置 QT-020</p>
        <p>订货号: <span>KA000000201</span></p>
        <p>库存: <span>有库存</span></p>
        <div class="clearfix operation">
           <div class="save"><span class="iconfont icon-mn_shoucang"></span>收藏</div> 
            <div class="addShoppingCar"><span class="iconfont icon-caigou-xianxing"></span>加入购物车</div>
        </div>
    </div>
  </div>
</template>
<script>
import { mapState } from 'vuex';
export default {
    created(){
        // console.log(this.productInfo)
    },
    props:["pageIndex",'productInfo'],
    data(){
        return {
            
        }
    }
}
</script>
<style lang="less" scoped>
@fontSize:1/16rem;
@baseColor:#0275d8;
.productDescription {
    margin-top: 40px;
    padding: 15px;
    box-shadow: 0px 0px 1px 2px rgba(0,0,0,0.02);
    transition: all 0.5s;
    font-size: 14*@fontSize;
    &:hover {
        .productOperation>.iconfont {
            background-color: @baseColor;
        }
        box-shadow: 0px 0px 1px 2px rgba(0,0,0,0.1);
    }
      img {
        width: 180*@fontSize;
        height: 180*@fontSize;
        display: block;
        margin: 0 auto;
        cursor: pointer;
      }
      .price {
            margin-right: 8px;
            color: #0275d8;
            font-weight: 700;
            display: inline-block;
            margin-top: 20px;
            margin-left: 5*@fontSize;
      }
      .desc {
          height: 50px;
          text-align: left;
          color: #333;
          font-size: 14*@fontSize;
          cursor: pointer;
          font-weight: 600;
      }
      .productOperation {
          >.iconfont {
            color: #fff;
            width: 30px;
            height: 30px;
            border-radius: 50%;
            background-color: #ccc;
            line-height: 30px;
            text-align: center;
            font-size: 18px;
            transition: all 0.5s;
            cursor: pointer;
          }
          >.icon-mn_shoucang {
            float: left;
        }
          >.icon-caigou-xianxing {
            float: right;
        }
      }
      .operation {
            .save, .addShoppingCar{
                float: left;
                width: 50%;
                background-color: #ddd;
                color: #333;
                text-align: center;
                height: 30px;
                line-height: 30px;
                transition: all .3s;
                box-sizing: border-box;
                cursor: pointer;
                .iconfont {
                    font-size: 14*@fontSize;
                    margin-right: 5*@fontSize;
                }
                &:hover {
                    background-color: @baseColor;
                    color: #fff;
                }
            }
            .addShoppingCar {
                border: 1px solid #ddd;
                background-color: #fff;
            }
      }
  }
</style>
