<template>
  <div class="home">
    <div v-if="error">{{ error }}</div>
    <div v-if="posts.length" class="layout">
      <PostList :posts="posts" />
      <TagCloud :posts="posts" />
    </div>
    <div v-else>
      <ZeroSpinner />
    </div>
  </div>
</template>

<script>
import getPosts from "../utils/getPosts";
// components import 
import PostList from "../components/PostList.vue";
import TagCloud from "../components/TagCloud.vue";
import ZeroSpinner from "../components/ZeroSpinner.vue";

export default {
  name: "HomeView",
  components: { PostList, TagCloud, ZeroSpinner },
  setup() {
    const { posts, error, load } = getPosts();

    load();

    return { posts, error };
  },
};
</script>

<style>
.home {
  padding: 10px;
}

.layout {
  padding: 10px;
  display: grid;
  grid-template-columns: 3fr 1fr;
  gap: 20px;
}
</style>
