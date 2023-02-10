<template>
  <div class="post">
    <router-link :to="{ name: 'post', params: { id: post.id }}">
      <h3>{{ post.title }}</h3>
    </router-link>
    <p>{{ snippet }}</p>
    <span v-for="tag in post.tags" :key="tag">
      #{{ tag }}
    </span>
  </div>
</template>

<script>
import {computed} from 'vue';


export default {
  props: ["post"],
  setup(props) {
    const snippet = computed(() => {
      return props.post.body.substring(0, 200) + "...";
    })
    return { snippet }
  },
};
</script>

<style>
.post {
  text-align: left;
  padding: 1.5rem;
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
.post span {
  color: #3d3d3d;
  margin: 0 0.25rem;
}
</style>
