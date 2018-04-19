<template>
  <div>
      <ul class="progress">
          <li><span>1</span></li>
          <li class="line">
              <div></div>
          </li>
          <li><span>2</span></li>
          <li class="line">
              <div></div>
          </li>
          <li><span>3</span></li>
          <li class="line">
              <div></div>
          </li>
          <li><span>4</span></li>
      </ul>
      <button @click="progress">点击按钮</button>
  </div>
</template>
<script>
import $ from 'jquery';
export default {
  methods:{
      progress(){
          $(".line div").animate({width:'100%'},2000)
      }
      
  }
}
</script>
<style lang="less" scoped>
    .progress li {
        float: left;
        span {
            width: 30px;
            height: 30px;
            background-color: #ccc;
            border-radius: 50%;
            display: inline-block;
            text-align: center;
            line-height: 30px;
            position: relative;
        }
        &:last-of-type {
            span::before {
                content:"";
                width: 0;
                height: 0;
            }
        }
        &.line {
            width: 180px;
            height: 2px;
            background-color: #ccc;
            margin-top: 14px;
            >div {
                width: 0;
                height: 100%;
                background-color: pink;
            }
        }
    }
</style>
