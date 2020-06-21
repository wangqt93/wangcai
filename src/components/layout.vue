<template>
    <div class="layout">
        <div class="container"></div>
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
        border: 1px solid green;
    }
</style>