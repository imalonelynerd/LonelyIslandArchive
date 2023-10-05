<script setup>
import CustomFooter from "@/components/CustomFooter.vue";
import Navbar from "@/components/Navbar.vue";
import MobileNavbar from "@/components/MobileNavbar.vue";
import Title from "@/components/Title.vue";
import Background from "@/components/Background.vue";
import PublicComponements from "@/views/PublicComponements.vue";
import PrivateComponements from "@/views/PrivateComponements.vue";
import {currentPage} from "@/assets/js/switchPath";
import {useRouter} from "vue-router";
import nestedPath from "@/assets/json/nestedPath.json"

function getURLValues() {
  let search = window.location.search.replace(/^\?/, '').replace(/\+/g, ' ');
  let values = {};
  if (search.length) {
    let part, parts = search.split('&');
    for (let i = 0, iLen = parts.length; i < iLen; i++) {
      part = parts[i].split('=');
      values[part[0]] = window.decodeURIComponent(part[1]);
    }
  }
  return values;
}

{
  let val = getURLValues();
  let router = useRouter();
  if (val.hasOwnProperty("goto") && val.goto === "private") {
    router.push(`${nestedPath.path}private`);
  } else {
    router.push(nestedPath.path);
  }
}

{
  let time = new Date().getHours();
  if (time > 1 && time <= 7) {
    document.querySelector('html').dataset.theme = `theme-comet`;
  } else if (time > 7 && time <= 14) {
    document.querySelector('html').dataset.theme = `theme-day`;
  } else if (time > 14 && time <= 19) {
    document.querySelector('html').dataset.theme = `theme-dawn`;
  } else {
    document.querySelector('html').dataset.theme = `theme-night`;
  }
}
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

