// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue';
import Vuex from 'vuex';
import ElementUI from 'element-ui';
import "babel-polyfill";
import 'element-ui/lib/theme-chalk/index.css';
import App from './App.vue';
import router from './router';
import store from "./store/store";
import config from "./util/urlConfig";
import axios from 'axios';
import Cookies from "js-cookie";
// console.log(Cookies)
Vue.use(Vuex);
Vue.use(ElementUI);

Vue.prototype.$http = axios; //把axios挂载到原型上，不必每个页面引入
Vue.prototype.$urlConfig = config; //把所有域名挂载Vue原型上
Vue.prototype.$Cookies = Cookies; //把Cookies挂载到原型上
import "./assets/style.less";

Vue.config.productionTip = false;
// 每次切换组件页面回到顶部
router.afterEach(function (to, from, next) {
  window.scrollTo(0, 0)
})

//页面每次接受请求时检测是否已登录
const AUTH_TOKEN = Cookies.get("accessData");
axios.defaults.headers.common['Authorization'] = AUTH_TOKEN;
axios.interceptors.response.use(function (response) {
    // Do something with response data
    // console.log(response)
    return response;
  }, function (error) {
    // Do something with response error
    console.log(error)
  });
/* eslint-disable no-new */
const app = new Vue({
  el: '#app',
  router,
  store,
  components: { App },
  template: `<App />`
// render:h=>h(App)
})
