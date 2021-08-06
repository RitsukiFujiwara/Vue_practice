import Vue from 'vue'
import VueRouter from 'vue-router'

import News from '@/components/News.vue'
import About from '@/components/About.vue'

Vue.use(VueRouter)

const routes = [
    {path: './news',component: News},
    {path: './about',component: About}
]
const router = new VueRouter({
    mode: 'history',
    routes
})

export default router