<template>
     <div class="topBarInfo">
        <ul class="topBarList">
            <li>
                <a href="javascript:;">我的魔方<i class="iconfont icon-jiantouxia"></i></a>
                <ul class="topBarMyinfo clearfix">
                    <li><a href="javascript:;"><i class="iconfont icon-dingdan"></i>我的订单</a></li>
                    <li><a href="javascript:;"><i class="iconfont icon-xihuan"></i>我的收藏</a></li>
                    <li><a href="javascript:;"><i class="iconfont icon-zhekou"></i>我的询价</a></li>
                    <li><a href="javascript:;"><i class="iconfont icon-daifukuan"></i>待付款</a></li>
                    <li><a href="javascript:;"><i class="iconfont icon-zy_peisong"></i>待收货</a></li>
                    <li><a href="javascript:;"><i class="iconfont icon-edit"></i>我的报价单</a></li>
                    <li><a href="javascript:;"><i class="iconfont icon-im_fankui"></i>售后消息</a></li>
                    <li><a href="javascript:;"><i class="iconfont icon-dingyue"></i>我的咨询</a></li>
                    <li><a href="javascript:;"><i class="iconfont icon-youhuiquan"></i>我的优惠券</a></li>
                </ul>
            </li>
            <li><span>|</span></li>
            <li><a href="javascript:;"><i class="iconfont icon-shangpinzhongxin"></i> 快速下单</a></li>
            <li><span>|</span></li>
            <li><a href="javascript:;"><i class="iconfont icon-mn_dianhua"></i>400-821-8234</a></li>
            <li><span>|</span></li>
            <li class="goShopCar">
                <a href="javascript:;" ><i class="iconfont icon-caigou-xianxing"></i>我的购物车</a>
            </li>
            <li><span>|</span></li>
            <li><a href="service.html"><i class="iconfont icon-kefu"></i>在线客服</a></li>
        </ul>
    </div>
</template>
<script>
import "../../../assets/iconfont/iconfont.css"
export default {
    name:"topbarInfo",
    data() {
      return {
        activeIndex: '1',
        activeIndex2: '1'
      };
    },
    methods: {
      handleSelect(key, keyPath) {
        console.log(key, keyPath);
      }
    }
}
</script>
<style lang="less" scoped>
@base_color: #0275d8;
a {
    text-decoration: none;
    color: #333;
}
a:hover,a:focus, a:active {
    color: @base_color;
}
ul {
    padding: 0;
    margin: 0;
}
ul li {
    list-style: none;
}
.topBarInfo {
  float: right;
  height: 30px;
  line-height: 30px;
}
.topBarList li {
  float: left;
  font-size:14/16rem;
  padding:0 8/16rem;
  position: relative;
  color: #999;
}
.topBarList li a {
  font-size:14/16rem;
  color:#666;
}
.topBarList li:first-of-type:hover .topBarMyinfo {
  display: block;
}
.topBarList .iconfont {
    font-size: 14/16rem;
    margin-right: 5/16rem;
}
.topBarList  .icon-jiantouxia {
  font-size:12/16rem;
  color:#333;
  margin-left: 5/16rem;
  margin-right: 0;
  transform:scale(0.8) rotate(360deg);
  transition: all 0.5s;
  display: inline-block;
}
.topBarList li:first-of-type:hover .icon-jiantouxia {
  transform:scale(0.8) rotate(180deg);
}
.topBarMyinfo {
  background-color: #fff;
  width: 25rem;
  position: absolute;
  display: none;
  z-index:9999;
  padding:5/16rem 0;
  padding-left:8/16rem;
  left:0px;
  border: 1px solid #ddd;
  border-top: 2px solid @base_color;
  li {
        height: 30px;
        line-height: 30px;
        padding-left:0;
        float: left;
        width: 110/16rem;
        margin-right: 5/16rem;
        padding-left: 10/16rem;
        &:hover {
            background-color: #eee;
        }
  }
  .iconfont {
      font-size: 1rem;
      margin-right: 10/16rem;
      color: #333;
  }
}
.topBarList .topBarMyinfo::before {
    content: "";
    width: 0;
    height: 0;
    border-width: 8/16rem;
    border-color:  transparent transparent #0275d8 transparent;
    border-style:  dashed solid dashed;
    position: absolute;
    top: -1rem;
    left: 40/16rem;
}
</style>

