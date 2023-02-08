<script setup>
import { RouterView } from "vue-router";
import ZeroFooter from "./components/ZeroFooter.vue";
import ZeroHeader from "./components/ZeroHeader.vue";
</script>

<template>
  <ZeroHeader />
  <main class="container mx-auto">
    <RouterView />
  </main>
  <ZeroFooter />
</template>

<style scoped></style>
