<template>
  <div class="test border-lime-400 border-2">
    <PostList :posts="posts" />
  </div>
</template>

<script>
import { ref } from "vue";

import PostList from "../components/PostList.vue";
export default {
  name: "HomeView",
  components: { PostList },
  setup() {
    const posts = ref([
      {
        title: "How to start project with vue3 + vite",
        body: "Nullam faucibus dapibus ullamcorper. Sed a arcu a turpis pharetra eleifend. Vestibulum pulvinar diam vitae odio ornare, et aliquet massa aliquam. Etiam gravida mi blandit nunc suscipit volutpat. Nam pharetra sem eget urna accumsan faucibus. Aliquam ut nunc ut urna dictum pellentesque. Integer convallis, nulla eget porta faucibus, arcu orci condimentum diam, et rutrum erat augue sit amet nisl. Integer diam leo, sagittis sed tellus a, condimentum volutpat nisl. Mauris id tincidunt turpis. Ut at consectetur felis. Vivamus eget lacus tempus, fermentum quam id, lacinia elit. Suspendisse hendrerit finibus purus, id pellentesque nunc bibendum quis. Cras et iaculis nibh. Praesent eget sem et nunc sollicitudin sodales at vitae lorem. In eros tellus, dignissim at neque vel, consectetur faucibus magna. Nullam ac condimentum enim.",
        id: 1,
      },
      { title: "Top 5 CSS UI Framework 2023", body: "Lorem ipsum", id: 2 },
    ]);

    return { posts };
  },
};
</script>

<style>
.test {
  text-align: center;
  padding: 5rem;
}
.test h3{
  font-family: Merriweather, serif;
  font-size: 1.5rem;
  margin: 2rem 0;
}
.test p{
  font-family: Raleway, sans-serif;
  font-size: 1rem;
  margin: 2rem 0;
}
</style>