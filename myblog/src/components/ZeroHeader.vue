<template>
  <header class="sticky top-0 block text-xl text-gray-900 font-semibold">
    <div class="container mx-auto space-y-6 py-6">
      <div
        class="flex items-center justify-around border-b-2 border-gray-100 py-6 md:justify-start md:space-x-10"
      >
        <div class="flex justify-start lg:w-0 lg:flex-1">
          <a href="#">
            <span class="sr-only">Zero's Blog</span>
            <img
              class="h-8 w-auto sm:h-10"
              src="@/assets/logo.svg"
              alt="Vue logo"
            />
          </a>
        </div>
        <div class="flex mr-10">
          <RouterLink class="router-deco" to="/">Home</RouterLink>
          <RouterLink class="router-deco" to="/about">About</RouterLink>
        </div>
      </div>
    </div>
  </header>
</template>

<script>
import { RouterLink } from "vue-router";

export default {
  name: "ZeroHeader",
  components: {
    RouterLink,
  },
};
</script>

<style scoped>
.router-deco {
  margin: 0 0.75rem;
}
.router-deco:hover {
  text-decoration-line: underline;
  text-underline-offset: 2rem;
  text-decoration-color: #a3e635;
  text-decoration-thickness: 0.5rem;
}
</style>
