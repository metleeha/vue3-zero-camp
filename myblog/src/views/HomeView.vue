<template>
  <div class="test border-lime-400 border-2">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length">
      <PostList :posts="posts" />
    </div>
    <div v-else>Loading...</div>
  </div>
</template>

<script>
import { ref } from "vue";

import PostList from "../components/PostList.vue";
export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const posts = ref([]);
    const error = ref(null);

    const load = async () => {
      try {
        let data = await fetch("http://localhost:3000/posts");
        if (!data.ok) {
          throw Error("no available data");
        }
        posts.value = await data.json();
        console.log(posts.value);
      } catch (err) {
        error.value = err.message;
        console.log(error.value);
      }
    };

    load();

    return { posts, error };
  },
};
</script>

<style>
.test {
  text-align: center;
  padding: 5rem;
}
.test h3 {
  font-family: Merriweather, serif;
  font-size: 1.5rem;
  margin: 2rem 0;
}
.test p {
  font-family: Raleway, sans-serif;
  font-size: 1rem;
  margin: 2rem 0;
}
</style>
