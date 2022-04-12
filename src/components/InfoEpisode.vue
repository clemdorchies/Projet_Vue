<script>
import Navbar from './Navbar.vue';
import axios from 'axios';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Navbar,
    },
    data() {
        return {
            storeEpisode: [],
            infoEpisodePersonnages: [],
            storePersonnages: [],
            error: "",
        }
    },
    mounted() {
        this.storeEpisode = this.$store.getters.getEpisodes[parseInt(this.$route.params.id) - 1]
        console.log(this.storeEpisode);

        for (let i = 0; i < this.storeEpisode.characters.length; i++) {
            axios.get(this.storeEpisode.characters[i])
                .then((data) => {
                    this.infoEpisodePersonnages.push(data.data);
                })
                .catch((error) => {
                    this.error = error;
                });
        }
    }
})
</script>

<template>
    <Navbar />
    <h1 class="titleEpisode">{{ storeEpisode.episode }} - {{ storeEpisode.name }}</h1>
    <h5 class="dateEpisode">
        <em>{{ storeEpisode.air_date }}</em>
    </h5>

    <h2>Liste des personnages</h2>
    <div v-for="personnage in infoEpisodePersonnages">
        <div class="cardPersonnage">
            <div class="img">
                <h4>{{ personnage.name }}</h4>
                <img style="height: 100%" :src="personnage.image">
            </div>
        </div>
    </div>
</template>

<style>
.cardPersonnage {
    float: left;
    width: 25%;
    background-color: rgb(191, 191, 191);
    height: 18em;
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

