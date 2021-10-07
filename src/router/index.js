import Vue from 'vue'
import VueRouter from 'vue-router'
import Home from '../views/Home.vue'
import Stories from '../views/Stories.vue'
import Story from '../views/Story.vue'

Vue.use(VueRouter)

const routes = [
  {
    path: '/',
    name: 'Home',
    component: Home
  },
  {
    path: '/stroies',
    name: 'Stories',
    component: Stories
  },
  {
    path: '/story/:id',
    name: 'Story',
    component: Story
  }
]

const router = new VueRouter({
  mode: 'history',
  base: process.env.BASE_URL,
  routes
})


export default router
