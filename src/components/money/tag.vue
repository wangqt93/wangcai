<template>
    <div class="container">
        <div class="tags">
            <ul>
                <li v-for='item in tagList' :key='item' @click='addSelected(item)'
                    :class="selectedTags.indexOf(item)>= 0 ? 'selected' : ''"
                >{{item}}</li>
            </ul>
            <button @click='create'>新增标签</button>
        </div>
        <div class="notes">
            <label>
                {{value}}
                <span>备注</span>
                <input type="text" placeholder="在这里输入备注" v-model='value'>
            </label>
        </div>
        <ul class="types">
            <li :class= "type === '-' ? 'selected' : ''" @click="changLi('-')">支出</li>
            <li :class= "type === '+' ? 'selected' : ''" @click="changLi('+')">收入</li>
        </ul>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                type: '-',
                value: '',
                selectedTags: [],
                tagList: this.$store.state.tagList  
            }
        },
        methods: {
           changLi(type){
               this.type = type
               
           },
        //    onChange(event){
        //        this.value = event.target.value
        //    },
           addSelected(item){
               if(this.selectedTags.indexOf(item)>=0){    //判断item是否存在
                   let index = this.selectedTags.indexOf(item)
                   this.selectedTags.splice(index,1)
                  
               }else{
                    this.selectedTags.push(item)     
               }
               this.$emit('xxx',this.selectedTags)
           },
           create(){
                this.$store.commit('changeTag')
           }
        },
        mounted(){
           
        },
        watch:{
            value(newval){
               
                this.$emit('update:value',newval)
            },
            type(newval){
                this.$emit('update:value',newval)
            }
        }
    }
</script>
<style scoped lang='scss'> 
    .tags {
        padding: 1.6rem;
        flex-grow: 1;
        position: relative;
        > ul {
            display: flex;
            flex-wrap: wrap;
            >li {
                background:#d9d9d9;
                $h1: 2.4rem;
                $h2: 1.2rem;
                height: $h1;
                line-height: $h1;
                border-radius: $h2;
                padding: 0 1.6rem;
                margin-right: $h2;
                margin-bottom: $h2;
                
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
            position: absolute;
            bottom: 1rem;
            left: 1.6rem;

        }
        .selected{
            background: #333;
            color: #fff;
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