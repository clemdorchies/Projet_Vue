<script>
import { defineComponent } from 'vue';
import Error from './Error.vue';
import axios from "axios";
import Navbar from './Navbar.vue';

export default defineComponent({
    components: {
        Navbar,
        Error,
    },
    data: ()=>{
        return{
        monPersonnage: {},
        location: "",
        error: ''
        }
       
    },
    mounted(){
        axios.get('https://rickandmortyapi.com/api/character/'+this.$route.params.PersonnageId)
            .then((data) => {
                this.monPersonnage = data.data;
                this.location = data.data.location.name;
                this.$store.commit('addPersonnages', data.data);
                
                console.log(this.monPersonnage);
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