<template>
    <div class="container">
        <el-row>
            <el-col :span="4">
                <div class="footer-col">
    				<h4 class="footer-title">新手上路</h4>
    				<ul class="list-unstyled footer-nav">
                        <li><a href="https://help.robo2025.com" target="_blank">帮助中心</a></li>
                        <li><a href="https://wiki.robo2025.com" target="_blank">魔方知识库</a></li>
    				</ul>
    			</div>
            </el-col>
            <el-col :span="4">
                <div class="footer-col">
    				<h4 class="footer-title">配送与支付</h4>
    				<ul class="list-unstyled footer-nav">
    					<li><a href="javascript:;">
    						货到付款区域
    					</a></li>
    					<li><a href="javascript:;">
    						配送支付智能查询</a></li>
    					<li><a href="javascript:;">
    						支付方式说明
    					</a></li>
    				</ul>
    			</div>
            </el-col>
            <el-col :span="4">
               <div class="footer-col">
    				<h4 class="footer-title">会员中心</h4>
    				<ul class="list-unstyled footer-nav">
    					<li><a href="javascript:;">售后流程
    					</a></li>
    					<li><a href="javascript:;">资金管理
    					</a></li>
    					<li><a href="javascript:;">
    						我的收藏
    					</a></li>
    				</ul>
    			</div>
            </el-col>
            <el-col :span="4">
               <div class="footer-col">
    				<h4 class="footer-title">服务保证</h4>
    				<ul class="list-unstyled footer-nav">
    					<li><a href="javascript:;"> 退换货原则
    					</a></li>
    					<li><a href="javascript:;">售后服务保证
    					</a></li>
    					<li><a href="javascript:;">产品质量保证
    					</a></li>  							
    				</ul>
    			</div>
            </el-col>
            <el-col :span="4">
               <div class="footer-col">
                    <h4 class="footer-title">备案信息</h4>
                    <ul class="list-unstyled footer-nav">
                        <li>
                            <a href="http://www.miitbeian.gov.cn/publish/query/indexFirst.action" target="_blank" class="record">京ICP备17065244号-1</a>
                        </li>
                    </ul>
                </div>
            </el-col>
            <el-col :span="4">
               <div class="footer-col erweima">
                    <img src="../../../assets/images/erweima.png" alt="">
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
export default {
  name:"FooterBottom"
}
</script>
<style lang="less" scoped>
    @fontSize: 1/16rem;
    @baseColor: #0275d8;
    .footer-col {
        padding: 30px 0;
        h4 {
            font-size: 15*@fontSize;
        }
        ul {
            padding: 0;
            margin: 0;
            >li {
                height: 35*@fontSize;
                line-height: 35*@fontSize;
                >a {
                    color: #333;
                    font-size: 14*@fontSize;
                }
            }
        }
    }
    .erweima {
        text-align: right;
        img {
            width: 150*@fontSize;
            height: 150*@fontSize;
        }
    }
</style>
