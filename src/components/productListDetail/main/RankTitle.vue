<template>
    <div class="rankTitle">
        <!-- 商品列表标题排序部分 -->
        <el-row>
            <el-col :span="2">
                综合排名
            </el-col>
            <el-col :span="2" class="rankPrice">
                价格
                <i class="el-icon-caret-top"></i>
                <i class="el-icon-caret-bottom"></i>
            </el-col>
            <el-col :span="2">
                <input type="checkbox" class="hasCount"> 库存
            </el-col>
            <el-col :span="3" :offset="7">
                共<span class="totalAmount"> 18 </span>件商品
            </el-col>
            <el-col :span="2">
                <router-link to="/productList/bigImgList">
                    <span class="iconfont icon-liebiao"></span>大图
                </router-link>
            </el-col>
            <el-col :span="2">
                <router-link to="/productList" class="selectedColor">
                    <span class="iconfont icon-liebiao1"></span> 列表
                </router-link>
            </el-col>
            <el-col :span="2">
                1 / 2
            </el-col>
            <el-col :span="2">
               <el-button type="text" class="arrow arrowPrev"><i class="el-icon-arrow-left"></i></el-button>
               <el-button type="text" class="arrow arrowNext"><i class="el-icon-arrow-right"></i></el-button>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
@fontSize: 1/16rem;
@baseColor: #0275d8;
.rankTitle {
    height: 40*@fontSize;
    line-height: 40*@fontSize;
    background-color: #3284d8;
    box-shadow: 0 16px 26px -27px rgba(2, 117, 216, 0.56), 0 4px 25px 0px rgba(0, 0, 0, 0.12), 0 8px 10px -8px rgba(2, 117, 216, 0.2);
    color: #fff;
    text-align: center;
    font-size: 14*@fontSize;
    overflow: hidden;
    .rankPrice {
        position: relative;
        i {
            position: absolute;
            right: 20*@fontSize;
            font-size: 12*@fontSize;
            transform: scale(0.8);
        }
        .el-icon-caret-top {
            top: 28%;
        }
        .el-icon-caret-bottom {
            bottom: 26%;
        }

    }
    .hasCount {
        vertical-align: -2px;
    }
    a {
        display: block;
        color: #fff;
        &.selectedColor {
            background-color: @baseColor;
        }
        .iconfont {
            font-size: 14*@fontSize;
            margin-right: 3*@fontSize;
        }
    }
    .arrow {
        color: #fff;
        width: 20px;
        font-size: 16*@fontSize;
    }
}
</style>
