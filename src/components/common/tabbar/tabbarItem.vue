<template>
    <div class="tab-bar-item" @click="isClick">
        <div v-if="!isActive">
            <slot name="item-icon"></slot>
        </div>
        <div v-else>
            <slot name="item-icon-active"></slot>
        </div>
        <div :class="mycolor">
            <slot name="item-font"></slot>
        </div>


    </div>
</template>

<script>
    export default {
        name: "tabbar-item",
        data() {
            return {}
        },
        props: {
            path: String, activeColor: String

        },
        computed: {
            isActive() {
                return this.$route.path.indexOf(this.path) != -1
            },
            mycolor(){
                return this.isActive ? {color:this.activeColor} : {}
            }

        },
        methods: {
            isClick() {
                this.$router.replace(this.path)
            }
        }
    }
</script>

<style scoped>
    .tab-bar-item {
        flex: 1;
        text-align: center;
        height: 49px;
        font-size: 14px;
    }

    .tab-bar-item img {
        height: 24px;
        width: 24px;
        margin-top: 3px;
        /*vertical-align: middle;*/

    }

    .active {
        color: red
    }
</style>