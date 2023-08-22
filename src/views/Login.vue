<template>
    
    <div class="w-full xl:flex xl:items-center xl:grid xl:grid-cols-2  mt-32">
       
        <div class="main-left">
            <div class="xl:px-6 xl:py-6 md:p-2  bg-blue-900 border border-yellow-500 w-full rounded">
                                
                                <div id="default-carousel" class="relative w-full" data-carousel="slide">
                                                <!-- Carousel wrapper -->
                                                <div class="relative h-56 overflow-hidden rounded-lg md:h-96">
                                                <!-- Item 1 -->
                                                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                    <img src="@/assets/graduation-1.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                                                </div>
                                                <!-- Item 2 -->
                                                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                    <img src="@/assets/graduation-2.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                                                </div>
                                                <!-- Item 3 -->
                                                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                    <img src="@/assets/graduation-3.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                                                </div>
                                                <!-- Item 4 -->
                                                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                    <img src="@/assets/graduation-4.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                                                </div>
                                                <!-- Item 5 -->
                                                <div class="hidden duration-700 ease-in-out" data-carousel-item>
                                                    <img src="@/assets/graduation-5.jpg" class="absolute block w-full -translate-x-1/2 -translate-y-1/2 top-1/2 left-1/2" alt="...">
                                                </div>
                                                </div>
                                                <!-- Slider indicators -->
                                                <div class="absolute z-30 flex space-x-3 -translate-x-1/2 bottom-5 left-1/2">
                                                <button type="button" class="w-3 h-3 rounded-full" aria-current="true" aria-label="Slide 1" data-carousel-slide-to="0"></button>
                                                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 2" data-carousel-slide-to="1"></button>
                                                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 3" data-carousel-slide-to="2"></button>
                                                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 4" data-carousel-slide-to="3"></button>
                                                <button type="button" class="w-3 h-3 rounded-full" aria-current="false" aria-label="Slide 5" data-carousel-slide-to="4"></button>
                                                </div>
                                                <!-- Slider controls -->
                                                <button type="button" class="absolute top-0 left-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                                                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                                                    </svg>
                                                    <span class="sr-only">Previous</span>
                                                </span>
                                                </button>
                                                <button type="button" class="absolute top-0 right-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                                                <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                                                    <svg class="w-4 h-4 text-white dark:text-gray-800" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                                                        <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                                                    </svg>
                                                    <span class="sr-only">Next</span>
                                                </span>
                                                </button>
                            </div>


            </div>

        </div>
       
       
       <div class="main-right">
        <div class="bg-blue-900 m-5 rounded">
                <p class="text-white text-center font-[Poppins] pt-5">Login</p>
                <form class="space-y-6" v-on:submit.prevent="submitForm">
                    <div class="bg-white-700 flex p-5 m-5 items-center justify-between space-x-2  rounded">
                    <span class="bg-white py-2 px-2 rounded border border-yellow-500">
                        <ion-icon name="mail-outline"></ion-icon>
                        
                    </span>
                    <input type="text" v-model="form.email" placeholder="Enter E-mail" class="rounded border border-yellow-500 w-full border border-yellow-500">
                </div>

                <div class="bg-white-700 flex p-5  m-5  items-center justify-between space-x-2  rounded">
                    <span class="bg-white py-2 px-2 rounded border border-yellow-500">
                        <ion-icon name="key-outline"></ion-icon>
                        
                    </span>
                    <input type="password" v-model="form.password" placeholder="Enter password" class="rounded w-full border border-yellow-500">
                   
                </div>
                <template v-if="errors.length>0">
                    <div class="bg-red-300 text-white rounded-lg p-6">
                        <p v-for="error in errors" v-bind:key="error">{{ error }}</p>

                    </div>
                </template>
                
                <div class="p-5  m-5 ">
                    <button class="text-white font-[Poppins] px-4 cursor-pointer px-2 rounded hover:px-6 duration-500 hover:underline hover:text-cyan-700  bg-cyan-500">Login</button>
                </div>

                </form>

       </div>
       </div>

    </div>

     </template>
     <script>
    import axios from 'axios'
    import {useUserStore} from '@/stores/user'
    import {useToastStore} from '@/stores/toast'
    
    export default {
    
        setup(){
            const userStore=useUserStore()
            const toastStore=useToastStore()
    
            return{
                userStore, toastStore
            }
    
        },
        data(){
            return{
                form:{
                email:'',
                password:'',
                },
                errors:[]
    
            }
        },
        methods:{
            async submitForm(){
                this.errors=[]
                if(this.form.email===''){
                    this.errors.push('Your email is missing')
                }
                if(this.form.password===''){
                    this.errors.push('Your password is missing')
                }
    
                if(this.errors.length===0){
                    await axios
                     .post('/api/account/login/', this.form)
                     .then(response=>{
                        this.userStore.setToken(response.data)
                        axios.defaults.headers.common['Authorization']= "Bearer " + response.data.access;
                      console.log('success')
    
                     })
                     .catch(error=>{
                        console.log('error', error)
                        this.errors.push('The email or password is incorrect')
                     })
    
                    }
    
                    if(this.errors.length===0){
                     await axios
                        .get('/api/account/me/')
                        .then(response=>{
                            console.log('success2')
                            this.userStore.setUserInfo(response.data)
    
                            this.$router.push("/HrCertifications")
                        })
                        .catch(error=>{
                            console.log('error', error)
                        })
                }
    
            }
        }
    
    }
    </script>
     