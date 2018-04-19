<template>
  <div class="productBigImg">
        <el-row :gutter="30">
            <el-col :span="6">
                <ProductDescription :pageIndex="productDetailShow"/>
            </el-col>
            <el-col :span="6">
                <ProductDescription :pageIndex="productDetailShow"/>
            </el-col>
            <el-col :span="6">
                <ProductDescription :pageIndex="productDetailShow"/>
            </el-col>
            <el-col :span="6">
                <ProductDescription :pageIndex="productDetailShow"/>
            </el-col>
            <el-col :span="6">
                <ProductDescription :pageIndex="productDetailShow"/>
            </el-col>
            <el-col :span="6">
                <ProductDescription :pageIndex="productDetailShow"/>
            </el-col>
            <el-col :span="6">
                <ProductDescription :pageIndex="productDetailShow"/>
            </el-col>
            <el-col :span="6">
                <ProductDescription :pageIndex="productDetailShow"/>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import ProductDescription from "../../productDescription/main/ProductDescription"
export default {
  components:{
      ProductDescription
  },
  data(){
      return {
          productDetailShow:false
      }
  }
}
</script>
<style lang="less" scoped>

</style>
