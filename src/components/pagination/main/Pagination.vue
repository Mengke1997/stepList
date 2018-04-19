<template>
    <el-button-group class="pagination clearfix">
        <el-button type="primary" icon="el-icon-arrow-left" class="arrow arrowPrev">上一页</el-button>
        <div class="pageNum">
            1 / 14
        </div>
        <el-button type="primary" class="arrow arrowNext">下一页<i class="el-icon-arrow-right el-icon--right"></i></el-button>
    </el-button-group>
</template>
<script>
export default {
  
}
</script>
<style lang="less" scoped>
@baseColor: #0275d8;
@fontSize: 1/16rem;
.pagination {
    display: block;
    position: relative;
    margin: 30*@fontSize 0;
    .pageNum {
        text-align: center;
        height: 40*@fontSize;
        line-height: 40*@fontSize;
    }
    .arrow {
        background-color: @baseColor;
        border-color:@baseColor;
        border-radius: 0;
    }
    .arrowPrev {
        float: left;
    }
    .arrowNext {
        position: absolute;
        top: 0;
        right: 0;
    }
}

</style>
