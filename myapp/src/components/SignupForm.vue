<script>
export default {

}

</script>

<template>
  <div class="flex min-h-full items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
      <div class="w-full max-w-md space-y-8">
        <div class="mt-20">
            <h2 class="mt-6 text-center text-3xl font-bold tracking-tight text-gray-900">Sign in to your account</h2>
        </div>
        <form class="mt-20 space-y-6" action="#" method="POST">
            <input type="hidden" name="remember" value="true" />
                <div class="-space-y-px rounded-md shadow-sm">
                    <div class="mb-8">
                        <label 
                            for="email" 
                            class="block font-bold text-sm mb-2">
                            Email
                        </label>
                        <input 
                            id="email" 
                            name="email" 
                            type="email" 
                            autocomplete="email" 
                            required 
                            class="relative block w-full appearance-none rounded-none rounded-t-md outline-none border-b-2 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                            placeholder="Email" 
                        />
                    </div>
                    <div class="mb-8">
                        <label 
                            for="password" 
                            class="block font-bold text-sm mb-2">
                            Password
                        </label>
                        <input 
                            id="password" 
                            name="password" 
                            type="password" 
                            autocomplete="current-password" 
                            required=""
                            class="relative block w-full appearance-none rounded-none rounded-b-md outline-none border-b-2 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                            placeholder="Password" 
                        />
                    </div>
                </div>
            </form>
        </div>

    </div>
</template>

<style scoped>

</style>
