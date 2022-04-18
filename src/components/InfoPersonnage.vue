<script>
import { defineComponent } from 'vue';
import axios from "axios";
import Navbar from './Navbar.vue';

export default defineComponent({
    components: {
        Navbar,
    },
    data: ()=>{
        return{
        monPersonnage: {},
        error: ""
        }
       
    },
    mounted(){
        axios.get('https://rickandmortyapi.com/api/character/'+this.$route.params.PersonnageId)
            .then((data) => {
                this.monPersonnage = data.data;
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
        <img :src="monPersonnage.image">
        {{monPersonnage.name}}
        {{monPersonnage.species}}
        {{monPersonnage.status}}

    </div>
    <h3 v-else>{{error}}</h3>
</template>

<style>
</style>