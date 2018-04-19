<template>
  <div>
        <div v-for="(item, index) in productInfoData" :key="index">
            <el-tabs v-model="activeName" @tab-click="handleClick">
            <el-tab-pane class="tabPane" label="商品概述" name="first" v-html="item.description"></el-tab-pane>
            <el-tab-pane class="tabPane" label="商品详情" name="second" v-html="item.summary"></el-tab-pane>
            <el-tab-pane class="tabPane noneTip" label="视频详解" name="third">更多精彩,在路上...</el-tab-pane>
            <el-tab-pane class="tabPane noneTip" label="学堂" name="fourth">更多精彩,在路上...</el-tab-pane>
            <el-tab-pane class="tabPane noneTip" label="CAD图下载" name="fifth">
                {{tipMessage}}
            </el-tab-pane>
        </el-tabs>
        <el-dialog
            title="确定下载CAD图吗？"
            :visible.sync="dialogVisible"
            width="60%" top="5vh">
            <div id="CADImage"></div>
            <span slot="footer" class="dialog-footer">
              <el-button @click="dialogVisible = false">取 消</el-button>
              <el-button type="primary" class="buttonDownload">
                  <a :href="item.cad_url" :download="item.cad_url" @click="dialogVisible = false">确定</a>
              </el-button>
            </span>
        </el-dialog>
        </div>
  </div>
</template>
<script>
    import { mapState } from 'vuex';
    const PDFObject = require("../../../assets/pdfObject/pdfobject.min.js")
  export default {
    components:{
       
    },
    data() {
      return {
        activeName: 'first',
        dialogVisible:false,
        tipMessage:""
      };
    },
    mounted(){
        
    },
    methods: {
      handleClick(tab, e) {
          if(e.currentTarget.id == "tab-fifth" && this.productInfoData[0].cad_url !== null) {
              var options = {
                height: "500px",
                page: '1',
                pdfOpenParams: {
                    pagemode: "thumbs",
                    navpanes: 0,
                    toolbar: 0,
                    statusbar: 0,
                    view: "FitV"
                }
            };
            this.dialogVisible = true;
            this.$nextTick(function () {
                this.tipMessage = "";
                PDFObject.embed(this.productInfoData[0].cad_url[0], document.getElementById("CADImage"),options)
            })
          } else {
              this.tipMessage = "更多精彩,在路上...";
          }
      },
    },
    computed:{
        ...mapState(['productInfoData'])
    }
  };
</script>
<style lang="less" scoped>
.tabPane {
    min-height: 300px;
    margin: 30px 0;
}
.noneTip {
    height: 300px;
    line-height: 300px;
    text-align: center;
    font-size: 18px;
}
.buttonDownload {
    padding: 0;
}
a {
    color: #fff;
    width: 70px;
    height: 40px;
    line-height: 40px;
    display: block;
}
.footer {
    padding-top: 0;
}
</style>
