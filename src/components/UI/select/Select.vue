<script async setup>
import { useAyahStore } from "@/stores/getAyahStore";
import { useSurahsStore } from "@/stores/getSurahs";
import { useUstazyStore } from "@/stores/getTranslationStore.js";
import { useRoute } from "vue-router";
const props = defineProps({
  surahAndAyah: String | Number,
  transliteration: Boolean,
  surah: {
    type: Boolean,
    default: false,
  }
})

const route = useRoute()
const ayahStore = useAyahStore()
const ustazyStore = useUstazyStore();
await ustazyStore.getTranslation();
const surahStore = useSurahsStore()

const query = ref("");
const options = ref([]);

onMounted(() => {
    for (let i = 0; i < ustazyStore.ustazy.length; i++) {
        options.value.push({
            value: ustazyStore.ustazy[i].identifier,
            label: `${ustazyStore.ustazy[i].language} ${ustazyStore.ustazy[i].name} (${ustazyStore.ustazy[i].englishName})`
        })
    }
})

watch(query, () => {
  // console.log(query.value);
  if(props.surah) {
    if (props.transliteration) {
      surahStore.getSurahSingle(route.params.id, `ar.alafasy, en.transliteration, ${query.value.join()}`, +route.query.page * 20 - 20)
    } else {
      surahStore.getSurahSingle(route.params.id, `ar.alafasy, ${query.value.join()}`)
    }
  }else {
    if (props.transliteration) {
      ayahStore.getAyah(props.surahAndAyah, `ar.alafasy, en.transliteration, ${query.value.join()}`, +route.query.page * 20 - 20)
    } else {
      ayahStore.getAyah(props.surahAndAyah, `ar.alafasy, ${query.value.join()}`)
    }
  }
})

</script>

<template>
  <el-select
    v-model="query"
    filterable
    multiple
    placeholder="Select translation"
    class="select-translation"
  >
    <el-option
      v-for="item in options"
      :key="item.value"
      :label="item.label"
      :value="item.value"
    />
  </el-select>
</template>
