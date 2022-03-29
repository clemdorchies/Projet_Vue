<script>
import Navbar from './Navbar.vue';
import axios from "axios";
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Navbar,
    },
    data: () => {
        return {
            personnages: [],
            info: [],
            error: "",

        }
    }, mounted() {
        axios.get("https://rickandmortyapi.com/api/character")
            .then((data) => {
                this.personnages = data.data.results;
                this.info = data.data.info;
                console.log(this.personnages);
            })
            .catch((error) => {
                this.error = error;
            });
    }
})
</script>

<template>
    <Navbar />

    <div v-for="perso in this.personnages">
        <img :src="perso.image" />
        <div>nom :{{ perso.name }}</div>
    </div>
</template>

<style>
</style>

