<template>
    <div class="statistics">
        <Layout> 
            <Type class='x' :dataSource="arr1" :value.sync='value'></Type>
            <Type class='y' :dataSource="arr2" :value.sync='date'></Type>
            <ol>
                <li class='section' v-for="(group,index) in result" :key="index">
                    <h3>{{index}}</h3>
                    <span>合计</span>
                    <ol>
                        <li class='items' v-for='items in group' :key="items.id">
                            <span>{{items.item.tags}}</span>
                            <span>{{items.item.notes}}</span>  
                            <span>￥{{items.item.amount}}</span>  
                            
                        </li>
                    </ol>
                </li>
            </ol>  
        </Layout>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                value: '-',
                date: 'day',
                arr1:[
                    {text: '支出',value: '-'},
                    {text: '收入',value: '+'}
                ],
                arr2: [
                    {text: '按天',value: 'day'},
                    {text: '按周',value: 'week'},
                    {text: '按月',value: 'month'},
                ],
                recordList: this.$store.state.recordList,
 
            }
        },
        computed:{
            result(){
                console.log(this.recordList)
                let leng = this.recordList.length
                let obj = {}
                this.recordList.forEach(node=>{
                    let [date,time] = node.createtime.split('T') 
                    console.log(typeof node.createtime)
                    obj[date] = obj[date] || []
                    obj[date].push({titile: date,time: time,item:node})
                })
                
                
                return obj
            }
        },

    }
</script>
<style scoped lang='scss'>
    .statistics{
        
    }
    .x.type ::v-deep .selected {                 /*样式穿透，>>>无法在scss语言里解析，使用::v-deep代替*/
       background: #fff;
       border-bottom: none;                 //.x.type 形成样式优先级
    }
    .y.type ::v-deep li {
        height:4rem;
        font-size: 1.6rem;
        line-height: 4rem;
    }
    li {
        background: #fff;
        &.section {
            position: relative;
            background: #eee;
            h3{
              display: inline-block;
            }
            >span {
                position: absolute;
                right: 1rem;
            }
        }
        &.items {
            
            padding: 0.3rem 0;
            display: flex;
            justify-content: space-between;
            >span {
                
            }
            >:nth-child(1){
            
                width: 6rem;
            }
            > :nth-child(2){
                color:#999;
                width: 8rem;
                margin-right: auto;
            }
            >:nth-child(3){
               margin-right: auot;
                
            }
        }
    }
</style>