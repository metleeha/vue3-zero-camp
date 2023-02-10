import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import PostView from "../views/PostView.vue";
import CreateView from "../views/CreateView.vue";
import TagView from "../views/TagView.vue";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/posts/:id",
      name: "post",
      component: PostView,
      props: true,
    },
    {
      path: "/create",
      name: "create",
      components: CreateView,
    },
    {
      path: "/tags/:tag",
      name: "Tag",
      component: TagView,
    }
  ],
});

export default router;
