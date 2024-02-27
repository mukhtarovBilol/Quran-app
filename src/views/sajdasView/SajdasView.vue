<script setup>
import Bismillah from "@/components/Bismillah/Bismillah.vue";
import SurahDesc from '@/components/card/surah/SurahDesc.vue';
import { useSajdasStore } from "@/stores/getSajdasStore";

const sajdasStore = useSajdasStore()
sajdasStore.getSajdas()
</script>

<template>
    <section class="sajdas">
        <div class="container">
            <Bismillah/>
            <div class="sajdas__content">
                <div class="sajdas__content-cards">
                    <SurahDesc :ayahList="sajdasStore.sajdas?.ayahs" :edition="sajdasStore.sajdas?.edition" />
                </div>
            </div>
        </div>
    </section>
</template>