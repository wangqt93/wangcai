<template>
    <div class="btn">
        <div class='output'>{{output}}</div>
        <div class='buttons clearfix'>
            <button @click='input'>1</button>
            <button @click='input'>2</button>
            <button @click='input'>3</button>
            <button @click='output+="+"'>+</button>
            <button @click='remove'>删除</button>
            <button @click='input'>4</button>
            <button @click='input'>5</button>
            <button @click='input'>6</button>
            <button @click='output+="-"'>-</button>
            <button @click ='output="0"'>清空</button>
            <button @click='input'>7</button>
            <button @click='input'>8</button>
            <button @click='input'>9</button>
            <button @click='output+="×"'>×</button>
            <button class='ok' @click='ok'>OK</button>
            <button @click='input'>0</button>
            <button @click='input'>.</button>
            <button @click='output+="%"'>%</button>
            <button @click='output+="÷"'>÷</button>
        </div>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                output: '0'
            }
        },
        methods:{
            remove(){          //删除键功能
                if(this.output.length === 1){
                    this.output = '0'
                }
                else{
                    this.output = this.output.slice(0,-1)
                }  
            },
            ok(){
               this.$emit('getok',this.output)
            },
            input(event){
                let str = event.target.innerHTML  
                if(this.output.length === 16) return
                if(this.output === '0'){
                    if(str ==='.'){
                        this.output+=str
                    }
                    else {
                        this.output = ""+str
                    }
                }
                else if(this.output.includes('.') && str === '.') return
                else {
                    this.output+=str
                }
                
            }
        },
        mounted(){
            
        },
        watch:{
            
        }
    }
</script>
<style scoped lang='scss'>
    .btn {
        >.output {
            font-size: 3.6rem;
            font-family: Consolas,monospace;  /*monospace 编程字体，字体等宽*/
            text-align: right;
            height: 6rem;
        }
        .buttons {
            width: 100vw;
            flex-wrap: wrap;
            float: left;
            $bg: #f2f2f2;
            >button {
                width: 20%;
                height: 6rem;
                font-size: 1.8rem;
                line-height: 6rem;
                border: none;
                outline: none;
            }
            >.ok {
                height: 12rem;
                float: right;
            }
            &.clearfix::after {
                display: block;
                content: '';
                clear: both;
            }
            & :nth-child(1){
                background: $bg;
            }
            & :nth-child(2),& :nth-child(6){
                background: darken($bg,4%);
            }
            & :nth-child(3), & :nth-child(7), & :nth-child(11){
                background: darken($bg,8%);
            }
            & :nth-child(4), & :nth-child(8), & :nth-child(12), & :nth-child(16){
                background: darken($bg,12%);
            }
            & :nth-child(5), & :nth-child(9), & :nth-child(13), & :nth-child(17){
                background: darken($bg,16%)
            }
            & :nth-child(10), & :nth-child(14), & :nth-child(18){
                background: darken($bg,20%);
            }
            & :nth-child(19){
                background: darken($bg,22%);
            }
            & :nth-child(15){
                background: darken($bg,28%);
            }
        }

    }
</style>