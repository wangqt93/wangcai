<template>
    <div class="edit">
        <Layout>
            <div class="contai">
                <div class="nav">
                    <div class="iconfont icon-left" @click='toLabel' ></div>
                    <span>编辑标签</span>
                </div>
                <ul @click='rename'>
                    <li>
                        <p>标签名</p>
                        <div v-if='title'>{{title}}</div>
                        <input type="text" autofocus="autofocus" value=''  v-if="title === ''" ref='show'>
                    </li>
                </ul>
                <button class='remove' @click='remove'>删除标签</button>
                <button class='save' @click='saveTitle'>保存</button>
            </div>
        </Layout>
    </div>
</template>
<script>
    export default{
        data(){
            return {
                title : this.$store.state.setitem,   
            }
        },
        methods: {
            toLabel(){                            //返回上一页
                this.$router.push('/labels')
            },
            rename(){
                this.title = ''
            },
            saveTitle(){
                this.$store.commit('changeTitle',this.$refs.show.value)
                this.title = this.$store.state.setitem
            },
            remove(){
                this.$store.commit('removeitem')
                this.$router.push('/labels')
            }

        }
    }

</script>
<style scoped lang='scss'>
    .edit {
        background: whitesmoke;
        .contai {
        position: relative;
        }
    }
    .nav {
        position: relative;
        height: 5rem;
        background: #fff;
        margin-bottom: 1rem;
        .iconfont {
            font-weight: 600;
            position: absolute;
            top: 50%;
            left: 1rem;
            transform: translateY(-50%);
        }
        >span {
            margin: 0 auto;
            position: absolute;
            left: 50%;
            top: 50%;
            transform:translate(-50%,-50%);
        }
    }
    li {
        background: #fff;
        height: 3.8rem;
        display: flex;
        align-items: center;
        border-bottom: #eee;
        >div {
            margin: 0 2rem;
            border-bottom: 1px solid #ddd;
            width: 8rem;
        }
        >input {
            width: 8rem;
            margin: 0 2rem;
            border: none;
            border-bottom: 1px solid #ddd;
            outline: none;
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
        margin-top: 10rem;
        margin-left: 1rem;
        position: absolute;
        transform: translateX(-50%);
        &.remove{
            left: 60%;
        }
        &.save{
            left: 30%;
        }
    }
</style>