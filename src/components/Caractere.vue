<script>
import Navbar from './Navbar.vue';
import Error from './Error.vue';
import axios from "axios";
import { defineComponent } from 'vue';

export default defineComponent({
    // Ajout des composants utiles à la page
    components: {
        Navbar,
        Error
    },
    // Les variables utiles à la page
    data: () => {
        return {
            personnages: [],
            info: [],
            error: '',

        }
    }, mounted() {
        //appel API pour avoir la liste des personnages de la première page
        axios.get("https://rickandmortyapi.com/api/character/?page=1")
            .then((data) => {
                this.personnages = data.data.results;
                this.info = data.data.info;
            })
            .catch((error) => {
                this.error = error;
            });
    },
    methods:{
        //fonction pour appel des pages d'avant
        less(){
            //appel API avec info.prev => URL de l'api
            axios.get(this.info.prev)
            .then((data)=>{
                //mise à jour des personnages
                this.personnages = data.data.results;
                //mise à jour des infos
                this.info = data.data.info;
                
            })
            .catch((error)=>{
                this.error = error;
            })
        },
        //fonction pour appel des pages d'après
        more(){
            //appel API avec info.prev => URL de l'api
            axios.get(this.info.next)
            .then((data)=>{
                //mise à jour des personnages
                this.personnages = data.data.results;
                //mise à jour des infos
                this.info = data.data.info;
                
            })
            .catch((error)=>{
                this.error = error;
            })
        }
    }
    
});
</script>

<template>
    <Navbar />
    <div v-if="error === ''">
        <div class="page">
            <div v-for="perso in personnages" class="perso_card" >
                <img :src="perso.image" v-on:click="$router.push({
                    name:'InfoPersonnage',
                    params:{PersonnageId: perso.id}
                })">
                <div>{{ perso.name }}</div>
            </div>
        </div>
        <div class="page">
            <!-- bouton pour appeler la fonction less avec verification de l'existance de info.prev -->
            <button v-on:click="less" v-if="info.prev != null">-</button>
            <!-- bouton pour appeler la fonction more avec verification de l'existance de info.next -->
            <button v-on:click="more" v-if="info.next != null">+</button>
        </div>
    </div>
    

    <!-- Cas d'erreur de l'API -->
    <div v-else>
        <Error />
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

