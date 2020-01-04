import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Vuex from 'vuex'
import VueWechatTitle from 'vue-wechat-title' //设置页面标题

Vue.use(VueWechatTitle)

Vue.use(Vuex)

const store = new Vuex.Store({
  state: {
    count: 10010
  },
  mutations: {
    increment (state) {
      state.count++
    }
  }
})

Vue.config.productionTip = false

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')