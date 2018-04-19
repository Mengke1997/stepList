<template>
    <el-breadcrumb separator="/">
        <el-breadcrumb-item :to="{ path: '/' }">首页</el-breadcrumb-item>
        <el-breadcrumb-item v-for="(item, index) in nameList" :key="index">{{item}}</el-breadcrumb-item>
        <el-breadcrumb-item :to="{ path: '/' }">{{goodsName}}</el-breadcrumb-item>
    </el-breadcrumb>
</template>
<script>
import {mapState,mapActions} from 'vuex';
export default {
    data(){
        return {
            goodsName:'',
        }
    },
    mounted(){
        // this.categoryData = this.productInfoData;
    },
    methods:{
        initCategoryData:function () {
            
        }
    },
    computed:{
        ...mapState(['productInfoData']),
        nameList:function () {
            var nameListArr = [];
            var newvalue= this.productInfoData;
            if(newvalue.length > 0) {
                var categoryData = newvalue[0].category;
                this.goodsName = newvalue[0].goods_name
                nameListArr.push(categoryData.category_name);
                if(categoryData.children == null) {
                    return nameListArr;
                } else {
                    nameListArr.push(categoryData.children.category_name);
                }
                if(categoryData.children.children == null) {
                    return nameListArr;
                }else {
                    nameListArr.push(categoryData.children.children.category_name);
                }
                if(categoryData.children.children.children == null) {
                    return nameListArr;
                }else {
                    nameListArr.push(categoryData.children.children.children.category_name);
                }
                if(categoryData.children.children.children.children == null) {
                    return nameListArr;
                }else {
                    nameListArr.push(categoryData.children.children.children.children.category_name);
                }
                
            }
            return nameListArr;
        }
    },
    watch:{
        
    }
}
</script>
<style lang="less">
.el-breadcrumb {
    height: 40px;
    line-height: 40px;
    }
.el-breadcrumb__item .el-breadcrumb__inner {
    color: #666;
    font-weight: 400;
}
.el-breadcrumb__separator {
    color: #666;
    font-weight: 400;
    margin: 0 12px;
}
</style>
