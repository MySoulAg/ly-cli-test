const News = () => import('@/views/news/News.vue')//新闻
export default [
    {
        path: '/news',
        name: 'News',
        component: News,
        meta:{
            title:"新闻"
        }
    }
]