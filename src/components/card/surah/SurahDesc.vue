<script setup>
const porps = defineProps({
  ayahList: {
    type: Array,
    required: true,
  },
  edition: Object,
  numberSurah: Number,
})

const isPlay = ref(true);
</script>

<template>
  <div class="surah-desc" v-for="item in ayahList" :key="item.text">
    <div class="surah-desc__top" :title="edition?.englishName || item.edition.englishName">
      <h3 class="surah-desc__surah-name" v-if="item.surah">
        <RouterLink :to="'/ayahs/' + item.number" class="surah-desc__surah-link">
          {{ item.surah?.englishName }}
          <span>({{ item.surah?.englishNameTranslation }})</span>
          <span class="text-arabic">({{ item.surah?.name }})</span>
        </RouterLink>
      </h3>
      <span class="surah-desc__number">{{ numberSurah || item.surah?.number }}:{{ item.number }}</span>
      <span class="surah-desc__info" v-if="item.sajda">{{ item.sajda?.recommended ? "Recommended" : "Obligatory" }}</span>
      <button class="surah-desc__play" v-show="isPlay && item.audio" @click="isPlay = false">
        <el-icon :size="24" color="#fff"><VideoPlay /></el-icon>
      </button>
      <audio :src="item.audio" v-if="!isPlay" controls class="surah-desc__audio"></audio>
      <strong v-else class="surah-desc__name">{{ edition?.englishName || item.edition.englishName }}</strong>
    </div>
    <p class="surah-desc__text" :class="{'text-arabic' : edition?.language || item.edition.englishName == 'ar'}">{{ item.text }}</p>
  </div>
</template>
