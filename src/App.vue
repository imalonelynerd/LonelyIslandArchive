<script setup>
import CustomFooter from "@/components/CustomFooter.vue";
import Navbar from "@/components/navbarComponements/Navbar.vue";
import MobileNavbar from "@/components/navbarComponements/MobileNavbar.vue";
import Background from "@/components/Background.vue";
import {timeTheme} from "@/assets/js/themeMgmt";

timeTheme();

</script>

<template>
  <Navbar alignRight="true"/>
  <MobileNavbar/>
  <Background/>
  <router-view></router-view>
  <CustomFooter/>
</template>

<style scoped>

</style>

