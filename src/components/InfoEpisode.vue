<script>
import Navbar from './Navbar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Navbar,
    },
    data () {
        return {
            test: "",
        }
    },
    mounted () {
        console.log(this.$store.getters.getEpisodes);
    }
})
</script>

<template>
    <Navbar />
    test !!!
</template>

<style>
</style>

