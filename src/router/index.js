import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})

router.beforeEach((to, from, next) => {
  const token = localStorage.getItem('token')
  if (to.name !== 'login' && !token) {
    next({ name: 'login' })
  } else {
    const role = localStorage.getItem('role')
    if (!to.meta || (to.meta && !to.meta.role) || (to.meta && role === to.meta.role) || role === roles.ADMIN) {
      next()
    } else {
      alert('Your cant nav to this page with your role')
      next(false)
    }
  }
})
export default router
