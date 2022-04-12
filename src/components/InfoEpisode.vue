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
        console.log(this.$route.params.id);
    }
})
</script>

<template>
    <Navbar />
    test !!!
</template>

<style>
</style>

