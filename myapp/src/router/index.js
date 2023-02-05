import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/Blog.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/blogs',
        name: 'Blog',
        component: Blog
      }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
export default router