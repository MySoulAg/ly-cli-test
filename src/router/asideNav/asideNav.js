const AsideNav = () => import('@/views/asideNav/AsideNav.vue')//侧边栏锚点，滚动条平滑滚动
export default [
    {
        path: '/aside-nav',
        name: 'AsideNav',
        component: AsideNav,
        meta:{
            title:"侧边栏锚点，滚动条平滑滚动"
        }
    }
]