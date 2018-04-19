<template>
  <div>
      <ul class="title clearfix">
          <li class="active">全部</li>
          <li>机器人本体</li>
          <li>伺服驱动</li>
          <li>激光加工设备</li>
      </ul>
      <el-row :gutter="40">
          <el-col :span="8" v-for="(item, index) in indexProduct" :key="index" v-if="index < 10 && item.goods_name != '箱体焊接方案'">
              <ProductDescription :pageIndex="productDetailShow" :productInfo="item"/>
          </el-col>
      </el-row>
  </div>
</template>
<script>
import ProductDescription from "../../productDescription/main/ProductDescription";
import { mapState,mapActions} from "vuex";
export default {
  components:{
      ProductDescription,
  },
  mounted(){
      this.updateProductListAsync({params:{offset:0,limit:100},mutionType:'updateIndexProduct'});
  },
  data(){
      return {
          productDetailShow:true,
          
      }
  },
  methods:{
      ...mapActions(['updateProductListAsync']),
  },
  computed:{
      ...mapState(['indexProduct']),
  }
}
</script>
<style lang="less" scoped>
 @baseColor: #0275d8;
 @fontSize: 1/16rem;
    .title {
        width: 100%;
        border-bottom: 2px solid @baseColor;
        margin-top: 10px;
        li {
            float: left;
            width: 22%;
            height: 40px;
            line-height: 40px;
            text-align: center;
            cursor: pointer;
            transition: all 0.3s;
            margin-right: 4%;
            &:hover {
                background-color: @baseColor;
                color: #fff;
            }
            &.active {
                background-color: @baseColor;
                color: #fff;
            }
            &:last-child {
                margin-right: 0;
            }
        }

    }
</style>
