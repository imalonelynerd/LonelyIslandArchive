<script setup>
import CustomFooter from "@/components/CustomFooter.vue";
import Navbar from "@/components/Navbar.vue";
import MobileNavbar from "@/components/MobileNavbar.vue";
import Title from "@/components/Title.vue";
import Background from "@/components/Background.vue";
import PublicComponements from "@/views/PublicComponements.vue";
import PrivateComponements from "@/views/PrivateComponements.vue";
import {currentPage} from "@/assets/js/switchPath";


document.querySelector('html').dataset.theme = `theme-dawn`;
</script>

<template>
  <Navbar alignRight="true"/>
  <MobileNavbar/>
  <Title/>
  <Background/>
  <PublicComponements v-if="currentPage($route) === 'HOME' "/>
  <PrivateComponements v-if="currentPage($route) === 'PRIVATE'"/>
  <CustomFooter/>
</template>

<style scoped>

</style>

