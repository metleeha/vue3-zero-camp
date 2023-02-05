
<script>
    export default {
        name: 'BlogDetails',
        data() {
            return {
                id: this.$route.params.id
            }
        }
    }
</script>
<template>
    <h1 class="text-3xl font-medium tracking-tight text-white sm:text-4xl">Blog Details Page</h1>
    <!-- <p>The blog id is {{ $route.params.id }}</p> -->
    <p class="text-md text-white mt-5">The blog id is {{ id }}</p>
</template>
<style>
</style>