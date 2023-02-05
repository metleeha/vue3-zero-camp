<script setup>
</script>

<template>
  <div class="bg-gradient-to-b from-gray-900 to-gray-600 items-center h-screen">
    <nav class="bg-gray-900">
      <div id="nav" class="py-6 mx-auto flex justify-center items-center">
          <router-link class="text-3xl mr-10 font-bold text-white hover:text-purple-800" to="/">HOME</router-link>
          <router-link class="text-3xl font-bold text-white hover:text-purple-800" :to="{ name: 'Blog'}">BLOG</router-link>
      </div>
    </nav>
    <div class="mx-auto text-center lg:py-32">
      <router-view />
    </div>
  </div>
</template>

<style scoped>
#nav a.router-link-exact-active {
  color: white;
  text-decoration-line: underline;
  text-decoration-color: purple;
  text-decoration-thickness: 0.2em;
}
</style>
