
<template>
    <div class="max-w-7xl mx-auto grid grid-cols-5 gap-4">
      
      <nav  class="bg-blue-500 col-span-5 max-w-7xl mx-auto flex items-center justify-between  dark:bg-gray-900  py-2 px-2 m-1 fixed z-20 mt-16  border-2 border-yellow-600 rounded-lg dark:border-gray-600">
         
          <div class="max-w-7xl mx-auto">
              <div class="flex items-center justify-between">
                  
                  <router-link to="/ctmp-certifiedHumanResource">
                      <div class="flex items-center justify-between ">
                          <p class="text-sm text-white mr-4 hover:border-b  active:text-black hover:italic hover:text-gray-500 hover:bg-white visited:bg-blue-100 active:bg-white-200 focus:bg-teal-500  hover:px-1" aria-selected="true">Certified Human Resource Auditors</p>
                      </div>
                  </router-link>
  
                  <router-link to="/ctmp-courseoverview">
                      <div class="flex items-center justify-between ">
                          <p class="text-sm text-white  hover:border-b hover:italic active:text-black hover:text-gray-500 px-4 border-l hover:bg-white active:bg-white hover:px-1" aria-selected="true">Course Overview</p>
                      </div>
                  </router-link>
                  <router-link to="/ctmp-courseoutline">
                      <div class="flex items-center justify-between ">
                          <p class="text-sm text-white  hover:border-b hover:italic active:text-black hover:text-gray-500 px-4 border-l hover:bg-white active:bg-white hover:px-1">Course Outline</p>
                      </div>
                  </router-link>
                  <router-link to="/ctmp-designation">
                      <div class="flex items-center justify-between ">
                          <p class="text-sm text-white  hover:border-b hover:italic active:text-black hover:text-gray-500 px-4 border-l hover:bg-white active:bg-white hover:px-1">Designation</p>
                      </div>
                  </router-link>
                  <router-link to="/ctmp-requirements">
                      <div class="flex items-center justify-between ">
                          <p class="text-sm text-white  hover:border-b hover:italic active:text-black hover:text-gray-500 border-l px-4 hover:bg-white active:bg-white hover:px-1">Requirements</p>
                      </div>
                  </router-link>
                  <router-link to="/ctmp-trainingcalender">
                      <div class="flex items-center justify-between ">
                          <p class="text-sm text-white  hover:border-b hover:italic active:text-black hover:text-gray-500 border-l px-4 hover:bg-white active:bg-white hover:px-1">Training Calender</p>
                      </div>
                  </router-link>
                  <router-link to="/ctmp-registrationcertificate">
                      <div class="flex items-center justify-between ">
                          <p class="text-sm text-white  hover:border-b hover:italic active:text-black hover:text-gray-500 border-l px-4 hover:bg-white active:bg-white hover:px-1">Registration Certificate</p>
                      </div>
                  </router-link>
              </div>
          </div>
      </nav>
    </div>
  </template>
  
  <script>
  export default {
  
  }
  </script>
  
  <style>
  
  </style>