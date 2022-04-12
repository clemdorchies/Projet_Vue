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
                this.$store.commit('addPersonnages', this.personnages);
                console.log(this.$store.getters.getPersonnages);
                
            })
            .catch((error) => {
                this.error = error;
            });
    }
});


</script>

<template>
    <Navbar />

    <div class="page">
        <div v-for="perso in this.personnages" class="perso_card" >
            <img :src="perso.image" v-on:click="$router.push({
                name:'InfoPersonnage',
                params:{PersonnageId: perso.id}
            })">
            <div>{{ perso.name }}</div>
        </div>
        <table >
        </table>
        
    </div>
    <div class="page">
        <button v-on:click="">a droite</button>
        <button>a gauche</button>
    </div>
</template>

<style>
.page{
    vertical-align: auto;
    margin-left: 5%;
}
.perso_card{
    border: 1px solid grey;
    margin: 5px;
    float:left;
}
.perso_card img{
    width: 95%;
}
</style>

