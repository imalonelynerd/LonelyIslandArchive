<script setup>
import CustomFooter from "@/components/CustomFooter.vue";
import Navbar from "@/components/navbarComponements/Navbar.vue";
import MobileNavbar from "@/components/navbarComponements/MobileNavbar.vue";
import {ref} from "vue";
import {prettyCode} from "@/assets/js/prettyCode";
import PrettyButton from "@/components/PrettyButton.vue";
import {setThemeFromCookie} from "@/assets/js/themeMgmt";


/*let scroll = ref(0);
window.addEventListener("scroll", () => {
  scroll.value = window.scrollY;
});*/

setThemeFromCookie();
let prettyWitness = ref(false);

let pretty = new prettyCode(prettyWitness);
pretty.initialize();
</script>

<template>
  <PrettyButton v-if="prettyWitness" @update:buttonClicked="pretty.stopPretty()"/>
  <Navbar alignRight="true"/>
  <MobileNavbar/>
  <div class="page">
    <router-view></router-view>
  </div>
  <CustomFooter/>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .page {
    margin: 160px 0 80px;
  }
}

@media screen and (orientation: portrait) {
  .page {
    margin: 32vw 0 24vw;
  }
}
</style>

