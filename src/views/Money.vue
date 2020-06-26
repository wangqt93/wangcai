<template>
    <div class="money">
        <Layout>
            <Btn @getok="putok"></Btn>
            <Tag :tagList.sync='tagList' @xxx='y' @update:value='getdate'></Tag>
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
                tagList: ['衣','食','住','行'],
                record: {
                    tags: [],
                    notes: '',
                    type: '-',
                    amount: 0,
                    createtime: ''
                },
                recordList: []
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
                record2.createtime = new Date()
               this.recordList.push(record2)
                window.localStorage.setItem('recordList',JSON.stringify(this.recordList))
            }

        },
        mounted(){
                if(window.localStorage.getItem('recordList')){
                    this.recordList =  JSON.parse(localStorage.getItem('recordList'))
                }


        }
    }
</script>