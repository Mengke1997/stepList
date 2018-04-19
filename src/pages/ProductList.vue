<template>
  <div>
        <div class="title">
            <div class="container">
                  <el-row :gutter="20">
                      <el-col :span="4"><CategoryList :styleObj="categoryStyleObj" :cateWidth="categoryWidth"/></el-col>
                      <el-col :span="20">
                          <BreadCrumb />
                      </el-col>
                  </el-row>
            </div>
        </div>
        <div class="container">
            <RankTitle />
        </div>
        <div class="container">
            <!-- 列表和大图模式切换 -->
            <router-view></router-view>
        </div>
        <div class="container">
            <Pagination />
        </div>
  </div>
</template>
<script>
import {mapMutations} from 'vuex';
import CategoryList from '../components/header/main/CategoryList';//引入分类组件
import BreadCrumb from "../components/breadCrumb/main/BreadCrumb";//引入面包屑导航组件
import RankTitle from "../components/productListDetail/main/RankTitle";//引入排序标题组件
import Pagination from "../components/pagination/main/Pagination";//引入分页组件
export default {
    components:{
        CategoryList,
        BreadCrumb,
        RankTitle,
        Pagination
    },
    created(){
        this.updateCategoryDisplay(false);
        console.log(this.categoryDisplay)
    },
    destroyed(){
        this.updateCategoryDisplay(true);
    },
    data(){
        return {
            categoryStyleObj:{
                'backgroundColor':"#0275d8",
                'color':"#fff",
            },
            categoryWidth:{
                'width':'1000px',
                "top":"104%"
            },
        }
    },
    methods:{
        ...mapMutations(['updateCategoryDisplay'])
    }
}
</script>
<style lang="less" scoped>
    @baseColor: #0275d8;
    @fontSize: 1/16rem;
    .title {
        height: 40px;
        line-height: 40px;
        margin: 30*@fontSize 0;
        border-bottom: 2px solid @baseColor;
    }
    
</style>
