<script setup>
import HeaderLayout from "@/layouts/header/HeaderLayout.vue";
import FooterLayout from "@/layouts/footer/FooterLayout.vue";
</script>

<template>
  <div class="wrapper">
    <HeaderLayout/>
    <RouterView />
    <FooterLayout/>
  </div>
</template>
