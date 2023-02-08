<template>
  <div class="grid grid-cols-3 gap-4">
    <div class="col-span-4 lg:col-span-2 p-5 border-lime-400 border-2">
      <p>post list</p>
    </div>
    <div id="profile" class="p-5 grid grid-cols-1 divide-y-2">
      <ZeroProfile />
      <div class="text-center mt-10">
        <p></p>
      </div>
    </div>
  </div>
</template>

<script>
import ZeroProfile from "../components/ZeroProfile.vue";
export default {
  name: "HomeView",
  components: { ZeroProfile },
};
</script>

<style>
@media screen and (max-width: 1024px) {
  #profile {
    display: none;
  }
}
</style>