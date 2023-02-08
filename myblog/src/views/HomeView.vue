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
import getPosts from "../utils/getPosts";
// components import 
import PostList from "../components/PostList.vue";
export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const { posts, error, load } = getPosts();

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
