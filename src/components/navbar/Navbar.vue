<script setup>
import { RouterLink, useRouter } from "vue-router";
import { Search } from "@element-plus/icons-vue";
import { useSearchStore } from "@/stores/getSearchStore";
const searchStore = useSearchStore()

const pages = [
  {
    path: "/",
    name: "Home",
  },
  {
    path: "/surahs",
    name: "Surahs",
  },
  {
    path: "/juzs",
    name: "Juzs",
  },
  {
    path: "/sajdas",
    name: "Sajdas",
  },
];
const router = useRouter()
const search = ref("");
const menu = ref(false)

const getResultsSearch = (keyword) => {
  if (keyword) {
    searchStore.getSearch(keyword)
    router.push("/search")
  }
}
</script>

<template>
  <nav class="nav">
    <div class="nav__container">
      <div class="nav__menu" :class="{'active': menu}">
        <ul class="nav__menu-list">
          <li class="nav__menu-item" v-for="item in pages" :key="item.name" @click="menu = !menu">
            <RouterLink class="nav__menu-link" :to="item.path">{{
              item.name
            }}</RouterLink>
          </li>
        </ul>
      </div>
      <form action="" class="nav__menu-form" @submit.prevent="getResultsSearch(search)">
        <el-input
          v-model="search"
          placeholder="Please input"
          clearable
          :prefix-icon="Search"
        />
      </form>
      <RouterLink to="/" class="nav__logo text-arabic"
        >الْقُرْآن الْكَرِيْم</RouterLink
      >
      <div class="nav__burger" @click="menu = !menu">
        <div class="nav__burger-line"></div>
      </div>
    </div>
  </nav>
</template>
