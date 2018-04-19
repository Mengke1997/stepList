import Topbar from "./main/Topbar.vue";

Topbar.install = function(Vue) {
    Vue.component(Topbar.name, Topbar);
  };

  export default Topbar;