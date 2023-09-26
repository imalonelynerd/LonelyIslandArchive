<script setup>
import LinkButton from "@/components/LinkButton.vue"
import HiddenMenu from "@/components/HiddenMenu.vue"
import MenuButton from "@/components/MenuButton.vue";
import {ref} from "vue";
import {switchTheme} from "@/assets/js/darkMode"
import RouterButton from "@/components/RouterButton.vue";
import {currentPage} from "@/assets/js/switchPath";

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
          imgLink: "/landing/icons/theme/day.png",
          shownTitle: "Day",
        },
        {
          onClick: function () {
            switchTheme('dawn')
          },
          imgLink: "/landing/icons/theme/dawn.png",
          shownTitle: "Dawn"
        },
        {
          onClick: function () {
            switchTheme('night')
          },
          imgLink: "/landing/icons/theme/night.png",
          shownTitle: "Night"
        },
        {
          onClick: function () {
            switchTheme('comet')
          },
          imgLink: "/landing/icons/theme/comet.png",
          shownTitle: "Asteroid"
        },
        {
          onClick: function () {
            switchTheme('system')
          },
          imgLink: "/landing/icons/theme/system.png",
          shownTitle: "System"
        }
      ]
})

</script>

<template>
  <div class="navbar-container" :class="{ 'align-right' : alignRight }">
    <div class="navbar">
      <div v-if="currentPage($route) === 'HOME'">
        <RouterButton hrefLink="/private" imgLink="/landing/icons/top/private.png" shownTitle="Private"/>
        <LinkButton hrefLink="#me" imgLink="/landing/icons/top/me.png" shownTitle="About me"/>
        <LinkButton hrefLink="#contact" imgLink="/landing/icons/top/contact.png" shownTitle="Contacts"/>
        <LinkButton hrefLink="#projects" imgLink="/landing/icons/top/projects.png" shownTitle="Projects"/>
        <LinkButton hrefLink="#contrib" imgLink="/landing/icons/top/public.png" shownTitle="Contributions"/>
      </div>
      <div v-if="currentPage($route) === 'PRIVATE'">
        <RouterButton hrefLink="/" imgLink="/landing/icons/top/public.png" shownTitle="Public"/>
        <LinkButton href-link="#next" img-link="/landing/icons/top/nextcloud.png" shown-title="Nextcloud"/>
        <LinkButton href-link="#yuno" img-link="/landing/icons/top/yuno.png" shown-title="YunoHost"/>
        <LinkButton href-link="#webapps" img-link="/landing/icons/top/webapps.png" shown-title="Webapps"/>
        <LinkButton href-link="#misc" img-link="/landing/icons/top/misc.png" shown-title="Miscellaneous"/>

      </div>
      <MenuButton buttonId="theme" imgLink="/landing/icons/top/theme.png" shownTitle="Theme" :isImportant="true"/>
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