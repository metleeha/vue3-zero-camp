import { createRouter, createWebHistory } from 'vue-router'
import Home from '../views/Home.vue'
import Blog from '../views/blog/Blog.vue'
import BlogDetails from '../views/blog/BlogDetails.vue'

const routes = [
    {
        path: '/',
        name: 'Home',
        component: Home
      },
      {
        path: '/blog',
        name: 'Blog',
        component: Blog
      },
      {
        path: '/blog/:id',
        name: 'BlogDetails',
        component: BlogDetails  
      }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
export default router