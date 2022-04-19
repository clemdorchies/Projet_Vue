<script>
// Importation
import Navbar from './Navbar.vue';
import Error from './Error.vue';
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
    // Ajout des composants utiles à la page
    components: {
        Navbar,
        Error,
    },
    // Les variables utiles à la page
    data() {
        return {
            storeEpisode: [],
            infoEpisodePersonnages: [],
            storePersonnages: [],
            error: "",
        }
    },
    mounted() {
        // Information des personnages déjà présent dans le store
        this.storeEpisode = this.$store.getters.getEpisodes[parseInt(this.$route.params.id) - 1]
        console.log(this.storeEpisode);

        // Boucle permettant d'appeler tout les personnages de l'épisode
        for (let i = 0; i < this.storeEpisode.characters.length; i++) {
            // Appel à l'API
            axios.get(this.storeEpisode.characters[i])
                // Cas de succès
                .then((data) => {
                    this.infoEpisodePersonnages.push(data.data);
                })
                // Cas d'erreur
                .catch((error) => {
                    this.error = error;
                });
        }
    }
})
</script>

<template>
    <!-- Affichage de la Navbar -->
    <Navbar />

    <!-- Cas de succès de l'API -->
    <div v-if="error === ''">
        <!-- Affichage des informations de l'épisode -->
        <h1 class="titleEpisode">{{ storeEpisode.episode }} - {{ storeEpisode.name }}</h1>
        <h5 class="dateEpisode">
            <em>{{ storeEpisode.air_date }}</em>
        </h5>

        <!-- Affichage des personnages de l'épisode -->
        <h2>Liste des personnages</h2>
        <div v-for="personnage in infoEpisodePersonnages">
            <div class="cardPersonnage">
                <div class="img">
                    <h4>{{ personnage.name }}</h4>
                    <img style="height: 100%" :src="personnage.image">
                </div>
            </div>
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
    height: 25em;
}

.img {
    margin: 2%;
    padding: 2%;
    border: 2px solid grey;
    border-radius: 5px;
}

.titleEpisode {
    margin: 0px;
}

.dateEpisode {
    margin: 0px;
}
</style>

