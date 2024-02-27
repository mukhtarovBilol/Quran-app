import apiQuran from "@/api/api";
import { defineStore } from "pinia";

export const useSurahsStore = defineStore("surahs", {
  state: () => ({
    surahs: null,
    surah: null,
    totalAyah: null
  }),
  actions: {
    async getSurahs() {
      try {
        const res = await apiQuran.getSurahs()
        this.surahs = res.data
      } catch (error) {
        console.error(error.message);
      }
    },
    async getSurahSingle(id, editions, offset = 0, limit = 20) {
      try {
        const res = await apiQuran.getSurahSingle(id, editions, offset, limit)
        this.surah = res.data
        this.totalAyah = this.surah?.[0].numberOfAyahs
      } catch (error) {
        console.error(error.message);
      }
    }
  },
  persist: true
});
