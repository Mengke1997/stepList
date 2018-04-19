<template>
   <div class="industy">
       <el-row>
           <Title title="行业应用" englishTitle="Industry Application" iconClass="icon-wxbbiaowang"/>
           <!-- <el-col :span="24" class="title">
               <h4><i class="iconfont icon-wxbbiaowang"></i>行业应用 <span class="englishTitle">Industry Application</span></h4>
           </el-col> -->
           <el-col :span="6" class="industryLeft">
               <router-link to="/stepList" class="carry">
                    <img src="../../assets/images/carry.png" alt="">
               </router-link>
           </el-col>
           <el-col :span="12" class="industryCenter">
               <el-row>
                   <el-col :span="12">
                       <router-link to="/stepList" class="polish">
                            <img src="../../assets/images/polishing.png" alt="">
                       </router-link>
                   </el-col>
                   <el-col :span="12">
                       <router-link to="/stepList" class="welding">
                        <img src="../../assets/images/welding.png" alt="">
                       </router-link>
                   </el-col>
               </el-row>
               <el-row>
                   <el-col :span="12">
                       <router-link to="/stepList" class="clean">
                            <img src="../../assets/images/clean.png" alt="">
                       </router-link>
                   </el-col>
                   <el-col :span="12">
                       <router-link to="/stepList" class="sorting">
                            <img src="../../assets/images/sorting.png" alt="">
                       </router-link>
                   </el-col>
               </el-row>
               <el-row>
                   <el-col :span="12">
                       <router-link to="/stepList" class="pentu">
                            <img src="../../assets/images/pentu.png" alt="">
                        </router-link>
                   </el-col>
                   <el-col :span="12">
                       <router-link to="/stepList" class="cutting">
                            <img src="../../assets/images/cutting.png" alt="">
                       </router-link>
                   </el-col>
               </el-row>
           </el-col>
            <el-col :span="6" class="industryRight">
               <el-row>
                   <el-col :span="24">
                       <router-link to="/stepList">
                            <img src="../../assets/images/fit.png" alt="">
                       </router-link>
                    </el-col>     
               </el-row>
               <el-row>
                   <el-col :span="24">
                        <router-link to="/stepList">
                            <img src="../../assets/images/loading.png" alt="">
                        </router-link>   
                    </el-col>   
               </el-row>
           </el-col>
        </el-row>   
   </div>
</template>
<script>
import Title from "../title/title"
export default {
  components:{
      Title
  }
}
</script>

<style lang="less" scoped>
    @baseColor: #0275d8;
    @fontSize: 1/16rem;
    .industy {
        .title {
            border-bottom: 2px solid @baseColor;
            margin-bottom: 20*@fontSize;
        }
        h4 {
            margin: 12*@fontSize 0;
            font-size: 18*@fontSize;
            font-weight: normal;
        }
        .icon-wxbbiaowang {
            color: #fff;
            margin-right: 8*@fontSize;
            background-color: @baseColor;
            width: 25*@fontSize;
            height: 25*@fontSize;
            line-height: 25*@fontSize;
            border-radius: 50%;
            text-align: center;
            vertical-align: 2*@fontSize;
            font-size: 16*@fontSize;
            display: inline-block;
        }
        .industryLeft {
            >a {
                width: 100%;
                height: 394*@fontSize;
                display: block;
                transition: all 0.5s;
                img {
                    width: 100%;
                    height: 100%;
                }
                &:hover {
                    box-shadow: 0 2px 4px 0 rgba(0,0,0,.15), 0 2px 10px 0 rgba(0,0,0,.25);
	                transform: translateY(-3px);
                }
            }
        }
        .industryCenter {
            >div>div {
                margin-bottom: 10*@fontSize;
                padding-left: 10*@fontSize;
            }
            a {
                display: block;
                width: 100%;
                height: 125*@fontSize;
                transition: all 0.5s;
                img {
                    width: 100%;
                    height: 100%;
                }
                &:hover {
                    box-shadow: 0 2px 4px 0 rgba(0,0,0,.15), 0 2px 10px 0 rgba(0,0,0,.25);
	                transform: translateY(-3px);
                }
            }
        }
        .industryRight {
            >div>div {
                margin-bottom: 10*@fontSize;
                padding-left: 10*@fontSize;
            }
            a {
                display: block;
                width: 100%;
                height: 192*@fontSize;
                transition: all 0.5s;
                img {
                    width: 100%;
                    height: 100%;
                }
                &:hover {
                    box-shadow: 0 2px 4px 0 rgba(0,0,0,.15), 0 2px 10px 0 rgba(0,0,0,.25);
	                transform: translateY(-3px);
                }
            }
        }
    }
</style>
