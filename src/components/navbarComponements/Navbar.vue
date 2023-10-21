<script setup>
import NavbarButton from "@/components/navbarComponements/NavbarButton.vue"
import HiddenMenu from "@/components/navbarComponements/HiddenMenu.vue"
import {ref} from "vue";
import {switchTheme} from "@/assets/js/themeMgmt"
import {currentPage} from "@/assets/js/switchPath";
import nestedPath from "@/assets/json/nestedPath.json"
import {changeLoc} from "@/assets/js/menuUtils";

defineProps([
  "alignRight"
])

const isThemeMenuShown = ref(false);
const isThemeMenu2Shown = ref(false);


const themeMenu = ref({
  menuButtons:
      [
        {
          onClick: function () {
            switchTheme('day')
          },
          imgLink: `${nestedPath.path}icons/theme/day.png`,
          shownTitle: "Day",
        },
        {
          onClick: function () {
            switchTheme('dawn')
          },
          imgLink: `${nestedPath.path}icons/theme/dawn.png`,
          shownTitle: "Dawn"
        },
        {
          onClick: function () {
            switchTheme('night')
          },
          imgLink: `${nestedPath.path}icons/theme/night.png`,
          shownTitle: "Night"
        },
        {
          onClick: function () {
            switchTheme('comet')
          },
          imgLink: `${nestedPath.path}icons/theme/comet.png`,
          shownTitle: "Asteroid"
        },
        {
          onClick: function () {
            isThemeMenuShown.value = false;
            isThemeMenu2Shown.value = true;
          },
          imgLink: `${nestedPath.path}icons/top/misc.png`,
          shownTitle: "Others"
        }
      ]
})

const themeMenu2 = ref({
  menuButtons:
      [
        {
          onClick: function () {
            switchTheme('system')
          },
          imgLink: `${nestedPath.path}icons/theme/system.png`,
          shownTitle: "System",
        },
        {
          onClick: function () {
            switchTheme('time')
          },
          imgLink: `${nestedPath.path}icons/theme/time.png`,
          shownTitle: "Based on time"
        }
      ]
})

</script>

<template>
  <div class="navbar-container" :class="{ 'align-right' : alignRight }">
    <div class="navbar">
      <div v-if="currentPage($route) === 'HOME'">
        <NavbarButton @update:buttonClicked="changeLoc('#me',false)"
                      :imgLink="nestedPath.path + 'icons/top/me.png'"
                      shownTitle="About me"/>
        <NavbarButton @update:buttonClicked="changeLoc('#contact',false)"
                      :imgLink="nestedPath.path + 'icons/top/contact.png'"
                      shownTitle="Contacts"/>
        <NavbarButton @update:buttonClicked="changeLoc('#projects',false)"
                      :imgLink="nestedPath.path + 'icons/top/projects.png'"
                      shownTitle="Projects"/>
        <NavbarButton @update:buttonClicked="changeLoc('#contrib',false)"
                      :imgLink="nestedPath.path + 'icons/top/public.png'"
                      shownTitle="Contributions"/>
      </div>
      <div v-if="currentPage($route) === 'PRIVATE'">
        <NavbarButton @update:buttonClicked="changeLoc('#next',false)"
                      :imgLink="nestedPath.path + 'icons/top/nextcloud.png'"
                      shown-title="Nextcloud"/>
        <NavbarButton @update:buttonClicked="changeLoc('#yuno',false)"
                      :imgLink="nestedPath.path + 'icons/top/yuno.png'"
                      shown-title="YunoHost"/>
        <NavbarButton @update:buttonClicked="changeLoc('#webapps',false)"
                      :imgLink="nestedPath.path + 'icons/top/webapps.png'"
                      shown-title="Webapps"/>
        <NavbarButton @update:buttonClicked="changeLoc('#webapps',false)"
                      :imgLink="nestedPath.path + 'icons/top/misc.png'"
                      shown-title="Miscellaneous"/>
      </div>
      <NavbarButton @update:buttonClicked="isThemeMenuShown = true"
                    :imgLink="nestedPath.path + 'icons/top/theme.png'"
                    shownTitle="Theme"
                    :isImportant="true"/>
    </div>
  </div>
  <HiddenMenu :menuOptions="themeMenu" v-if="isThemeMenuShown === true" @update:menuHidden="isThemeMenuShown = false"/>
  <HiddenMenu :menuOptions="themeMenu2" v-if="isThemeMenu2Shown === true"
              @update:menuHidden="isThemeMenu2Shown = false"/>

</template>

<style scoped>
@media only screen and (orientation: portrait) {
  div {
    display: none !important;
  }
}

.navbar-container {
  position: absolute;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.navbar, .navbar > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: HewwoBar ease-out 0.33s;
  gap: 8px;
}

.align-right {
  justify-content: end;
}

</style>