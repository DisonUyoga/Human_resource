<template>
   <div class="bg-white px-6 py-6 main-center rounded-lg border border-yellow-500">
            <h3>Table</h3>
            
            <div class="bg-blue-500 text-white">
                    <div class="table-header">
                        <div class="table-header__item"
                        v-for="item in headerItems"
                        :key="item"
                        >
                            <p>{{ item.toUpperCase() }}</p>
                        </div>
                
                    </div>
            </div>
                    
            <div class="table-row"
            v-for="row in props.rows"
            :key="row.id"
            >
                <div
                class="table-column__item"
                v-for="column in Object.values(row)"
                :key="column"
                >
                {{ column }}
                </div>
        
            </div>
   </div>
</template>

<script setup>
import {computed, defineProps} from 'vue'
const props =defineProps({
    rows:{
        type: Object,
        required:true
    }
})

const headerItems = Object.keys(props.rows[0])
console.log(headerItems)

</script>

<style>
.table-row, .table-header{ 
    display: flex;
    flex-wrap: nowrap;
}
.table-header__item,
.table-column__item{
    width: 25%;
    border: solid 1px #4d4d4d;
    padding: 8px;
    box-sizing: border-box;
   
}

</style>