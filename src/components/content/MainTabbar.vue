<template>
    <tabbar><template><tabbar-item path="/home" activeColor="blue">
        <template v-slot:item-icon> <img  src="~@/assets/img/tabbar/home.svg"></template><template v-slot:item-icon-active> <img  src="~@/assets/img/tabbar/home.active.svg"></template><template v-slot:item-font><div >首页</div></template>
    </tabbar-item><tabbar-item path="/category">
        <template v-slot:item-icon> <img  src="~@/assets/img/tabbar/category.svg"></template><template v-slot:item-icon-active> <img  src="~@/assets/img/tabbar/category.active.svg"></template><template v-slot:item-font><div >分类</div></template>
    </tabbar-item><tabbar-item path="/shopcart">
        <template v-slot:item-icon> <img  src="~@/assets/img/tabbar/shopcart.svg"></template><template v-slot:item-icon-active> <img  src="~@/assets/img/tabbar/shopcart.active.svg"></template><template v-slot:item-font><div >购物车</div></template>
    </tabbar-item><tabbar-item path="/profile">
        <template v-slot:item-icon> <img  src="~@/assets/img/tabbar/profile.svg"></template><template v-slot:item-icon-active> <img  src="~@/assets/img/tabbar/profile.active.svg"></template><template v-slot:item-font><div >我的</div></template>
    </tabbar-item></template></tabbar>
</template>

<script>
    import tabbar from "@/components/common/tabbar/tabbar";
    import tabbarItem from "@/components/common/tabbar/tabbarItem";
    export default {
        name: "MainTabbar",
        components:{
            tabbarItem,
            tabbar
        }
    }
</script>

<style scoped>

</style>