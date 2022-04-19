<script>
import { defineComponent } from 'vue';
import Error from './Error.vue';
import axios from "axios";
import Navbar from './Navbar.vue';

export default defineComponent({
    // Ajout des composants utilies à la page
    components: {
        Navbar,
        Error,
    },
    // Les variables utiles à la page
    data: ()=>{
        return{
        monPersonnage: {},
        location: "",
        error: ''
        }
       
    },
    //Appel API avec le param passer en paramètre
    mounted(){
        axios.get('https://rickandmortyapi.com/api/character/'+this.$route.params.PersonnageId)
            .then((data) => {
                // récupération des données du personnages
                this.monPersonnage = data.data;
                // récupération de la localisation
                this.location = data.data.location.name;
                this.$store.commit('addPersonnages', data.data);
            })
            .catch((error) => {
                this.error = error;
            });
    }
})

</script>

<template>
    <Navbar/>
    
    <div v-if="monPersonnage">
    <div>
        <img :src="monPersonnage.image">
        <br>
        Nom : {{monPersonnage.name}} <br>
        Race : {{monPersonnage.species}} <br>
        Statut : {{monPersonnage.status}} <br>
        location : {{location }}
    </div>
        

    </div>
    <!-- Cas d'erreur de l'API -->
    <div v-else>
        <Error />
    </div>
</template>

<style>
</style>