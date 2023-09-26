<script setup>
import MenuButton from "@/components/MenuButton.vue";
import HiddenMenu from "@/components/HiddenMenu.vue";
import {ref} from "vue";
import {switchTheme} from "@/assets/js/darkMode";
import {currentPage} from "@/assets/js/switchPath";

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

const publicMenu = ref({
  menuButtons:
      [
        {
          routerLink: "/private",
          hrefLink: "route",
          imgLink: "/landing/icons/top/private.png",
          shownTitle: "Switch to Private",
        },
        {
          hrefLink: "#contact",
          imgLink: "/landing/icons/top/contact.png",
          shownTitle: "Contacts",
        },
        {
          hrefLink: "#me",
          imgLink: "/landing/icons/top/me.png",
          shownTitle: "About me",
        },
        {
          hrefLink: "#projects",
          imgLink: "/landing/icons/top/projects.png",
          shownTitle: "Projects",
        },
        {
          hrefLink: "#contrib",
          imgLink: "/landing/icons/top/public.png",
          shownTitle: "Contributions",
        }
      ]
})


const privateMenu = ref({
  menuButtons:
      [
        {
          routerLink: "/",
          hrefLink: "route",
          imgLink: "/landing/icons/top/public.png",
          shownTitle: "Switch to Public",
        },
        {
          hrefLink: "#next",
          imgLink: "/landing/icons/top/nextcloud.png",
          shownTitle: "Nextcloud Apps",
        },
        {
          hrefLink: "#yuno",
          imgLink: "/landing/icons/top/yuno.png",
          shownTitle: "YunoHost Apps",
        },
        {
          hrefLink: "#webapps",
          imgLink: "/landing/icons/top/webapps.png",
          shownTitle: "Webapps",
        },
        {
          hrefLink: "#misc",
          imgLink: "/landing/icons/top/misc.png",
          shownTitle: "Miscellaneous",
        },

      ]
})

</script>

<template>
  <div class="mobile-navbar-container">
    <HiddenMenu :menuOptions="publicMenu" menuId="links" id="links" v-if="currentPage($route) === 'HOME'"/>
    <HiddenMenu :menuOptions="privateMenu" menuId="links" id="links" v-if="currentPage($route) === 'PRIVATE'"/>
    <HiddenMenu :menuOptions="themeMenu" menuId="mtheme" id="mtheme"/>
    <MenuButton buttonId="links" imgLink="/landing/icons/top/list.png" shownTitle=""/>
    <MenuButton buttonId="mtheme" imgLink="/landing/icons/top/theme.png" shownTitle="" :isImportant="true"/>
  </div>
</template>

<style scoped>

@media only screen and (orientation: landscape) {
  .mobile-navbar-container {
    display: none !important;
  }
}

.mobile-navbar-container {
  padding: 2vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}
</style>