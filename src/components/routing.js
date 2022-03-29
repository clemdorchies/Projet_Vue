import { createRouter, createWebHistory } from "vue-router";

import Accueil from "./Accueil.vue";
import Caractere from "./Caractere.vue";
import Episode from "./Episode.vue";
import InfoEpisode from "./InfoEpisode.vue";

// Nous créons d'abord nos Routes
const routes = [
  // Affichera le composant "Accueil.vue"
  {
    path: "/",
    component: Accueil,
  },
  // Ici, nous disons que pour la route "/Caractere"
  // Nous afficherons le composant "Caractere.vue"
  {
    path: "/Caractere",
    component: Caractere,
  },
  // Ici, nous disons que pour la route "/Episode"
  // Nous afficherons le composant "Episode.vue"
  {
    path: "/Episode",
    component: Episode,
  },
  // Ici, nous disons que pour la route "/InfoEpisode"
  // Nous afficherons le composant "InfoEpisode.vue"
  {
    path: "/InfoEpisode",
    component: InfoEpisode,
  },
];

export default createRouter({
  history: createWebHistory(),
  routes,
});