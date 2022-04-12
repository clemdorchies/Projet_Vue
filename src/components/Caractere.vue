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
});


</script>

<template>
    <Navbar />

    <div class="page">
        <div v-for="perso in this.personnages" class="perso_card" >
            <img :src="perso.image" v-on:click="$router.push('/InfoPersonnage')">
            <div>{{ perso.name }}</div>
        </div>
        <table >
        </table>
        
    </div>
    <div class="page">
        <button>a droite</button>
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

