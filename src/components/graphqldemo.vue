<template>
<div class="d-flex justify-center mb-6">
    <v-btn @click="Levelmethods" class="center" >Get my data</v-btn>
    
    {{levelvalue}}
    
</div>
  
</template>

<script>
import {getLevelsQuery} from '../apiQueries/level'
import{apolloClient} from '../apollo'
export default {
name:"graphqldemo",
data(){
    return{
        levelvalue:"",
    }
},
methods:{ 
    
    async Levelmethods(){
  
     const response = await apolloClient.query({
        
            query: getLevelsQuery()
        });
    this.levelvalue=response;
    console.log(response);
},
}
}
</script>

<style>
.btn1{
    color: rgb(29, 230, 163);
    border-style: solid;
    border-radius: 20px;
    border-color: black;
    width: 20;
    height: 50;
}

</style>