<template>
    <div class="user">
        <el-row>
            <Title title="用户中心" englishTitle="User" iconClass="icon-yonghu-tianchong"/>
            <!-- <el-col :span="24" class="title">
                <h4><i class="iconfont icon-yonghu-tianchong"></i>用户中心 <span class="englishTitle">User</span></h4>
            </el-col> -->
            <el-col :span="24">
                <div class="tipInfo">
                    <a href="javascript:;" :class="[userInfoShow?'displayNone':'','pleaseLogin']" @click="login">立即登录</a>
                    <span :class="[!userInfoShow?'displayNone':'','username']">{{userInfo.username}}</span>
                    <a href="javascript:;" :class="[userInfoShow?'displayNone':'','pleaseRegister']" @click="register">注册账号</a>
                    <a href="javascript:;" :class="[!userInfoShow?'displayNone':'','loginOut']" @click="loginOut">退出登录</a>
                    <a href="javascript:;" class="userDirection">用户指南 <i class="iconfont icon-gengduo"></i> </a>
                </div>
            </el-col>
        </el-row>
    </div>
</template>
<script>
import Title from "../title/title";
import {mapState,mapActions} from "vuex"
export default {
    components:{
        Title
    },
    created(){
    },
    data(){
        return {
            isShow: this.$store.state.isShow
        }
    },
    methods:{
        ...mapActions(['login','register','loginOut','getUserInfo']),
    },
    computed:{
        ...mapState(['userInfo','userInfoShow']),
    }
}
</script>
<style lang="less" scoped>
    @baseColor: #0275d8;
    @fontSize: 1/16rem;
    .user {
        margin-left: -10px;
        .title {
            border-bottom: 2px solid @baseColor;
            margin-bottom: 20*@fontSize;
        }
        h4 {
            margin: 12*@fontSize 0;
            font-size: 18*@fontSize;
            font-weight: normal;
        }
        .icon-yonghu-tianchong {
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
        .tipInfo {
            width: 100%;
            height: 394*@fontSize;
            background: url(../../assets/images/user.png) no-repeat;
            background-size: cover;
            overflow: hidden;
            text-align: center;
            padding-top: 170*@fontSize;
            box-sizing: border-box;
            .pleaseLogin, .pleaseRegister, .username, .loginOut {
                border-radius: 20*@fontSize;
                background: #0275f8;
                font-size: 16*@fontSize;
                font-weight: 500;
                color: #fff;
                height: 40*@fontSize;
                line-height: 40*@fontSize;
                width: 150*@fontSize;
                text-align: center;
                display: block;
                margin: 30px auto;
            }
            .pleaseRegister,.loginOut {
                border: 2px solid #fff;
                background-color: transparent;
            }
            .userDirection {
                color: #f5f5f5;
                display: block;
                text-align: center;
                font-size: 14*@fontSize;
                .icon-gengduo {
                    vertical-align: -2*@fontSize;
                }
            }

        }
    }
    .displayNone {
        display: none!important;
    }
</style>
