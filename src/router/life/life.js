const Life = () => import('@/views/life/Life.vue')//生活
export default [
    {
        path: '/life',
        name: 'Life',
        component: Life,
        meta:{
            title:"生活"
        }
    }
]