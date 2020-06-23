<template>
    <div class="container">
        <ul class="types">
            <li :class= "type === '-' ? 'selected' : ''" @click="changLi('-')">支出</li>
            <li :class= "type === '+' ? 'selected' : ''" @click="changLi('+')">收入</li>
        </ul>
        <div class="notes">
            <label>
                <span>备注</span>
                <input type="text" placeholder="在这里输入备注">
            </label>
        </div>

        <div class="tags">
            <ul>
                <li>衣</li>
                <li>食</li>
                <li>住</li>
                <li>行</li>
            </ul>
            <button>新增标签</button>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                type: '-'
            }
        },
        methods: {
           changLi(type){
               this.type = type
               
           }
        }
    }
</script>
<style scoped lang='scss'>
    .tags {
        padding: 1.6rem;
        > ul {
            display: flex;
            >li {
                background:#d9d9d9;
                $h1: 2.4rem;
                $h2: 1.2rem;
                height: $h1;
                line-height: $h1;
                border-radius: $h2;
                padding: 0 1.6rem;
                margin-right: $h2;
            }
        }
        >button {
            background: transparent;
            border: none;
            border-bottom: 1px solid;
            margin-top: 1.6rem;
            padding-bottom: 3px;
            color: #999;
            outline: none;
        }
    }
    .notes {
       background: #f5f5f5; 
       font-size: 1.4rem;
       padding: 0 1rem;
      
       >label {
           display: flex;
           align-items: center;
       }
       span {
           padding-right: 1rem;
       }
       input {
           height: 6.4rem;
           flex-grow: 1;
           border: none;
           background: #f5f5f5;
           outline: none;
       }
    }
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