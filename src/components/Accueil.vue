<script>
import Navbar from './Navbar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Navbar,
    },
    data: () => {
        return {
            personnages: [],
        }
    },
    mounted() {
        this.personnages = this.$store.getters.getPersonnages;
        console.log(this.personnages);
    }
});
</script>

<template>
    <Navbar />

    <div v-if="personnages.length !== 0">
        <h3>Personnage vue lors de votre visite</h3>
        <div v-for="perso in personnages">
            <img :src="perso.image" v-on:click="$router.push({
                name: 'InfoPersonnage',
                params: { PersonnageId: perso.id }
            })">
            <div>{{ perso.name }}</div>
        </div>
    </div>
    <div v-else>
        <h3>Vous n'avez pas encore vu de personnage lors de votre visite</h3>
    </div>
</template>

<style>
</style>
