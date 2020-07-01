<template>
    <div class="statistics">
        <Layout> 
            <Type class='x' :dataSource="arr1" :value.sync='value'></Type>
            <ol>
                <li class='section' v-for="(group,index) in result" :key="index">
                    <h3>{{change(index)}}</h3>
                    
                    <ol>
                        <li class='items' v-for='items in group' :key="items.id">
                            <span>{{items.item.tags}}</span>
                            <span>{{items.item.notes}}</span>  
                            <span ref='xx'>￥{{items.item.amount}}</span>  
                        </li>
                    </ol>
                </li>
            </ol>  
        </Layout>
    </div>
</template>
<script>
    import dayjs from 'dayjs'
    console.log(dayjs().valueOf())
    export default {
        data(){
            return {
                value: '-',
                date: 'day',
                arr1:[
                    {text: '支出',value: '-'},
                    {text: '收入',value: '+'}
                ],
                recordList: this.$store.state.recordList,
            }
        },
        computed:{
            result(){                                    
                let leng = this.recordList.length
                let obj = {}
                let recordList2 = this.recordList.filter(arr=>arr.type === this.value)
                recordList2.forEach(node=>{
                    let [date,time] = node.createtime.split('T')
                    obj[date] = obj[date] || []
                    obj[date].push({item:node})
                })
                return obj
            },
        },
        methods:{
            change(value){                             //时间显示
                const oneDay = 86400*1000
                let pastTime = dayjs(value)
                if(pastTime.isSame(dayjs(),'day')){
                    return '今天'
                }else if(pastTime.isSame(dayjs().valueOf() - oneDay , 'day')){
                    return '昨天'
                }else if(pastTime.isSame(dayjs().valueOf() - oneDay*2,'day')){
                    return '前天'
                }
                return value
            },
            
        }
    }
</script>
<style scoped lang='scss'>
    .statistics{
        font-size: 1.4rem;
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
            >:nth-child(2){
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