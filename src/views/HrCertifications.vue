<template>
<div class="max-w-7xl mx-auto  bg-white border-2 border-yellow-700   px-2 mt-20 grid-cols-5 gap-4 rounded-lg">

    <div class="flex items-center justify-between border border-600-yellow">
        <nav class="bg-yellow-600 col-span-5 max-w-7xl mx-auto flex items-center mt-4 justify-between  dark:bg-gray-900  py-2 px-2  fixed z-20 top-28  border-2 border-yellow-600 rounded-lg dark:border-gray-600">
        
        
        <div class="max-w-7xl mx-auto col-span-5 items-center flex justify-between">
            <div class="flex items-center justify-between col-span-5 ">
                <router-link to="/HrCertifications/chra">
                    <div class="flex items-center justify-between ">
                        <p class="text-sm  hover:border-b mr-4 hover:italic hover:bg-white active:bg-white hover:px-1" id="certifiedHumanResource" @click="menu">CHRA</p>
                    </div>
                </router-link>
    
                <router-link to="/HrCertifications/ctmp">
                    <div class="flex items-center justify-between">
                        <p class="text-sm  hover:border-b border-l-4 px-4 active:bg-white hover:italic hover:bg-white hover:px-1">CTMP</p>
                    </div>
                </router-link>
    
                <router-link to="/HrCertifications/chcc">
                    <div class="flex items-center justify-between ">
                        <p class="text-sm  hover:border-b px-4 border-l-4 active:bg-white hover:bg-white hover:px-1">CHCC</p>
                    </div>
                </router-link>
    
                <router-link to="/HrCertifications/ctdt">
                    <div class="flex items-center justify-between">
                        <p class="text-sm  hover:border-b px-4 border-l-4 active:bg-white hover:bg-white hover:px-1">CTDP</p>
                    </div>
                </router-link>
    
                <router-link to="#">
                    <div class="flex items-center justify-between">
                        <p class="text-sm  hover:border-b px-4 border-l-4 active:bg-white hover:bg-white hover:px-1">CODP</p>
                    </div>
                </router-link>
    
                <router-link to="#">
                    <div class="flex items-center justify-between">
                        <p class="text-sm  hover:border-b px-4 border-l-4 active:bg-white hover:bg-white hover:px-1">CCT</p>
                    </div>
                </router-link>
    
                <router-link to="#">
                    <div class="flex items-center justify-between">
                        <p class="text-sm  hover:border-b px-4 border-l-4 active:bg-white hover:bg-white hover:px-1">CERP</p>
                    </div>
                </router-link>
    
                <router-link to="#">
                    <div class="flex items-center justify-between">
                        <p class="text-sm  hover:border-b px-4 border-l-4 active:bg-white hover:bg-white hover:px-1">CWC</p>
                    </div>
                </router-link>
                <router-link to="#">
                    <div class="flex items-center justify-between">
                        <p class="text-sm hover:border-b px-4 border-l-4 active:bg-white hover:bg-white hover:px-1">CHRBP</p>
                    </div>
                </router-link>
                <router-link to="#">
                    <div class="flex items-center justify-between">
                        <p class="text-sm  hover:border-b px-4 border-l-4 active:bg-white hover:bg-white hover:px-1">CHCA</p>
                    </div>
                </router-link>
                <router-link to="#">
                    <div class="flex items-center justify-between">
                        <p class="text-sm  hover:border-b px-4 border-l-4 active:bg-white hover:bg-white hover:px-1">CLLA</p>
                    </div>
                </router-link>
                <router-link to="#">
                    <div class="flex items-center justify-between ">
                        <p class="text-sm hover:border-b px-4 border-l-4 active:bg-white hover:bg-white hover:px-1">CHRC</p>
                    </div>
                </router-link>
                <router-link to="#">
                    <div class="flex items-center justify-between ">
                        <p class="text-sm  hover:border-b px-4 border-l-4 active:bg-white hover:bg-white hover:px-1">CHRM</p>
                    </div>
                </router-link>
                <router-link to="#">
                    <div class="flex items-center justify-between ">
                        <p class="text-sm  hover:border-b px-4 border-l-4 active:bg-white hover:bg-white hover:px-1">CHRD</p>
                    </div>
                </router-link>
            </div>
                
            
        </div>
      </nav>
    </div>
    
  
  <main>
            <RouterView/>
  </main> 
    
  
  </div>
</template>

<script>
export default {
name:'HrCertifications',
data(){
    return{

    }
},
mounted(){
    document.title= 'HR Certifications|Human Resource'
    this.menu()
},
watch(){
this.menu()
},

methods:{
    menu(){
        let data = document.getElementById('certifiedHumanResource')
        console.log(this.$route.name)
        console.log(data.id)
        if(this.$route.name==data.id){
            data.classList.add('bg-cyan-500')
        }else{
            data.classList.remove('bg-white')
        }
    }
}
}
</script>

<style>

</style>