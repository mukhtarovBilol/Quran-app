<script setup>
import Bismillah from "@/components/Bismillah/Bismillah.vue";
import Select from "@/components/UI/select/Select.vue";
import Ayah from "@/components/card/ayah/Ayah.vue";
import { useAyahStore } from "@/stores/getAyahStore";
import { useRoute, useRouter } from "vue-router";

const ayahStore = useAyahStore();

const route = useRoute();
const router = useRouter();

const firstDataAyah = computed(() => ayahStore.ayahs?.[0].surah);

const dataAyahValue = ref("")

const queryAyah = (surahAndAyah) => {
  router.push("/ayahs/" + surahAndAyah)
  ayahStore.getAyah(surahAndAyah, "ar.alafasy, en.transliteration")
  dataAyahValue.value = ""
}

</script>

<template>
  <section class="ayah">
    <div class="container">
      <Bismillah />
      <div class="ayah__content">
        <div class="ayah__content-top">
          <h2 class="ayah__content-title">
            Surah {{ firstDataAyah?.englishName }} Ayah
            {{ firstDataAyah?.numberOfAyahs }} ({{ route.params.id }})
          </h2>
          <p class="ayah__content-name">
            <span>{{ firstDataAyah?.englishNameTranslation }}</span> |
            {{ firstDataAyah?.name }}
          </p>
        </div>
        <div class="ayah__content-cards">
          <Ayah
            class="ayah__content-card"
            v-for="item in ayahStore.ayahs"
            :key="item.edition.identifier"
            :info="item"
          />
        </div>
        <form action="" class="ayah__form" @submit.prevent="queryAyah(dataAyahValue)">
          <Suspense>
            <Select :surahAndAyah="route.params.id" :transliteration="true" />
            <template #fallback>
              <h1>Loading...</h1>
            </template>
          </Suspense>
          <el-input
            class="ayah__form-input"
            placeholder="Ayah search (1:1)"
            clearable
            required
            v-model="dataAyahValue"
          />
          <button class="ayah__form-btn">Find</button>
          <audio :src="ayahStore.ayahs?.[0].audio" controls></audio>
        </form>
      </div>
    </div>
  </section>
</template>
