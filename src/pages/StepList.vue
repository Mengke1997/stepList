<template>
    <div>
             <div class="topBar">
                <Topbar />
            </div>
            <div class="header">
                <Header 
                  :isShow="isShow"
                />
            </div>
            <div class="step-list">
                <div class="step-title">
                    <h3>工业魔方</h3>
                    <h5>个性化方案配置选择</h5>
                </div>
                <StepTable />
            </div>
             <div class="footer">
                <FooterBottom />
            </div>
    </div>
</template>

<script>
import Topbar from "../components/topbar/main/Topbar.vue";
import Header from "../components/header/main/Header.vue";
import FooterBottom from "../components/footer/main/FooterBottom.vue";
import StepTable from "../components/StepTable/main/StepTable.vue";
export default {
  name: "SteplList",
  components: {
    Topbar,
    Header,
    FooterBottom,
    StepTable
  },
  data() {
    return {
      isShow: true
    };
  }
};
</script>

<style lang="less" scoped>
@baseColor: #0275d8;
@fontSize: 1/16rem;
body{
  background:#fff;
}
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
  box-shadow: 4px 4px 4px rgba(0, 0, 0, 0.02);
}
.layout {
  background-color: #fff;
}
.footer {
  background-color: #f5f5f5;
}
.step-list {
  width: 1040px;
  min-height: 650px;
  margin: 50px auto 300px;
  border: 1px solid rgba(0, 0, 0, 0.125);
  box-shadow: 0 16px 24px 2px rgba(0, 0, 0, 0.14),
    0 6px 30px 5px rgba(0, 0, 0, 0.12), 0 8px 10px -5px rgba(0, 0, 0, 0.2);
  border-radius: 6px;
  > .step-title {
    text-align: center;
    padding: 35px 0 35px;
    h3 {
      font-size: 1.825em;
      line-height: 1.4em;
      font-weight: 700;
      padding: 0 0 15px 0;
      margin: 0;
    }
    h5 {
      font-size: 1.25em;
      font-family: "Roboto", "Helvetica", "Arial", sans-serif;
      font-weight: 300;
      padding: 5px 0 15px 0;
      margin: 0;
    }
  }
}
</style>

