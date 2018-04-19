<template>
  <div class="require-release">
        <a href="http://dect.robo2025.com" target="_blank">
            <i class="iconfont icon-paper-airplane"></i>
            <span>需求发布</span>
        </a>
    </div>
</template>
<script>
import "../../../assets/iconfont/iconfont.css"
export default {
  
}
</script>
<style lang="less" scoped>
@baseColor: #0275d8;
@fontSize: 1/16rem;
.require-release {
  height: 70*@fontSize;
  line-height: 70*@fontSize;
  position: relative;
  >a {
    text-align: center;
    width: 180*@fontSize;
    color:@baseColor;
    display: block;
    height: 40*@fontSize;
    line-height: 40*@fontSize;
    border:1px solid @baseColor;
    border-radius: 25*@fontSize;
    transition: all 0.5s;
    position: absolute;
    top: 50%;
    right: 0;
    transform: translateY(-50%);
    &:hover {
        color: #fff;
        background-color: #0275d8;
    }
    .icon-paper-airplane {
        margin-right: 3*@fontSize;
    }
  }
}
</style>
