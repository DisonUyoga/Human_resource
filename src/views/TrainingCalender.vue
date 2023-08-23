<template>
    <div class="w-full mx-auto">
        <Table2 :calenders="calenders"/>
    </div>
  
 
</template>

<script>
import Table2 from '@/components/Table2.vue'
import axios from 'axios'
export default{
    name: 'TrainingCalender',
    components:{Table2},
    data(){
        return{
            calenders: {},
        }
    },
    mounted(){
        this.getData()
    },
    methods:{
        getData(){
            axios
            .get('/api/trainingCalender/')
            .then(response=>{
                this.calenders=response.data
                console.log(response.data)
            })
            .catch(error=>{
                console.log('Training:', error)
            })
        }
    }
    
}
</script>

