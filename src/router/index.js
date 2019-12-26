import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import PageNav from './pageNav.js'//页面导航
import Home from './home/home.js'//首页
import Life from './life/life.js'//生活


const routerList = [
    ...PageNav,
    ...Home,
    ...Life 
]
export default new Router({
    mode: 'history',
    routes: routerList
})