import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import store from './store/index.js'
import VueLazyload from 'vue-lazyload'
import VueWechatTitle from 'vue-wechat-title' //设置页面标题

Vue.use(VueWechatTitle)

//src下的assets目录下的图片
Vue.use(VueLazyload,{
  error:require('./assets/imgs/error.jpg'),
  loading:require('./assets/imgs/loading.gif')
})

router.beforeEach((to, from, next) => {
  store.commit("isShow", true)
  window.setTimeout(() => {
    store.commit("isShow", false)
    next()
  }, 2000)

})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')