import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import VueWechatTitle from 'vue-wechat-title'//设置页面标题

Vue.use(VueWechatTitle)

Vue.config.productionTip = false


new Vue({
  router,
  render: h => h(App),
}).$mount('#app')
