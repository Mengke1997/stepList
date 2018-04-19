<template>
  <div>
      <div class="topBar">
            <Topbar />
        </div>
        <div class="header">
            <Header />
        </div>
        <div class="layout">
            <transition name="el-fade-in-linear">
            <router-view>
            </router-view>
            </transition>
        </div>
        <div class="footer">
            <FooterBottom />
        </div>
  </div>
</template>
<script>
import Topbar from "../components/topbar/main/Topbar";
import Header from "../components/header/main/Header";
import FooterBottom from "../components/footer/main/FooterBottom.vue";
import IndexPage from "./IndexPage.vue";
export default {
  components:{
    Topbar,
    Header,
    FooterBottom,
    IndexPage,
    
  },
  created(){
      
  },
  data() {
      return {
        title:"test"
      };
  },
  methods:{
   
  }
}
</script>
<style lang="less" scoped>
@fontSize: 1/16rem;
.topBar {
    border-bottom: 1px solid #ddd;
    height: 30px;
    line-height: 30px;
    min-width: 1200px;
}
.header {
    height: 70*@fontSize;
    line-height: 70*@fontSize;
    background-color: #fff;
    box-shadow: 4px 4px 4px rgba(0,0,0,0.02);
}
.layout {
    background-color: #fff;
}
.footer {
    background-color: #f5f5f5;
}
</style>
