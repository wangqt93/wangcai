<template>
    <div class="money">
        <Layout>
            <Tag  @xxx='y' @update:value='getdate'></Tag>
            <Btn @getok="putok"></Btn>
           
        </Layout>

    </div>
</template>
<script>
    import Tag from '@/components/money/tag'
    import Btn from '@/components/money/btn'

    export default {
        components:{
            Tag,
            Btn
        },
        data(){
            return {
                record: {
                    tags: '',
                    notes: '',
                    type: '-',
                    amount: 0,
                    createtime: ''
                },
                recordList: this.$store.state.recordList,
            }
        },
        methods:{
            y(value){
                this.record.tags = value
            },
            getdate(value){
                if(value === '-' || value === '+'){
                    this.record.type = value
                }else{
                    this.record.notes = value
                }
            },
            putok(value){
                this.record.amount = parseFloat(value)
                //用户点击OK，将recordList保存到localStorage
                const record2 = JSON.parse(JSON.stringify(this.record))   //深拷贝

                record2.createtime = new Date().toJSON()          //toISOString()
                console.log(record2.createtime)
               this.recordList.push(record2)
               this.$store.commit('getrecordList',this.recordList)
                // window.localStorage.setItem('recordList',JSON.stringify(this.recordList))

            }

        }
    }
</script>