<script setup>
import LinkButton from "@/components/LinkButton.vue"
import HiddenMenu from "@/components/HiddenMenu.vue"
import MenuButton from "@/components/MenuButton.vue";
import {ref} from "vue";
import {switchTheme} from "@/assets/js/darkMode"
import RouterButton from "@/components/RouterButton.vue";
import {currentPage} from "@/assets/js/switchPath";
import nestedPath from "@/assets/json/nestedPath.json"

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
            switchTheme('system')
          },
          imgLink: `${nestedPath.path}icons/theme/system.png`,
          shownTitle: "System"
        }
      ]
})

</script>

<template>
  <div class="navbar-container" :class="{ 'align-right' : alignRight }">
    <div class="navbar">
      <div v-if="currentPage($route) === 'HOME'">
        <RouterButton hrefLink="/landing/private" :imgLink="nestedPath.path + 'icons/top/private.png'" shownTitle="Private"/>
        <LinkButton hrefLink="#me" :imgLink="nestedPath.path + 'icons/top/me.png'" shownTitle="About me"/>
        <LinkButton hrefLink="#contact" :imgLink="nestedPath.path + 'icons/top/contact.png'" shownTitle="Contacts"/>
        <LinkButton hrefLink="#projects" :imgLink="nestedPath.path + 'icons/top/projects.png'" shownTitle="Projects"/>
        <LinkButton hrefLink="#contrib" :imgLink="nestedPath.path + 'icons/top/public.png'" shownTitle="Contributions"/>
      </div>
      <div v-if="currentPage($route) === 'PRIVATE'">
        <RouterButton hrefLink="/landing" :imgLink="nestedPath.path + 'icons/top/public.png'" shownTitle="Public"/>
        <LinkButton href-link="#next" :imgLink="nestedPath.path + 'icons/top/nextcloud.png'" shown-title="Nextcloud"/>
        <LinkButton href-link="#yuno" :imgLink="nestedPath.path + 'icons/top/yuno.png'" shown-title="YunoHost"/>
        <LinkButton href-link="#webapps" :imgLink="nestedPath.path + 'icons/top/webapps.png'" shown-title="Webapps"/>
        <LinkButton href-link="#misc" :imgLink="nestedPath.path + 'icons/top/misc.png'" shown-title="Miscellaneous"/>

      </div>
      <MenuButton buttonId="theme" :imgLink="nestedPath.path + 'icons/top/theme.png'" shownTitle="Theme" :isImportant="true"/>
    </div>
  </div>
  <HiddenMenu :menuOptions="themeMenu" menuId="theme" id="theme"/>
</template>

<style scoped>
@media only screen and (orientation: portrait) {
  div {
    display: none !important;
  }
}

.navbar-container {
  padding: 12px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.navbar, .navbar > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  animation: Hewwo 0.25s;
}

.align-right {
  justify-content: end;
}

.navbar > *:not(:last-child), .navbar > div > *:not(:last-child) {
  margin-right: 8px;
}

</style>