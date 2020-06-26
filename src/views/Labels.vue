<template>
    <div class="labesl">
        <Layout>
            <Test :data.sync='xxx'></Test>

        </Layout>
    </div>
</template>
<script>
    import Test from '@/components/test.vue'
    export default {
        data(){
            return{
                xxx: 12345
            }
        },
        components: {
            Test
        }
    }
</script>