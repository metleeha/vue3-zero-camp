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
        path: '/blogs',
        name: 'Blog',
        component: Blog
      },
      {
        path: '/blogs/:id',
        name: 'BlogDetails',
        component: BlogDetails,
        props: true
      }
]

const router = createRouter({
    history: createWebHistory(import.meta.env.BASE_URL),
    routes
  })
  
export default router