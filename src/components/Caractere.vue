<template>
    <h1>Caractere !!!!</h1>

    <RouterLink to="/">Accueil</RouterLink> <br>
    <RouterLink to="/Episode">Episode</RouterLink>

    <div v-for="perso in this.personnages">
    <img :src="perso.image">
    <div>
        nom :{{perso.name}}
    </div>
    
    </div>
    
</template>

<style>
</style>


<script>
import axios from "axios";
import { defineComponent} from 'vue';

export default defineComponent({
    data: () => {
        return {
            personnages:[],
            info:[],
            error: "",

        }
    },mounted(){
        axios.get("https://rickandmortyapi.com/api/character")
        .then((data)=>{
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