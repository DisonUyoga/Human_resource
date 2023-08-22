<template>

<div class="bg-white border border-gray-200 rounded-lg col-span-4">
                            <form v-on:submit.prevent="submitForm" class="p-4 flex space-x-4">
                                <input v-model="query" type="search" class="p-4 w-full bg-gray rounded-lg" placeholder="what are you looking for?">
                                <button href="#" class="inline-block py-4 px-6 bg-teal-600 text-white rounded-lg">
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                                    </svg>
                                </button>

                            </form>

                        </div>
       
  
          
    
             
  
        <div class="p-12 bg-gray-200 border border-yellow-200 rounded-lg col-span-5 overflow-x-auto shadow-md sm:rounded-lg">
                    <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                        <thead class="text-xs text-gray-700 uppercase dark:text-gray-400">
                            <tr>
                                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    S/No
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Full Name
                                </th>
                                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    Institution
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Certified Since
                                </th>
                                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    Period
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Renewal Date
                                </th>
                                <th scope="col" class="px-6 py-3 bg-gray-50 dark:bg-gray-800">
                                    Certification No
                                </th>
                                <th scope="col" class="px-6 py-3">
                                    Status
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr class="border-b border-gray-200 dark:border-gray-700">
                                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap bg-gray-50 dark:text-white dark:bg-gray-800">
                                    1
                                </th>
                                <td class="px-6 py-4">
                                    Dison Obudho
                                </td>
                                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    ACHR
                                </td>
                                <td class="px-6 py-4">
                                    2/4/2023
                                </td>
                                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    2 years
                                </td>
                                <td class="px-6 py-4">
                                    4/5/2023
                                </td>
                                <td class="px-6 py-4 bg-gray-50 dark:bg-gray-800">
                                    dpdeer
                                </td>
                                <td class="px-6 py-4">
                                    <button class="bg-teal-500 px-2 py-4 text-white rounded-lg">Active</button>
                                </td>
                            </tr>
                            
                        </tbody>
                    </table>
            </div>

</template>



<script>


</script>