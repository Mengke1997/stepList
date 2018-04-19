<template>
  <div class="title">
        <h4><i :class="[iconExist? iconClass:'','iconfont']"></i>{{title}} <span class="englishTitle">{{englishTitle}}</span></h4> 
    </div>
</template>
<script>
export default {
  props:['title','englishTitle','iconClass'],
  created(){
  },
  data(){
      return {
          iconExist: true
      }
  }
}
</script>
<style lang="less" scoped>
    @baseColor: #0275d8;
    @fontSize: 1/16rem;
    .title {
        border-bottom: 2px solid @baseColor;
        h4 {
            margin: 12*@fontSize 0;
            font-size: 18*@fontSize;
            font-weight: normal;
            i {
                color: #fff;
                margin-right: 8*@fontSize;
                background-color: @baseColor;
                width: 25*@fontSize;
                height: 25*@fontSize;
                line-height: 25*@fontSize;
                border-radius: 50%;
                text-align: center;
                vertical-align: 2*@fontSize;
                font-size: 16*@fontSize;
                display: inline-block;
            }
            .englishTitle {
                margin-left: 5px;
            }
        }
    }
</style>
