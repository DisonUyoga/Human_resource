<template>
  
    <CHRA />
    <main class="mt-10">
            <RouterView/>
  </main> 16

    
</template>

<script>
import CHRA from '@/components/CHRA-Table.vue'
export default {
  name:'chra',
  components:{CHRA},
  data(){
    return{

    }
  },
  mounted(){
    document.title='CHRA|Human Resource'
  }

}
</script>

<style>

</style>