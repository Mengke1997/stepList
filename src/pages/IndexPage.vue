<template>
    <div class="indexPage">
        <div class="industryApplication">
            <div class="container">
                <el-row :gutter="30">
                    <el-col :span="18">
                        <IndustryApplication />
                    </el-col>
                    <el-col :span="6">
                        <IndustryUser />
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="brands">
            <div class="container">
                <el-row>
                    <Brands />
                </el-row>
            </div>
        </div>
        <div class="productType">
            <div class="container">
                <el-row>
                    <ProductType />
                </el-row>
            </div>
        </div>
        <div class="productDetail">
            <div class="container">
                <el-row :gutter = "40">
                    <el-col :span="18">
                        <ProductDetail />
                    </el-col>
                    <el-col :span="6">
                        <ProductSalesRank />
                        <GuessLike />
                    </el-col>
                </el-row>
            </div>
        </div>
        <div class="teachInfo">
            <div class="container">
                <TeachInfo />
            </div>
        </div>
    </div>
    
</template>
<script>
import IndustryApplication from "../components/IndustryApplication/IndustryApplication";
import IndustryUser from "../components/IndustryApplication/IndustryUser";
import Brands from "../components/brands/main/Brand";
import ProductType from "../components/ProductType/main/ProductType";
import ProductDetail from "../components/ProductDetail/main/ProductDetail";
import ProductSalesRank from "../components/ProductDetail/main/ProductSalesRank";
import GuessLike from "../components/ProductDetail/main/GuessLike";
import TeachInfo from "../components/TeachInfo/main/TeachInfo";
export default {
  name:"indexPage",
  components:{
      IndustryApplication,
      IndustryUser,
      Brands,
      ProductType,
      ProductDetail,
      ProductSalesRank,
      GuessLike,
      TeachInfo
  }
}
</script>
<style lang="less" scoped>
    @baseColor: #0275d8;
    @fontSize: 1/16rem;
  .industryApplication {
      background-color: #f9f9f9;
      padding: 30*@fontSize 0;
  }
  .brands {
      margin: 30*@fontSize 0;
  }
  .productDetail {
      margin: 30*@fontSize 0;
  }
  .teachInfo {
      margin: 30*@fontSize 0;
  }
</style>
