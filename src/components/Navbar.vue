<script setup>
import LinkButton from "@/components/LinkButton.vue"
import HiddenMenu from "@/components/HiddenMenu.vue"
import MenuButton from "@/components/MenuButton.vue";
import {ref} from "vue";
import {switchTheme} from "@/assets/js/darkMode"


defineProps([
  "alignRight"
])

const themeMenu = ref({
  menuButtons:
      [
        {
          onClick: function () {
            switchTheme('light')
          },
          imgLink: "/images/icons/light.png",
          shownTitle: "Light",
        },
        {
          onClick: function () {
            switchTheme('dark')
          },
          imgLink: "/images/icons/dark.png",
          shownTitle: "Dark"
        },
        {
          onClick: function () {
            switchTheme('system')
          },
          imgLink: "/images/icons/system.png",
          shownTitle: "System"
        }
      ]
})

</script>

<template>
  <div class="navbar-container" :class="{ 'align-right' : alignRight }">
    <div class="navbar">
      <LinkButton hrefLink="#next" imgLink="/images/icons/top/nextcloud.png" shownTitle="Nextcloud"/>
      <LinkButton hrefLink="#yuno" imgLink="/images/icons/top/yuno.png" shownTitle="YunoHost"/>
      <LinkButton hrefLink="#webapps" imgLink="/images/icons/top/webapps.png" shownTitle="Webapps"/>
      <LinkButton hrefLink="#projects" imgLink="/images/icons/top/projects.png" shownTitle="Projects"/>
      <LinkButton hrefLink="#contact" imgLink="/images/icons/top/contact.png" shownTitle="Contacts"/>
      <LinkButton href-link="#misc" imgLink="/images/icons/top/misc.png" shownTitle="Miscellaneous"/>
      <MenuButton buttonId="theme" imgLink="/images/icons/top/theme.png" shownTitle="Theme" :isImportant="true"/>
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
  padding: 0 16px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
}

.navbar {
  display: flex;
  flex-direction: row;
  align-items: center;
}

.align-right {
  justify-content: end;
}

.navbar > *:not(:last-child) {
  margin-right: 8px;
}
</style>