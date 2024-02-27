<script setup>
import Bismmilah from '@/components/Bismillah/Bismillah.vue';
import { useSearchStore } from '@/stores/getSearchStore'
import SurahDesc from "@/components/card/surah/SurahDesc.vue";

const searchStore = useSearchStore()
</script>

<template>
    <section class="search">
        <div class="search__container">
            <Bismmilah/>  
            <div class="search__content">
                <h3 class="search__content-info">On request: <i>"{{ searchStore.keyword }}"</i>, {{ searchStore.count ? `total results: ${searchStore.count}` : 'Nothing found' }} </h3>
                <div class="search__content-cards" 
                :class="[{'card-1' : searchStore.count == 1}, 
                {'card-2' : searchStore.count == 2}]">
                    <SurahDesc v-if="searchStore.search" :ayahList="searchStore.search" />
                </div>
            </div>
        </div>
    </section>
</template>

