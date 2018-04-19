<template>
  <div>
        <Title title="产品类型" englishTitle="Product Type" iconClass="icon-iconfontyundonghuwai"/>
        <ul class="productType clearfix">
            <li>
                <a href="javascript:;">
                    <div class="robotBodyDesc">伺服驱动器</div>
                    <div class="robotBodyTitle">伺服驱动器</div>
                    <img src="../../../assets/images/2.png" alt="">
                </a>
            </li>
            <li class="robotBody">
                <a href="javascript:;">
                    <div class="robotBodyDesc">机器人本体</div>
                    <div class="robotBodyTitle">机器人本体</div>
                    <img src="../../../assets/images/1.png" alt=""> 
                </a>
            </li>           
            <li>
                <a href="javascript:;">
                    <div class="robotBodyDesc">激光加工设备</div>
                    <div class="robotBodyTitle">激光加工设备</div>
                    <img src="../../../assets/images/3.png" alt="">
                    
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <div class="robotBodyDesc">CNC数控机床</div>
                    <div class="robotBodyTitle">CNC数控机床</div>
                    <img src="../../../assets/images/4.png" alt="">
                </a>
            </li>
            <li>
                <a href="javascript:;">
                    <div class="robotBodyDesc">工业大数据平台</div>
                    <div class="robotBodyTitle">工业大数据平台</div>
                    <img src="../../../assets/images/5.png" alt="">
                </a>
            </li>
        </ul>           
    </div>
</template>
<script>
import Title from "../../title/title";
export default {
  components: {
    Title
  }
};
</script>
<style lang="less" scoped>
@baseColor: #0275d8;
@fontSize: 1/16rem;
.productType {
    width: 100%;
    padding: 0;
    margin: 0;
    margin-top: 20*@fontSize;
    li {
	    float: left;
	    width: 18%;
	    padding: 20*@fontSize;
	    overflow: hidden;
        margin-bottom: 10px;
        box-sizing: border-box;
        margin-right: 2.5%;
        &:last-child {
            margin-right: 0;
        }
        a {
            display: block;
	        width: 100%;
	        height: 100%;
            color: #999;
            font-size: 12*@fontSize;
            .robotBodyTitle {
                margin-top: 10*@fontSize;
                color: @baseColor;
                font-size: 14*@fontSize;
            }
            img {
                transition: all 0.5s;
                display: block;
	            margin-bottom: 15px;
	            margin: 0 auto;
	            height: 150px;
	            margin-top: 30px;
            }
        }
        &:hover {
            box-shadow: 0px 0px 4px rgba(0,0,0,0.2);
            img {
                transform: scale(1.2);
            }
        }
    }
}
</style>
