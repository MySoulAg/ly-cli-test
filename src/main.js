import Vue from 'vue'
import App from './App.vue'
import router from './router/index.js'
import Vuex from 'vuex'
import VueWechatTitle from 'vue-wechat-title' //设置页面标题

Vue.use(VueWechatTitle)
Vue.use(Vuex)

Vue.config.productionTip = false

const store = new Vuex.Store({
  //state用来定义状态值
  state: {
    count: 0
  },
  //mutations用来修改状态的相关函数，在组件内部用过commit提交执行
  mutations: {
    add: function (state) { //都是传入这个state参数
      state.count++
    },
    sub: function (state) {
      state.count--
    }
  }
});


new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app')