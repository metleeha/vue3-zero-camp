<template>
  <div v-if="error">{{ error }}</div>
  <div v-if="post" class="post">
    <h3>{{ post.title }}</h3>
    <p class="pre">{{ post.body }}</p>
  </div>
  <div v-else>Loading...</div>
</template>

<script>
import getPost from "../utils/getPost";
import { useRoute } from "vue-router";

export default {
  props: ["id"],
  setup() {
    const route = useRoute();
    const { error, post, load } = getPost(route.params.id);
    load();
    return { error, post };
  },
};
</script>

<style scoped>
.post {
  text-align: left;
  padding: 5rem;
  margin-left: 2rem;
}

.post h3 {
  font-family: Merriweather, serif;
  font-size: 1.5rem;
  margin: 2rem 0;
}

.post p {
  font-family: Raleway, sans-serif;
  font-size: 1rem;
  margin: 2rem 0;
}

.pre {
  white-space: pre-wrap;
}
</style>
