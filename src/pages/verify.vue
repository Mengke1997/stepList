<template>
    <div id="loader" v-if="loading">
        <div id="shadow"></div>
        <div id="box"></div>
    </div>
</template>
<script>
import Cookies from "js-cookie";
export default {
  created() {
    this.initVerify();
  },
  mounted() {
    // alert(2);
  },
  data() {
    return {
      loading: true
    };
  },
  methods: {
      initVerify:function () {
          console.log(location.href);
          if(location.href.indexOf("?") === -1) {//注册页面返回
                let url = this.$urlConfig.config.loginUrl +"/server/authorize"+ "?" + "next="+ encodeURIComponent(`${location.origin}/#/verify`);
                console.log(url);
                location.href = url;
            } else {//登录页面返回
                var param = location.href.split("?")[1].split("#/")[0].split("=")[1];
                // console.log(param);
                // document.cookie = "accessData="+param+"; expires=Fri, 31 Dec 9999 23:59:59 GMT";
                Cookies.set('accessData', param, { expires: 365 });
                var originPath = localStorage.getItem("originPath") || location.origin + "/";
                // alert(originPath)
                location.href = originPath;
            }
      },
  }
};
</script>
<style lang="less" scoped>
#loader {
  position: absolute;
  background-color: rgba(255, 255, 255, 0.8);
  width: 100%;
  height: 100%;
  z-index: 9999;
}
@keyframes loader {
  0% {
    left: -100px;
  }
  100% {
    left: 110%;
  }
}
#box {
  width: 50px;
  height: 50px;
  background: #0275d8;
  animation: animate 0.5s linear infinite;
  position: absolute;
  top: calc(40% - 20px);
  left: calc(50% - 20px);
  border-radius: 3px;
}
@keyframes animate {
  17% {
    border-bottom-right-radius: 3px;
  }
  25% {
    transform: translateY(9px) rotate(22.5deg);
  }
  50% {
    transform: translateY(18px) scale(1, 0.9) rotate(45deg);
    border-bottom-right-radius: 40px;
  }
  75% {
    transform: translateY(9px) rotate(67.5deg);
  }
  100% {
    transform: translateY(0) rotate(90deg);
  }
}
#shadow {
  width: 50px;
  height: 5px;
  background: #000;
  opacity: 0.1;
  position: absolute;
  top: calc(40% + 45px);
  left: calc(50% - 20px);
  border-radius: 50%;
  animation: shadow 0.5s linear infinite;
}
@keyframes shadow {
  50% {
    transform: scale(1.2, 1);
  }
}
</style>
