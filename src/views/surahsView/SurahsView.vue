<script setup>
import Bismillah from "@/components/Bismillah/Bismillah.vue";
import Surah from "@/components/card/surah/Surah.vue";
import { useSurahsStore } from "@/stores/getSurahs";

const surahsStore = useSurahsStore()
surahsStore.getSurahs()

</script>

<template>
  <section class="surahs" id="surahs">
    <div class="container">
      <Bismillah />
      <div class="surahs__content">
        <div class="surahs__content-cards">
          <Surah v-for="item in surahsStore.surahs" :key="item.number" :surah="item" />
        </div>
      </div>
    </div>
    <a href="#surahs" class="surahs__up">
      <el-icon class="surahs__up-icon" color="#fff" :size="24"><Top /></el-icon>
    </a>
  </section>
</template>
