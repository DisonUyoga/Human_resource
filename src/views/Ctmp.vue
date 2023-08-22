<template>
  
    <CTMP />
    <main class="px-6 py-1 mt-0 col-span-4">
            <RouterView/>
  </main> 
</template>

<script>
import CTMP from '@/components/CTMP-Table.vue'
export default {
  name:'chra',
  components:{CTMP},
  data(){
    return{

    }
  },
  mounted(){
    document.title='CTMP|Human Resource'
  }

}
</script>

<style>

</style>