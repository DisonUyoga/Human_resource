<template>
 
  <div class="max-w-7xl mx-auto grid grid-cols-5 mt-32 gap-4">
      


       <div class="xl:p-4 bg-white rounded xl:flex xl:items-center xl:justify-between md:mx-2 col-span-5">
                <div class="p-2 bg-yellow-500 rounded xl:mb-2">
                    <p>2023 TRAINING CALENDER</p>
                </div>    
                <button class="p-2 rounded md:m-4 bg-blue-800 md:text-xs  text-white hover:px-6 hover:underline">DOWNLOAD</button>
       </div>
        
       <div class="inline-block bg-white py-2 px-2 rounded-lg col-span-4 main-center">
            <p class="inline-block">Training Calender & Certification for Hr Professionals as well as for those handling HR roles</p>
       </div>
     

        
          
          
          
           
           

           
<div class="p-4 bg-gray-200 border border-yellow-200 rounded-lg col-span-5 overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
            <tr>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    S/No
                </th>
                <th scope="col" class="px-6 py-3">
                    Course Title
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Date
                </th>
                <th scope="col" class="px-6 py-3">
                    Duration
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    Venue
                </th>
                <th scope="col" class="px-6 py-3">
                    Cost
                </th>
                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                    CPD
                </th>
                <th scope="col" class="px-6 py-3">
                    Registration
                </th>
            </tr>
        </thead>
        <tbody>
            <tr 
            class="border-b border-gray-200 dark:border-gray-700"
            v-for=" calender in calenders"
            :key="calender.id"
            >
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                    {{calender.serial_number}}
                </th>
                <td class="px-6 py-4">
                    {{calender.course_title}}
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    {{calender.date}}
                </td>
                <td class="px-6 py-4">
                    {{calender.duration}}
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    {{calender.venue}}
                </td>
                <td class="px-6 py-4">
                    ksh.{{calender.cost}}
                </td>
                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                    {{calender.cpd}}
                </td>
                <td class="px-6 py-4">
                    <button class="bg-teal-500 px-2 py-4 text-white rounded-lg" @click="registration(calender.id)">Register</button>
                </td>
            </tr>
            
        </tbody>
    </table>
</div>

                 
                       
                                   
                                   
                           
      
    </div>
</template>

<script>
export default {
    props:{
        calenders: Object
    },
    data(){
        return{

        }
    },
    methods:{
        registration(id){
            console.log('registration id:', id)
        }
    }

}
</script>

<style>

</style>