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
        monPersonnage: {}
        }
       
    },
    mounted(){
        axios.get('https://rickandmortyapi.com/api/character/'+this.$route.params.PersonnageId)
            .then((data) => {
                this.monPersonnage = data.data;
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
    
    <div >
        <img :src="monPersonnage.image">
        {{monPersonnage.name}}
        {{monPersonnage.species}}
        {{monPersonnage.status}}

    </div>
</template>

<style>
</style>