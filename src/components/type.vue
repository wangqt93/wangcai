<template>
    <div class="type">
        <ul class="types">
            <li v-for='item in dataSource' :key="item.value" 
            @click='changLi(item)'
            :class="value === item.value ? 'selected' : ''"
            >{{item.text}}</li>

        </ul>
        
    </div>
</template>
<script>
    export default {
        data(){
            return {
               
            }
        },
        props:['dataSource','value'],
        methods: {
            changLi(obj){
               this.$emit('update:value',obj.value)
            } 
        }  
    }
</script>
<style scoped lang='scss'>
    .types {
        background: #c4c4c4;
        display: flex;
        font-size: 2.4rem;
        >li {
            width: 50%;
            height: 6rem;
            text-align: center;
            line-height: 6.4rem;
            &.selected {
                border-bottom: 3px solid #333;
            }
        }
    }
</style>