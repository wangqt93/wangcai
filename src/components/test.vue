<template>
    <div class="test">
        
        <input type="text" v-model ='name'>
        <div>{{arr2}}</div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                arr:[1,2,4,6,5],
                name: 'hjsdfsdfgdd'
            }
        },
        computed:{
            arr2(){
                console.log(this.arr)
                return this.arr.reverse()
                
                
            }
        },
        watch:{
            name(){
                console.log(this.name)
            },
            arr(){
                console.log(this.arr)
            }
        }
    }
</script>
<style>    
    .test div {
        height: 100px;
        border: 1px solid;
       
    }
</style>