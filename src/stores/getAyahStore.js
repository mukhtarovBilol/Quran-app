import apiQuran from "@/api/api";
import { defineStore } from "pinia";

export const useAyahStore = defineStore("ayah", {
  state: () => ({
    ayahs: null,
  }),
  actions: {
    async getAyah(surahAndAyah, editions = "ar.alafasy") {
      try {
        const res = await apiQuran.getAyah(surahAndAyah, editions)
        this.ayahs = res.data
      } catch (error) {
        console.error(error.message);
        window.location = `http://localhost:5173/error`
      }
    }
  }
});
