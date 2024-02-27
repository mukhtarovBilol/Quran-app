import axiosClient from "./axiosClient";

const apiQuran = {
  getAyah(surahAndAyah, editions) {
    const url = `ayah/${surahAndAyah}/editions/${editions}`;
    return axiosClient.get(url);
  },
  getTranslation() {
    const url = `edition/type/translation`;
    return axiosClient.get(url);
  },
  getSurahs() {
    const url = `surah`;
    return axiosClient.get(url);
  },
  getSurahSingle(id, editions, offset, limit) {
    const url = `surah/${id}/editions/${editions}?offset=${offset}&limit=${limit}`
    return axiosClient.get(url)
  },
  getJuz(id) {
    const url = `juz/${id}/ar.alafasy`
    return axiosClient.get(url)
  },
  getSajdas() {
    const url = `sajda/ar.alafasy`
    return axiosClient.get(url)
  },
  getSearch(keyword) {
    const url = `search/${keyword}/all/en`;
    return axiosClient.get(url);
  }
};

export default apiQuran;
