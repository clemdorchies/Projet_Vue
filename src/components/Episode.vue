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
            episodes: [],
            info: [],
            error: "",

        }
    }, mounted() {
        axios.get("https://rickandmortyapi.com/api/episode")
            .then((data) => {
                this.episodes = data.data.results;
                this.info = data.data.info;
                console.log(this.episodes);
            })
            .catch((error) => {
                this.error = error;
            });
    }
})
</script>

<template>
    <Navbar />
    <h1>Episode !!!!</h1>

    <div v-for="episode in this.episodes">
        <div style="float: left; width: 25%;">
            <div class="cardEpisode">
                <h1 class="titleEpisode">{{ episode.episode }}</h1>
                <h5 class="dateEpisode">
                    <em>{{ episode.created }}</em>
                </h5>
                <h2>Nom : {{ episode.name }}</h2>

                <RouterLink to="/InfoEpisode" tag="button" class="buttonLinkEpisode">Lien vers l'épisode</RouterLink>
            </div>
        </div>
    </div>
</template>

<style>
.cardEpisode {
    margin: 2%;
    padding: 2%;
    height: 20em;
    border: 2px solid grey;
    border-radius: 5px;
}
.titleEpisode {
    margin: 0px;
}
.dateEpisode {
    margin: 0px;
}
.buttonLinkEpisode {
    background-color: grey;
    border-radius: 5px;
    border: 0px;
    margin-right: 10px;
    /* padding: 10%, 3%, 10%, 3%; */
    padding-right: 3%;
    padding-left: 3%;
    text-decoration: none;
    color: white;
}
</style>
