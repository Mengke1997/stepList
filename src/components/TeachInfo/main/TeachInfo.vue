<template>
  <el-row :gutter="40">
      <el-col :span="12" class="info">
            <Title title="技术课程" englishTitle="News" iconClass="icon-book"/>
             <a href="https://wiki.robo2025.com/" class="viewMoreItem" target="_blank"> 查看更多>></a>
            <Info :teachLessons="teachLesson"/>
      </el-col>
      <el-col :span="12" class="info">
          <Title title="行业信息" englishTitle="Platform dynamics" iconClass="icon-info"/>
            <a href="http://www.robot-china.com/" class="viewMoreItem" target="_blank"> 查看更多>></a>          
          <Info :teachLessons="platformInfo"/>
      </el-col>
  </el-row>
</template>
<script>
import Title from "../../title/title";
import Info from "./Info";
import moment from "moment";//引入日期格式化文件
export default {
    data(){
        return {
            teachLesson:[{
                aUrl:'https://wiki.robo2025.com/#/docs/hh/pxkc',
                imgUrl:require("../../../assets/images/teach1.png"),
                title:'弧焊技术培训教程',
                desc:'发那科机器人焊接系统作业克服了焊缝不稳定、工作效率低、对人体伤害大等缺点。提高焊接生产率...',
                time: moment().format('YYYY-MM-DD')
            },
            {
                aUrl:'https://wiki.robo2025.com/#/docs/md/pxkc',
                imgUrl:require("../../../assets/images/teach2.png"),
                title:'码垛机器人培训教程',
                desc:'码垛机器人大大节省了劳动力，节省空间。码垛机器人运作灵活精准、快速高效、稳定性高，作业  效率高...',
                time:moment().format('YYYY-MM-DD')
            },
            {
                aUrl:'https://wiki.robo2025.com/#/docs/dm/pxkc',
                imgUrl:require("../../../assets/images/teach3.png"),
                title:'打磨机器人培训教程',
                desc:'打磨机器人系统由工业机器人、力控制设备、终端执行器等外围设备硬件系统和机器人  力矩等软件系统组成...',
                time:moment().format('YYYY-MM-DD')
            }],
             platformInfo:[{
                aUrl:'http://www.robot-china.com/news/201803/23/50066.html',
                imgUrl:require("../../../assets/images/info1.png"),
                title:'2017国内机器人四龙头财报汇总',
                desc:'新松发布业绩快报，公司2017年1-12月实现营业收入24.55亿元，同比增长20.73%...',
                time:moment().format('YYYY-MM-DD')
            },
            {
                aUrl:'http://www.robot-china.com/news/201803/01/49598.html',
                imgUrl:require("../../../assets/images/info2.png"),
                title:'美的库卡公布中国机器人及自动化业务布局',
                desc:'美的与库卡携手发布重磅消息，美的将向库卡中国下属业务注资，共同成立3家合资公司，以拓展工业机器人...',
                time:moment().format('YYYY-MM-DD')
            },
            {
                aUrl:'https://wiki.robo2025.com/#/docs/dm/pxkc',
                imgUrl:require("../../../assets/images/info3.png"),
                title:'工业机器人市场前景广阔 国产品牌如何突破',
                desc:'工业机器人是一种面向工业领域的多关节机械手或多自由度的机器装置，它可以接受人类指挥...',
                time:moment().format('YYYY-MM-DD')
            }],
        }
    },
    created(){
    },
    methods:{
        
    },
    components:{
        Title,
        Info
    }
}
</script>
<style lang="less" scoped>
  .info {
      position: relative;
      .viewMoreItem {
            float: right;
            color: #333;
            font-size: 14px;
            margin-top: 4px;
            transform: translateY(-200%);
      }

  }
</style>
