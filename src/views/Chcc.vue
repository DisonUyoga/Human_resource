<template>
  
    <CHCC />
    <main>
            <RouterView/>
  </main> 

    
</template>

<script>
import CHCC from '@/components/CHCC-Table2.vue'
export default {
  name:'chra',
  components:{CHCC},
  data(){
    return{

    }
  },
  mounted(){
    document.title='CHCC|Human Resource'
  }

}
</script>

<style>

</style>