<script setup>
import CustomFooter from "@/components/CustomFooter.vue";
import Navbar from "@/components/navbarComponements/Navbar.vue";
import MobileNavbar from "@/components/navbarComponements/MobileNavbar.vue";
import Title from "@/components/Titles/PublicTitle.vue";
import Background from "@/components/Background.vue";
import {useRouter} from "vue-router";
import nestedPath from "@/assets/json/nestedPath.json"
import {getURLValues} from "@/assets/js/switchPath";
import {timeTheme} from "@/assets/js/themeMgmt";

{
  let router = useRouter();
  let params = getURLValues();
  if (params.hasOwnProperty("goto") && params["goto"] === "private") {
    router.push(`${nestedPath.path}private`);
  } else {
    router.push(nestedPath.path);
  }
}

{
  timeTheme();
}
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

