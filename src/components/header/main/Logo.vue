<template>
  <div class="logo">
        <router-link to="/">
            <img src="../../../assets/images/logo.png" alt="">
        </router-link>
  </div>
</template>
<script>
export default {
  name:"Logo"
}
</script>
<style lang="less" scoped>
@fontSize:1/16rem;
.logo>a{
    display:block;
    height: 70*@fontSize;
    img {
        height: 100%;
        margin-left:0;
    }
}
</style>

