// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.
import Vue from 'vue'
import App from './App'
import router from './router'
// 引入vant
import Vant from 'vant';
import 'vant/lib/index.css';

// 引用axios
import axios from 'axios'
Vue.prototype.axios = axios

Vue.use(Vant)

Vue.config.productionTip = false
require("./mock")
/* eslint-disable no-new */
new Vue({
  el: '#app',
  router,
  components: { App },
  template: '<App/>'
  
})
