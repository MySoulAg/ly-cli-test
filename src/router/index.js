import Vue from 'vue'
import Router from 'vue-router'
Vue.use(Router)

import PageNav from './pageNav.js'//页面导航
import Home from './home/home.js'//首页
import Life from './life/life.js'//生活
import AsideNav from './asideNav/asideNav.js'//侧边栏锚点，滚动条平滑滚动
import News from './news/news.js'//新闻


const routerList = [
    ...PageNav,
    ...Home,
    ...Life, 
    ...AsideNav,
    ...News
]
export default new Router({
    mode: 'history',
    routes: routerList
})