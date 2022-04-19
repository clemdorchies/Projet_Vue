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
    data: () => {
        return {
            episodes: [],
            error: "",
        }
    },
    mounted() {
        // Appel à l'API
        axios.get("https://rickandmortyapi.com/api/episode")
            // Cas de succès
            .then((data) => {
                this.episodes = data.data.results;
                for (let i = 0; i < this.episodes.length; i++) {
                this.episodes[i].checked = false;
                }
                this.$store.commit('addEpisodes', this.episodes);
            })
            // Cas d'erreur
            .catch((error) => {
                this.error = error;
            });
    }
})
</script>

<template>
    <Navbar />

    <!-- Cas de succès de l'API -->
    <div v-if="error === ''">
        <!-- Affichage des épisodes -->
        <div v-for="episode in this.episodes">
            <div style="float: left; width: 25%;">
                <div class="cardEpisode">
                    <h1 class="titleEpisode">{{ episode.episode }}</h1>
                    <h5 class="dateEpisode">
                        <em>{{ episode.air_date }}</em>
                    </h5>
                    <h2 class="nameEpisode">
                        {{ episode.name }}
                    </h2>
                    <!-- Direction une autre page pour plus d'informations -->
                    <!-- On passe en paramètre l'id de l'épisode -->
                    <RouterLink :to="{ name: 'InfoEpisode', params: { id: episode.id } }" tag="button"
                        class="buttonMoreInfoEpisode">Plus d'infos</RouterLink>
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
.cardEpisode {
    margin: 2%;
    padding: 2%;
    height: 15em;
    border: 2px solid grey;
    border-radius: 5px;
}

.titleEpisode {
    margin: 0px;
}

.dateEpisode {
    margin: 0px;
}

.nameEpisode {
    height: 3em;
}

.buttonMoreInfoEpisode {
    background-color: grey;
    border-radius: 5px;
    border: 0px;
    margin-right: 10px;
    padding: 5% 4% 5% 4%;
    padding-right: 3%;
    padding-left: 3%;
    text-decoration: none;
    color: white;
}

.buttonMoreInfoEpisode:hover {
    background-color: rgb(82, 82, 82);
}
</style>
