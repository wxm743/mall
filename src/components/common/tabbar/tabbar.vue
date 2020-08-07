<template>
    <div id="tab_bar">
     <slot></slot>
    </div>
</template>

<script>
    export default {
        name: "tabbar"
    }
</script>

<style scoped>
    #tab_bar{
        display: flex;
        background-color: #f6f6f6;
        position: fixed;
        bottom: 0;
        left: 0;
        right: 0;
        box-shadow: 0px -2px 10px rgba(100,100,100,0.3);
    }

</style>