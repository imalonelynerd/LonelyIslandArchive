<script setup>
import LinkButton from "@/components/navbarComponements/LinkButton.vue"
import HiddenMenu from "@/components/navbarComponements/HiddenMenu.vue"
import MenuButton from "@/components/navbarComponements/MenuButton.vue";
import {ref} from "vue";
import {switchTheme} from "@/assets/js/themeMgmt"
import {currentPage} from "@/assets/js/switchPath";
import nestedPath from "@/assets/json/nestedPath.json"
import {showMenuUnusual} from "@/assets/js/menuUtils";

defineProps([
  "alignRight"
])

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
            showMenuUnusual("theme2")
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
        <LinkButton hrefLink="#me" :imgLink="nestedPath.path + 'icons/top/me.png'" shownTitle="About me"/>
        <LinkButton hrefLink="#contact" :imgLink="nestedPath.path + 'icons/top/contact.png'" shownTitle="Contacts"/>
        <LinkButton hrefLink="#projects" :imgLink="nestedPath.path + 'icons/top/projects.png'"
                    shownTitle="Projects"/>
        <LinkButton hrefLink="#contrib" :imgLink="nestedPath.path + 'icons/top/public.png'" shownTitle="Contributions"/>
      </div>
      <div v-if="currentPage($route) === 'PRIVATE'">
        <LinkButton href-link="#next" :imgLink="nestedPath.path + 'icons/top/nextcloud.png'" shown-title="Nextcloud"/>
        <LinkButton href-link="#yuno" :imgLink="nestedPath.path + 'icons/top/yuno.png'" shown-title="YunoHost"/>
        <LinkButton href-link="#webapps" :imgLink="nestedPath.path + 'icons/top/webapps.png'" shown-title="Webapps"/>
        <LinkButton href-link="#misc" :imgLink="nestedPath.path + 'icons/top/misc.png'" shown-title="Miscellaneous"/>
      </div>
      <MenuButton buttonId="theme" :imgLink="nestedPath.path + 'icons/top/theme.png'"
                  shownTitle="Theme"
                  :isImportant="true"/>
    </div>
  </div>
  <HiddenMenu :menuOptions="themeMenu" menuId="theme" id="theme"/>
  <HiddenMenu :menuOptions="themeMenu2" menuId="theme2" id="theme2"/>

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