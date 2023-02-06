
<script>
export default {
    props: ['id'],
    data() {
        return {
            blog: null
        }
    },
    mounted() {
        fetch('http://localhost:3000/blogs/' + this.id)
            .then(res => res.json())
            .then(data => this.blog = data)
            .catch(err => console.log(err.message))
        }
}
</script>
<template>
    <div v-if="blog">
        <h1 class="text-3xl font-medium tracking-tight text-white sm:text-4xl">{{ blog.title }}</h1>
        <p class="text-md text-white mt-5">{{ blog.details }}</p>
    </div>
    <div v-else>
        <p>Loading blog details...</p>
    </div>
</template>
<style>
</style>