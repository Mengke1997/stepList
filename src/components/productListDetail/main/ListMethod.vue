<template>
    <div class="listInfo">
        <el-row class="listInfoTitle">
            <el-col :span="7">商品信息</el-col>
            <el-col :span="2">品牌</el-col>
            <el-col :span="2">型号</el-col>
            <el-col :span="3">商品参数</el-col>
            <el-col :span="3">商品参数</el-col>
            <el-col :span="2">价格</el-col>
            <el-col :span="3">购买数量</el-col>
            <el-col :span="2">加入购物车</el-col>
        </el-row>
        <el-row class="listContent">
            <el-col :span="7" class="productContent">
                <img src="https://imgcdn.robo2025.com/product/images/show/rc-upload-1521630101400-49.jpg" alt="">
                <h4>儒竞(RUKiNG) SE系列高性能伺服驱动器 SEA3-15LRCP</h4>
            </el-col>
            <el-col :span="2"><span class="positionAbsolute">固高科技</span></el-col>
            <el-col :span="2"><span class="positionAbsolute">GTSD12-T4-K003X1-N01X1</span></el-col>
            <el-col :span="3"><span class="positionAbsolute">额定电流:7A</span></el-col>
            <el-col :span="3"><span class="positionAbsolute">额定功率:100W</span></el-col>
            <el-col :span="2"><span class="positionAbsolute"> <strong>&yen; 1000.00</strong></span></el-col>
            <el-col :span="3"><span class="positionAbsolute"><CountChange /></span></el-col>
            <el-col :span="2"><span class="positionAbsolute"><i class="iconfont icon-caigou-xianxing"></i></span></el-col>
        </el-row>
        <el-row class="listContent">
            <el-col :span="7" class="productContent">
                <img src="https://imgcdn.robo2025.com/product/images/show/rc-upload-1521630101400-49.jpg" alt="">
                <h4>儒竞(RUKiNG) SE系列高性能伺服驱动器 SEA3-15LRCP</h4>
            </el-col>
            <el-col :span="2"><span class="positionAbsolute">固高科技</span></el-col>
            <el-col :span="2"><span class="positionAbsolute">GTSD12-T4-K003X1-N01X1</span></el-col>
            <el-col :span="3"><span class="positionAbsolute">额定电流:7A</span></el-col>
            <el-col :span="3"><span class="positionAbsolute">额定功率:100W</span></el-col>
            <el-col :span="2"><span class="positionAbsolute"> <strong>&yen; 1000.00</strong></span></el-col>
            <el-col :span="3"><span class="positionAbsolute"><CountChange /></span></el-col>
            <el-col :span="2"><span class="positionAbsolute"><i class="iconfont icon-caigou-xianxing"></i></span></el-col>
        </el-row>
        <el-row class="listContent">
            <el-col :span="7" class="productContent">
                <img src="https://imgcdn.robo2025.com/product/images/show/rc-upload-1521630101400-49.jpg" alt="">
                <h4>儒竞(RUKiNG) SE系列高性能伺服驱动器 SEA3-15LRCP</h4>
            </el-col>
            <el-col :span="2"><span class="positionAbsolute">固高科技</span></el-col>
            <el-col :span="2"><span class="positionAbsolute">GTSD12-T4-K003X1-N01X1</span></el-col>
            <el-col :span="3"><span class="positionAbsolute">额定电流:7A</span></el-col>
            <el-col :span="3"><span class="positionAbsolute">额定功率:100W</span></el-col>
            <el-col :span="2"><span class="positionAbsolute"> <strong>&yen; 1000.00</strong></span></el-col>
            <el-col :span="3"><span class="positionAbsolute"><CountChange /></span></el-col>
            <el-col :span="2"><span class="positionAbsolute"><i class="iconfont icon-caigou-xianxing"></i></span></el-col>
        </el-row>
    </div>  
</template>
<script>
import CountChange from "../../countChange/main/countChange";
export default {
  components:{
      CountChange,
  }
}
</script>
<style lang="less" scoped>
    @fontSize: 1/16rem;
    @baseColor:#0275d8;
    .listInfo {
        text-align: center;
        margin-top: 15*@fontSize;
        font-size: 14*@fontSize;
        .listInfoTitle {
            background-color: rgba(2,117,216,0.03);
            height: 40*@fontSize;
            line-height: 40*@fontSize;
            color: #666;
            >div {
                border: 1px solid rgba(2,117,216,0.5);
                border-left: none;
                &:first-of-type {
                    border-left: 1px solid rgba(2,117,216,0.5);
                }
            }
        }
        .listContent {
            border-bottom: 1px solid #ccc;
            &:hover {
                background-color: rgba(2, 117, 216, 0.03);
            }
            >div {
                position: relative;
                height: 200*@fontSize;
                .positionAbsolute {
                    font-size: 12*@fontSize;
                    position: absolute;
                    top: 50%;
                    left: 50%;
                    transform: translate(-50%, -50%);
                    width: 100%;
                    strong {
                        font-weight: normal;
                        color: @baseColor;
                    }
                    .icon-caigou-xianxing {
                        color: #fff;
                        width: 30px;
                        height: 30px;
                        border-radius: 50%;
                        background-color: #e5e5e5;
                        line-height: 30px;
                        text-align: center;
                        font-size: 18px;
                        transition: all 0.5s;
                        cursor: pointer;
                        display: inline-block;
                        &:hover {
                            background-color: @baseColor;
                        }
                    }
                }
            }
            .productContent {
                img {
                    width: 100*@fontSize;
                    height: 100*@fontSize;
                    position: absolute;
                    top: 50%;
                    left: 0;
                    transform: translateY(-50%);
                }
                h4 {
                    position: absolute;
                    top: 50%;
                    right: 10*@fontSize;;
                    transform: translateY(-50%);
                    width: 65%;
                    margin: 0;
                    text-align: left;
                    font-weight: 700;
                    font-size: 14*@fontSize;
                }
            }
            
        }
    }
</style>
