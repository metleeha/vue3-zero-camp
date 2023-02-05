<script>
export default {
    name: 'Blog',
    data() {
        return {
            "blogs": [
                { title: "USA: NewYork", id: 1, "details": "visiting art galleries and museums" },
                { title: "Thailand: Chian Mai", id: 2, "details": "exploring remote workspaces" },
                { title: "Mongolia: Ulaanbaatar", id: 3, "details": "riding a horese at an equestrian camp" }
            ]
        }
    }
}
</script>

<template>
  <h1 class="text-3xl font-medium tracking-tight text-white sm:text-4xl">This is a Blog Page</h1>
  <div class="my-10 inline-block"></div>
    <div v-for="blog in blogs" :key="blog.id">
      <div class="bg-gray-300 hover:bg-purple-400 overflow-hidden w-1/3 mx-auto max-w-lg my-5 shadow sm:rounded-lg">
        <div class="px-4 py-5 sm:px-6">
          <router-link :to="{name: 'BlogDetails', params: { id: blog.id }}">
            <h2 class="font-bold text-xl text-gray-900 mt-2">{{ blog.title }}</h2>
          </router-link>
        </div>
      </div>
    </div>
</template>

<style scoped>

</style>