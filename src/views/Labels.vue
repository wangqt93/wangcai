<template>
    <div class="label">
        <Layout>
            <div class="lab">
                <ul>
                    <li v-for='item in tagList' :key='item' @click='openitem(item)'>
                        <span class='title'>{{item}}</span>
                        <span class='iconfont icon-right'></span>
                    </li>
                </ul>
                <button @click='create'>新建标签</button>
            </div>
        </Layout>
    </div>
</template>
<script>
    export default {
        data(){
            return {
                tagList: this.$store.state.tagList,
                setitem: this.$store.state.setitem
            }
        },
        computed:{
        },
        methods:{
            create(){
                this.$store.commit('changeTag')
            },
            openitem(key){
                let id = key
                    this.$router.push({
                        path: '/labels/edit',
                        query: {
                            id: id
                        }
                    })
                this.$store.commit('setdata',id)   //将id 传入vuex的setdata函数
               

            }
        }
    }
</script>
<style scoped lang='scss'>
    .label {
        background: whitesmoke;
        .lab {
            text-align: center;
        }
    }
    ul {
        margin-bottom: 2rem;
        li {
            display: flex;
            border-bottom: 1px solid #e6e6e6;
            align-items: center;
            justify-content: space-between;
            margin-left: 1rem;
            >.title {
                margin: 1rem 0;
            }
            >.iconfont {
                margin-right: 1rem;
                color:#666;
            }
        }
    }
    button {
        width: 6rem;
        outline: none;
        background: #767676;
        border-radius: 4px;
        border: none;
        color: #fff;
        height: 3rem;
        
    }

</style>

