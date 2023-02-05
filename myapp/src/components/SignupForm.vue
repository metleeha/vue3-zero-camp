<script>
export default {
    data() {
        return {
            email: '',
            password: '',
            role: '',
            skills: [],
            tempSkill: '',
        }
    },
    methods: {
        addSkill($event) {
            if($event.key === ',' && this.tempSkill) {
                if (!this.skills.includes(this.tempSkill)) {
                    this.skills.push(this.tempSkill.slice(0,-1))
                }
                this.tempSkill = ''
            }
        },        
        deleteSkill(skill) {
            this.skills = this.skills.filter(item => {
                return skill !== item
            })
        }
    }
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
                            EMAIL
                        </label>
                        <input 
                            v-model="email"
                            id="email" 
                            name="email" 
                            type="email" 
                            autocomplete="email" 
                            required 
                            class="relative block w-full appearance-none rounded-none rounded-t-md outline-none border-b-2 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                            placeholder="Email" 
                        />
                    </div>
                </div>
                <div class="-space-y-px rounded-md shadow-sm">
                    <div class="mb-8">
                        <label 
                            for="password" 
                            class="block font-bold text-sm mb-2">
                            PASSWORD
                        </label>
                        <input 
                            v-model="password"
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
                <div class="-space-y-px rounded-md shadow-sm">
                    <div class="mb-8">
                        <label 
                            for="Role" 
                            class="block font-bold text-sm mb-2">
                            ROLE
                        </label>
                        <select
                            v-model="role"
                            id="role" 
                            class="relative block w-full appearance-none rounded-none rounded-b-md outline-none border-b-2 border-gray-300 px-3 py-2 text-gray-900focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm" 
                        >
                            <option value="developer">Web Developer</option>
                            <option value="designer">Web Designer</option>
                        </select>
                    </div>
                </div>
                <div class="-space-y-px rounded-md shadow-sm">
                    <div class="mb-8">
                        <label 
                            for="Skills" 
                            class="block font-bold text-sm mb-2">
                            SKILLS (press comma to add)
                        </label>
                        <input 
                            type="text"
                            v-model="tempSkill"
                            @keyup="addSkill"
                            class="relative block w-full appearance-none rounded-none rounded-b-md outline-none border-b-2 border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-indigo-500 focus:outline-none focus:ring-indigo-500 sm:text-sm"         
                        />
                        <div class="flex flex-wrap">
                            <div v-for="skill in skills" :key="skill" class="mt-3 text-xs font-semibold rounded-full px-4 py-1 mx-1 leading-normal bg-indigo-500 text-white hover:bg-gray-900">
                                <span @click="deleteSkill(skill)">{{ skill }}</span>
                            </div>
                        </div>
                    </div>
                </div>
            </form>
            <!-- two-way data binding -->
            <p class="mb-6 text-sm text-gray-900">Email: {{ email }}</p>
            <p class="mb-6 text-sm text-gray-900">password: {{ password }}</p>
            <p class="mb-6 text-sm text-gray-900">Your role: {{ role }}</p>
        </div>
    </div>
</template>

<style scoped>

</style>
