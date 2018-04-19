<template>
  <div class="productInfo">
      <div class="container">
          <div class="breadCrumbTitle">
              <BreadCrumb :gno="id"/>
          </div>
          <div class="clearfix">
              <div class="zoom">
                  <Zoom />
              </div>
              <div class="productInfoRight">
                  <ProductInfoRight />
              </div>
          </div>
          <div class="productInfoSummary">
              <ProductInfoSummary />
          </div>
      </div>
  </div>
</template>
<script>
import BreadCrumb from "../components/breadCrumb/main/BreadCrumb";
import Zoom from "../components/zoom/main/Zoom";
import ProductInfoRight from "../components/productInfoDetail/main/ProductInfoRight";
import ProductInfoSummary from "../components/productInfoDetail/main/ProductInfoSummary";
import {mapActions} from 'vuex';
export default {
    props:['id'],
    components:{
        BreadCrumb,
        Zoom,
        ProductInfoRight,
        ProductInfoSummary,
    },
    mounted(){
         this.updateProductInfoAsync(this.id);     
    },
    data(){
        return {
            
        }
    },
    methods:{
       ...mapActions(['updateProductInfoAsync'])
    }
}
</script>
<style lang="less" scoped>
@fontSize: 1/16rem;
@baseColor: #0275d8;
.productInfo {
    margin: 30*@fontSize;
    .breadCrumbTitle {
        border-bottom: 2px solid @baseColor;
    }
    .zoom {
        float: left;
        width: 35%;
        margin-right: 5%;
    }
    .productInfoRight {
        float: right;
        width: 60%;
    }
    .productInfoSummary {
        margin: 30*@fontSize 0;
    }
}

</style>
