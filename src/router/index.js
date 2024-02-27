import { createRouter, createWebHistory } from "vue-router";
import HomePage from "@/pages/HomePage.vue";
import { useSurahsStore } from "@/stores/getSurahs";

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: "/",
      name: "home",
      component: HomePage,
    },
    {
      path: "/ayahs/:id",
      name: "ayahs",
      component: () => import("@/pages/AyahsPage.vue"),
    },
    {
      path: "/surahs",
      name: "Surahs",
      component: () => import("@/pages/SurahsPage.vue"),
    },
    {
      path: "/surahs/:id",
      name: "Surah",
      component: () => import("@/pages/SurahPage.vue"),
      beforeEnter: (to, from) => {
        const surahsStore = useSurahsStore()
        const exists = surahsStore.surahs?.find(surah => surah.number == to.params.id)
        if (!exists) {
          return {
            name: "notFound",
            params: { pathMatch: to.path.split("/").slice(1) },
            query: to.query,
            hash: to.hash
          }
        }
      }
    },
    {
      path: "/juzs",
      name: "Juzs",
      component: () => import("@/pages/JuzsPage.vue"),
    },
    {
      path: "/juzs/:id",
      name: "Juz",
      component: () => import("@/pages/JuzPage.vue"),
      beforeEnter: (to, from) => {
        const exists = to.params.id >=1 && to.params.id <= 30
        if (!exists) {
          return {
            name: "notFound",
            params: { pathMatch: to.path.split("/").slice(1) },
            query: to.query,
            hash: to.hash
          }
        }
      }
    },
    {
      path: "/sajdas",
      name: "Sajdas",
      component: () => import("@/pages/SajdasPage.vue")
    },
    {
      path: "/search",
      name: "Search",
      component: () => import("@/pages/SearchPage.vue")
    },
    {
      path: "/:pathMatch(.*)*",
      name: "notFound",
      component: () => import("@/pages/NotFoundPage.vue"),
    },
  ],
});

export default router;