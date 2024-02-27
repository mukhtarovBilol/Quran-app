import apiQuran from "@/api/api";
import { defineStore } from "pinia";

export const useUstazyStore = defineStore("ustazy", {
  state: () => ({
    ustazy: null,
  }),
  actions: {
    async getTranslation() {
      try {
        const res = await apiQuran.getTranslation();
        this.ustazy = res.data;
      } catch (error) {
        console.error(error.message);
      }
    },
  },
});
