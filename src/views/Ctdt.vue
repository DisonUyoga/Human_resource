<template>
  
    <CTDT/>
    <main>
            <RouterView/>
  </main> 

    
</template>

<script>
import CTDT from '@/components/CTDT-Table.vue'
export default {
  name:'chra',
  components:{CTDT},
  data(){
    return{

    }
  },
  mounted(){
    document.title='CTDT|Human Resource'
  }

}
</script>

<style>

</style>