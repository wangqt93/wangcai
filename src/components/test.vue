<template>
    <div class="type">
        <ul class="types">
            <li :class="types === '-'? 'selected':''" @click="changLi('-')">支出</li>
            <li :class="types === '+'? 'selected' : ''" @click="changLi('+')">收入</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                types: '-',
            }
        },
        methods: {
            changLi(type){
                this.types = type
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