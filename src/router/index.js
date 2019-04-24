import Vue from 'vue'
import Router from 'vue-router'

const HelloWorld = () => import ('@/pages/HelloWorld')
const Error404 = () => import('@/pages/Error404')

Vue.use(Router)

const routes = [
  { path: '/', name: 'root', component: HelloWorld },
  { path: '*', component: Error404 }
]

const router = new Router({
  mode: 'history',
  routes
})

export default router