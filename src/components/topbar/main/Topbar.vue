<template>
  <div class="container clearfix">
      <LoginRegister />
      <TopBarInfo />
  </div>
</template>
<script>
import LoginRegister from "./LoginRegister";
import TopBarInfo from "./TopBarInfo";
export default {
  name:"topbar",
  components:{
      LoginRegister,TopBarInfo
  }
}
</script>
<style lang="less" scoped>

</style>
