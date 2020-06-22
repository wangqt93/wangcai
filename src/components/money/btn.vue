<template>
    <div class="btn">
        <div class='output'>100</div>
        <div class='buttons clearfix'>
            <button>1</button>
            <button>2</button>
            <button>3</button>
            <button>+</button>
            <button>删除</button>
            <button>4</button>
            <button>5</button>
            <button>6</button>
            <button>-</button>
            <button>清空</button>
            <button>7</button>
            <button>8</button>
            <button>9</button>
            <button>×</button>
            <button class='ok'>OK</button>
            <button>0</button>
            <button>.</button>
            <button>%</button>
            <button>÷</button>
        </div>
    </div>
</template>
<style scoped lang='scss'>
    .btn {
        >.output {
            font-size: 3.6rem;
            font-family: Consolas,monospace;  /*monospace 编程字体，字体等宽*/
            padding: 0.6rem 1.2rem;
            text-align: right;
        }
        .buttons {
            width: 100vw;
            flex-wrap: wrap;
            float: left;
            $bg: #f2f2f2;
            >button {
                width: 20%;
                height: 6rem;
                font-size: 1.8rem;
                line-height: 6rem;
                border: none;
                outline: none;
            }
            >.ok {
                height: 12rem;
                float: right;
            }
            &.clearfix::after {
                display: block;
                content: '';
                clear: both;
            }
            & :nth-child(1){
                background: $bg;
            }
            & :nth-child(2),& :nth-child(6){
                background: darken($bg,4%);
            }
            & :nth-child(3), & :nth-child(7), & :nth-child(11){
                background: darken($bg,8%);
            }
            & :nth-child(4), & :nth-child(8), & :nth-child(12), & :nth-child(16){
                background: darken($bg,12%);
            }
            & :nth-child(5), & :nth-child(9), & :nth-child(13), & :nth-child(17){
                background: darken($bg,16%)
            }
            & :nth-child(10), & :nth-child(14), & :nth-child(18){
                background: darken($bg,20%);
            }
            & :nth-child(19){
                background: darken($bg,22%);
            }
            & :nth-child(15){
                background: darken($bg,28%);
            }
        }

    }
</style>