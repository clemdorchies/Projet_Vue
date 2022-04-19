<script>
import Navbar from './Navbar.vue';
import { defineComponent } from 'vue';

export default defineComponent({
    components: {
        Navbar,
    },
    data: () => {
        return {
            personnages: [],
            episodes: [],
            listEpisodes: [],
        }
    },
    mounted() {
        this.personnages = this.$store.getters.getPersonnages;
        this.episodes = this.$store.getters.getEpisodes;
        for (let i = 0; i < this.episodes.length; i++) {
            if (this.episodes[i].checked == true) {
                this.listEpisodes.push(this.episodes[i])
            }
        }
    }
});
</script>

<template>
    <Navbar />

    <div class="a_col1">
        <div v-if="personnages.length !== 0">
            <h3>Personnages visités lors de votre visite</h3>
            <div v-for="perso in personnages">
                <img :src="perso.image" v-on:click="$router.push({
                    name: 'InfoPersonnage',
                    params: { PersonnageId: perso.id }
                })">
                <div>{{ perso.name }}</div>
            </div>
        </div>
        <div v-else>
            <h3>Vous n'avez pas encore visité de personnage lors de votre visite</h3>
        </div>
    </div>

    <div class="a_col2">
        <div v-if="listEpisodes.length !== 0">
            <h3>Episodes visités lors de votre visite</h3>
            <div v-for="episode in listEpisodes">
                <h1 v-if="episode.checked == true" class="titleEpisode">{{ episode.episode }}</h1>
            </div>
        </div>
        <div v-else>
            <h3>Vous n'avez pas encore visité d'épisode lors de votre visite</h3>
        </div>
    </div>
</template>

<style>
.a_col1 {
    width: 50%;
    float: left;
}

.a_col2 {
    width: 50%;
    float: left;
}
</style>
