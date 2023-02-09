import { createRouter, createWebHistory } from "vue-router";
import HomeView from "../views/HomeView.vue";
import AboutView from "../views/AboutView.vue";
import JeweleryView from "../views/JeweleryView.vue";
import ElectronicsView from "../views/ElectronicsView.vue";




const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomeView,
    },
    {
      path: "/about",
      name: "about",
      component: AboutView,
    },
    {
      path: "/electronics",
      name: "electronics",
      component: ElectronicsView,
    },
    {
      path: "/jewelery",
      name: "jewelery",
      component: JeweleryView,
    },
    
  ],
});

export default router;
