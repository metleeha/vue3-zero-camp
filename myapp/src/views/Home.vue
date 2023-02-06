<script>
export default {
    name: 'Home',
    data() {
        return {
            "API_KEY": import.meta.env.VITE_API_KEY,
            "time": [],
            "location": 'Oxford, United Kingdom'
        }
    },
    mounted() {
        fetch('https://timezone.abstractapi.com/v1/current_time?api_key=' + this.API_KEY + '&location=' + this.location)
            .then(res => res.json())
            .then(data => {
                this.time = data
                console.log(data)
            })
            .catch(err => console.log(err.message))
    }
}
</script>

<template>
    <div>
        <h1 class="text-3xl font-medium tracking-tight text-white sm:text-4xl">This is a Home Page</h1>
        <div class="my-10 inline-block"></div>
        <div v-if="time">
            <div
                class="bg-gray-300 hover:bg-purple-400 overflow-hidden w-1/3 mx-auto max-w-lg my-5 shadow sm:rounded-lg">
                <div class="px-4 py-5 sm:px-6">
                    <h2 class="font-bold text-xl text-gray-900 mt-2">{{ time.requested_location }}</h2>
                    <h2 class="font-bold text-xl text-gray-900 mt-2">{{ time.datetime }}</h2>
                </div>
            </div>
        </div>
        <div v-else>
            <p class="mt-10 text-xl text-white">Loading timezones...</p>
        </div>
    </div>
</template>

<style scoped>

</style>
