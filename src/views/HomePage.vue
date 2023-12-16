<template>
<Banner/>
<Products/>
<FooterBar/>
</template>

<style scoped>

</style>

<script>
import Banner from '../components/Banner.vue';
import Products from '../components/Products.vue';
import FooterBar from '../components/FooterBar.vue';

export default{
    name: "HomePage",
    components: { Banner, Products,FooterBar }
}
</script>