<template>
    <div class="money">
        <Layout>
            <Btn></Btn>
            <Tag></Tag>
            
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
        }
    }
</script>