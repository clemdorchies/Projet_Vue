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
    methods: {
        //fonction pour appel des pages d'avant
        less() {
            //appel API avec info.prev => URL de l'api
            axios.get(this.info.prev)
                .then((data) => {
                    //mise à jour des personnages
                    this.personnages = data.data.results;
                    //mise à jour des infos
                    this.info = data.data.info;

                })
                .catch((error) => {
                    this.error = error;
                })
        },
        //fonction pour appel des pages d'après
        more() {
            //appel API avec info.prev => URL de l'api
            axios.get(this.info.next)
                .then((data) => {
                    //mise à jour des personnages
                    this.personnages = data.data.results;
                    //mise à jour des infos
                    this.info = data.data.info;

                })
                .catch((error) => {
                    this.error = error;
                })
        }
    }

});
</script>

<template>
    <Navbar />
    <div v-if="error === ''">
        <div class="col1">
            <div v-for="perso in personnages">
                <div class="cardPersonnage">
                    <div class="img">
                        <!-- Image qui renvoie vers la page personnalisé du personnage -->
                        <img style="width: 100%;" :src="perso.image" v-on:click="$router.push({
                            name: 'InfoPersonnage',
                            params: { PersonnageId: perso.id }
                        })">
                        <div>{{ perso.name }}</div>
                    </div>
                </div>
            </div>
        </div>
        <div class="col2">
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
.cardPersonnage {
    float: left;
    width: 25%;
    height: 20em;
}

.img {
    margin: 2%;
    padding: 2%;
    border: 2px solid grey;
    border-radius: 5px;
}

.col1 {
    width: 80%;
    float: left;
}

.col2 {
    width: 20%;
    float: left;
    padding-top: 2em;
}

.page {
    vertical-align: auto;
    margin-left: 5%;
}
</style>

