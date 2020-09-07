import Vue from 'vue'
import Router from 'vue-router'
import MainPage from "@/pages/MainPage";
Vue.use(Router)

const router = new Router({
    mode: 'history',
    routes: [
        {
            path: '',
            content: MainPage,
            query: {
                page: 1
            }
        },
    ]
})

export default router