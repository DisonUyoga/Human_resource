<template>
    <div class="bg-gray-100 rounded max-w-7xl mt-20 mx-auto  md:w-full xl:grid xl:grid-cols-2 xl:gap-4">
      
     
        <div class="bg-gray-200 rounded space-x-4 overflow-hidden border border-yellow-500 flex m-6 col-span-2 flex p-12">
           
            
            <div class="main-left w-full">
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
                  
                   
                   
                   
                   
                   
                     
                     <div class="main-left w-full">

                        <div class="xl:px-6 xl:py-6 md:p-2  bg-blue-500 border border-yellow-500 w-full rounded">
                        <p class="text-center border border-yellow-500 font-[Poppins] xl:text-xl md:py-6 md:px-6 bg-blue-900 md:text-sm xl:py-4  m-6 xl:px-4 text-white rounded mb-2">Register</p>
                           <form class="space-y-5  m-6 " v-on:submit.prevent="submitForm">
                           
                               <div class="flex items-center justify-between space-x-2">
                                   <div class="bg-white md:px-6 xl:p-5 md:py-6 rounded  border-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                                    </svg>
    
                                   </div>
       
                                  
                                   <input type="text" v-model="form.name"  placeholder="Full name" class="md:px-2 w-full xl:p-5 md:py-2 rounded">

                               </div>
                               
                               
                               <div class="flex items-center justify-between space-x-2">
                                   <div class="bg-white md:px-6 xl:p-5 md:py-6 rounded  border-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 6.75v10.5a2.25 2.25 0 01-2.25 2.25h-15a2.25 2.25 0 01-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0019.5 4.5h-15a2.25 2.25 0 00-2.25 2.25m19.5 0v.243a2.25 2.25 0 01-1.07 1.916l-7.5 4.615a2.25 2.25 0 01-2.36 0L3.32 8.91a2.25 2.25 0 01-1.07-1.916V6.75" />
                                    </svg>
    
                                   </div>
       
                                  
                                   <input type="email" v-model="form.email" placeholder="Email" class="md:px-2 xl:p-5 w-full md:py-2 rounded">
                               </div>
                               <div class="flex items-center justify-between space-x-2">
                                   <div class="bg-white md:px-6 xl:p-5 md:py-6 rounded  border-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                    </svg>

    
                                   </div>
       
                                  
                                   <input type="password" v-model="form.password1" placeholder="Password" class="md:px-2 xl:p-5 w-full md:py-2 rounded">
                               </div>

                               <div class="flex items-center justify-between space-x-2">
                                   <div class="bg-white md:px-6 xl:p-5 md:py-6 rounded  border-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M15.75 5.25a3 3 0 013 3m3 0a6 6 0 01-7.029 5.912c-.563-.097-1.159.026-1.563.43L10.5 17.25H8.25v2.25H6v2.25H2.25v-2.818c0-.597.237-1.17.659-1.591l6.499-6.499c.404-.404.527-1 .43-1.563A6 6 0 1121.75 8.25z" />
                                    </svg>
    
                                   </div>
       
                                  
                                   <input type="password" v-model="form.password2" placeholder="Repeat Password" class="md:px-2 xl:p-5 w-full md:py-2 rounded">
                               </div>
    
                               <div class="flex items-center justify-between space-x-2">
                                   <div class="bg-white md:px-6 xl:p-5 md:py-6 rounded  border-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                        <path fill-rule="evenodd" d="M1.5 4.5a3 3 0 013-3h1.372c.86 0 1.61.586 1.819 1.42l1.105 4.423a1.875 1.875 0 01-.694 1.955l-1.293.97c-.135.101-.164.249-.126.352a11.285 11.285 0 006.697 6.697c.103.038.25.009.352-.126l.97-1.293a1.875 1.875 0 011.955-.694l4.423 1.105c.834.209 1.42.959 1.42 1.82V19.5a3 3 0 01-3 3h-2.25C8.552 22.5 1.5 15.448 1.5 6.75V4.5z" clip-rule="evenodd" />
                                    </svg>
    
                                   </div>
       
                                  
                                   <input type="text" v-model="form.phone" placeholder="Phone number" class="md:px-2 w-full xl:p-5 md:py-2 rounded">
                                  
                               </div>
    
                               <div class="flex items-center justify-between space-x-2">
                                   <div class="bg-white md:px-6 xl:p-5 
                                   md:py-6 rounded  border-gray-200">
                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" class="w-6 h-6">
                                        <path fill-rule="evenodd" d="M7.5 6a4.5 4.5 0 119 0 4.5 4.5 0 01-9 0zM3.751 20.105a8.25 8.25 0 0116.498 0 .75.75 0 01-.437.695A18.683 18.683 0 0112 22.5c-2.786 0-5.433-.608-7.812-1.7a.75.75 0 01-.437-.695z" clip-rule="evenodd" />
                                    </svg>
    
                                   </div>
       
                                  
                                   <input type="text" v-model="form.position"  placeholder="Position" class="md:px-2 w-full xl:p-5 md:py-2 rounded">
                                  
                               </div>
                               
                                    <div class="inline-block">
                                        <input type="checkbox" value="terms"> <p class="inline-block test-xs"><strong class="text-white">I accept ACHRP </strong>Terms and Conditions</p> 
                                    </div>
                               
                                
       
                                    <template v-if="errors.length>0">
                                        <div class="bg-red-300 text-white rounded-lg p-6">
                                             <p v-for="error in errors" v-bind:key="error">{{ error }}</p>

                                        </div>
                                    </template>
                           
                               <div>
                                   <button class="py-4 px-6 bg-cyan-500 font-[Poppins] text-white rounded duration-500 hover:bg-cyan-700 md:py-2 hover:py-4">Register</button>
                               </div>
       
                           </form>
       
                       </div>
                     </div>
        </div>
   
              
   
        
        
        
            
   </div>
     </template>


<script>
import axios from 'axios'
import {useToastStore} from '@/stores/toast'
export default {
    setup(){
        const toastStore= useToastStore()

        return{toastStore
        }

    },
    data(){
        return{
            form:{
                email:'',
                name:'',
                password1:'',
                password2:'',
                phone:'',
                position:'',
            },
            errors:[],

        }
    },
    methods:{
        submitForm(){
            this.errors=[]
            if(this.form.email===''){
                this.errors.push('Your email is missing')
            }
            if(this.form.name===''){
                this.errors.push('Your name is missing')
            }
            if(this.form.password1===''){
                this.errors.push('Your password1 is missing')
            }
            if(this.form.password1!==this.form.password2){
                this.errors.push('passwords do not match')
            }
            if(this.form.phone===''){
                this.errors.push('Your phone number is missing')
            }
            if(this.form.position===''){
                this.errors.push('Your position is missing')
            }
            
            if(this.errors.length===0){
                axios
                 .post('/api/account/signup/', this.form)
                 .then(response=>{

                    if(response.data.message=='success'){
                        this.toastStore.showToast(5000, 'The user is registered.', 'bg-cyan-500')
                        console.log('success')

                        this.form.email=''
                        this.form.name=''
                        this.form.password1=''
                        this.form.password2=''
                        this.form.position=''
                        this.form.phone=''
                    } else{

                        const data=JSON.parse(response.data.message)
                        for(const key in data){
                           this.errors.push(data[key][0].message)
                        }
                        this.toastStore.showToast(5000, 'Something went wrong please try again', 'bg-red-300')
                       

                    }
                 })
                 .catch(error=>{
                    console.log('error', error)
                 })
            }
        }

    }

}
</script>

<style>

</style>
     
     