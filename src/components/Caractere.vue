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
            personnages: [],
            info: [],
            error: "",
            nb_page: 1

        }
    }, mounted() {
        axios.get("https://rickandmortyapi.com/api/character/?page=1")
            .then((data) => {
                this.personnages = data.data.results;
                this.info = data.data.info;
                this.$store.commit('addPersonnages', this.personnages);
                this.$store.commit('addInfoPagePersonnages', this.info);
                console.log(this.$store.getters.getInfoPagePersonnages.next);
            })
            .catch((error) => {
                this.error = error;
            });
    },
    methods:{
        less(){
            axios.get(this.info.prev)
            .then((data)=>{
                this.personnages = data.data.results;
                this.info = data.data.info;
                
                console.log(this.info);
                this.$store.commit('addPersonnages', this.personnages);
                
            })
            .catch((error)=>{
                this.error = error;
            })
        },
        more(){
            axios.get(this.info.next)
            .then((data)=>{
                this.personnages = data.data.results;
                this.info = data.data.info;
                this.$store.commit('addPersonnages', this.personnages);
                
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

    <div class="page">
            <div v-for="perso in this.personnages" class="perso_card" >
                <img :src="perso.image" v-on:click="$router.push({
                    name:'InfoPersonnage',
                    params:{PersonnageId: perso.id}
                })">
                <div>{{ perso.name }}</div>
            </div>
        
    </div>
    <div class="page">
        <button v-on:click="less" v-if="info.prev != null">-</button>
        <button v-on:click="more" v-if="info.next != null">+</button>
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

