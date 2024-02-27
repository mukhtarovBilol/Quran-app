<script setup>
import Bismillah from "@/components/Bismillah/Bismillah.vue";
import Select from "@/components/UI/select/Select.vue";
import SurahDesc from "@/components/card/surah/SurahDesc.vue";
import { useSurahsStore } from "@/stores/getSurahs";
import { useRoute, useRouter } from "vue-router";

const route = useRoute()
const router = useRouter()
const surahsStore = useSurahsStore()

const firstDataSurah = computed(() => surahsStore.surah?.[0])
const fullSurahAudio = ref(`https://cdn.islamic.network/quran/audio-surah/128/ar.alafasy/${route.params.id}.mp3`)
const currentPage = ref(+route.query.page || 1)

const handleCurrentChange = (page) => {
  if (page === 1) router.push(route.path) 
  else {
    router.push(`${route.path}?page=${page}`)
  }
  surahsStore.getSurahSingle(route.params.id, "ar.alafasy, en.transliteration", page * 20 - 20)
}

</script>

<template>
  <section class="surah">
    <div class="container">
      <Bismillah />
      <div class="surah__content">
        <h2 class="surah__content-title">{{ firstDataSurah?.englishName }}</h2>
        <p class="surah__content-subtitle">{{ firstDataSurah?.englishNameTranslation }}</p>
        <audio :src="fullSurahAudio" class="surah__content-audio-full" controls></audio>
        <el-pagination layout="prev, pager, next, total" 
        :pager-count="5"
        :page-size="20"
        :total="surahsStore.totalAyah" 
        background
        v-model:current-page="currentPage"
        @current-change="handleCurrentChange"
        class="surah__content-pagination"
        />
        <div class="surah__content-cards">
          <SurahDesc v-for="item in surahsStore.surah" :key="item.edition.identifier" :ayahList="item.ayahs" :edition="item.edition" :numberSurah="firstDataSurah?.number"/>
        </div>
        <Suspense>
          <Select 
          :surahAndAyah="firstDataSurah?.number" 
          :transliteration="true"
          :surah="true"
          class="surah__select"
          />
          <template #fallback>
            <h1>Loading...</h1>
          </template>
        </Suspense>
      </div>
    </div>
  </section>
</template>
