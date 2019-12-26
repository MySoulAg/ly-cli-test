const Home = () => import('@/views/home/Home.vue')//首页
export default [
    {
        path: '/home',
        name: 'Home',
        component: Home,
        meta:{
            title:"首页"
        }
    }
]