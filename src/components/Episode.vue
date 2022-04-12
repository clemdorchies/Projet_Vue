<script>
import Navbar from './Navbar.vue';
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Navbar,
    },
    data: () => {
        return {
            episodes: [],
            error: "",
        }
    },
    mounted() {
        axios.get("https://rickandmortyapi.com/api/episode")
            .then((data) => {
                this.episodes = data.data.results;
                console.log(this.episodes);
                this.$store.commit('addEpisodes', this.episodes);
            })
            .catch((error) => {
                this.error = error;
            });
    }
})
</script>

<template>
    <Navbar />

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
                <RouterLink :to="{ name: 'InfoEpisode', params: { id: episode.id } }" tag="button"
                    class="buttonMoreInfoEpisode">Plus d'infos</RouterLink>
            </div>
        </div>
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
</style>
