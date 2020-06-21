<template>
    <div class='nav'>
        <nav ref="active">
            <router-link to='/labels' class='icons' active-class='selected'> 
                <div class="iconfont icon-label"></div>
                标签
            </router-link>

            <router-link to='/money' class='icons' active-class='selected'>
                <div class="iconfont icon-money"></div>
                记账
            </router-link>
            
            <router-link to='/statistics' class='icons' active-class='selected'>
                <div class="iconfont icon-statistics"></div>
                统计
            </router-link>
        </nav>
    </div>
</template>
<script>
    export default {
        methods:{
            show(){
               console.log(1) 
            }
        },
    }
</script>
<style type="text/css" scoped>
    nav {
        display: flex;
        justify-content: space-evenly;
        align-items: center;
        background: rgb(91,93,105);
    }
    .icons {
        width: 33.3333%;
        text-align: center;
        color: rgb(153,153,153);
        font-size: 1.6rem;
    }
    .icons>.iconfont {
        font-size: 2.2rem;
    }
    .icons.selected {
        background: #fff;
    }
</style>