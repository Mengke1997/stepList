<template>
    <div class="loginRegister">
        <a href="javascript:;" :class='{"displayNone" : userInfoShow}' @click="login">
            请登录
        </a>
        <span :class='[{"displayNone" : userInfoShow},"verticalLine"]'>|</span>
        <a href="javascript:;" :class='{"displayNone" : userInfoShow}' @click="register">免费注册</a>
        <span :class='{"displayNone" : !userInfoShow}'>您好, {{userInfo.username}}</span>
        <span :class='[{"displayNone" : !userInfoShow},"verticalLine"]'>|</span>
        <a href="javascript:;" :class='{"displayNone" : !userInfoShow}' @click="loginOut">退出</a>
    </div>
</template>
<script>
import {mapState,mapGetters,mapActions,mapMutations} from "vuex"
export default {
    name:"LoginRegister",
    created(){
       this.getUserInfo();
    //    console.log('111',this.userInfo)
    },
    data(){
        return {
            // isShow:false,
        }
    },
    mounted(){
        
    },
    methods:{

       ...mapActions(['login','register','loginOut','getUserInfo']),
    //    ...mapMutations(['updateCount','a/updateText'])
    },
    computed:{
        //同名的时候直接使用数组
        // ...mapState(['count']),
        // ...mapState({
        //     counter:'count'
        // }),
        ...mapState(['userInfo','userInfoShow']),
        // count(){
        //     return this.$store.state.count
        // },
        // ...mapGetters(['fullName'])
        // fullName(){
        //     return this.$store.getters.fullName
        // }
        ...mapGetters({
            // full:'fullName',
            // textC:'a/textPlus'
        }),
        textA(){
            // return this.$store.state.a.text
        },
        textB(){
            // return this.$store.state.b.text
        }

    }
}
</script>
<style lang="less" scoped>
    @baseColor:#0275d8;
    .loginRegister {
        float: left;
    }
    a, span {
        font-size: 14/16rem;
        color: #666;
        text-decoration: none;
    }
    .displayNone {
        display: none;
    }
    .displayInlineBlock {
        display: inline-block;
    }
    .verticalLine {
        font-size: 12/16rem;
        vertical-align: 1/16rem;
        margin: 0 5px;
        color: #999;
    }
</style>


