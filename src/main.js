import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import VueWechatTitle from 'vue-wechat-title' //设置页面标题

Vue.use(VueWechatTitle)

router.beforeEach((to,from,next)=>{
  store.commit("isShow",true)
  window.setTimeout(()=>{
    store.commit("isShow",false)
    next()
  },2000)
 
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')