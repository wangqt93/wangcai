<template>
    <div class="layout">
        <div class="container">
            <slot></slot>
        </div>
        <Nav></Nav>
    </div>
</template>
<style scoped>
    .layout {
        display: flex;
        flex-direction:column;
        height: 100vh;
    }
    .container {
        flex-grow: 1;
        display: flex;
        flex-direction: column-reverse;
    }
</style>