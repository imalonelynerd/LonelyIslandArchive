<script setup>
import MenuButton from "@/components/MenuButton.vue";
import HiddenMenu from "@/components/HiddenMenu.vue";
import {ref} from "vue";
import {switchTheme} from "@/assets/js/darkMode";
import {currentPage} from "@/assets/js/switchPath";
import nestedPath from "@/assets/json/nestedPath.json";

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

const publicMenu = ref({
  menuButtons:
      [
        {
          routerLink: `${nestedPath.path}private`,
          hrefLink: "route",
          imgLink: `${nestedPath.path}icons/top/private.png`,
          shownTitle: "Switch to Private",
        },
        {
          hrefLink: "#contact",
          imgLink: `${nestedPath.path}icons/top/contact.png`,
          shownTitle: "Contacts",
        },
        {
          hrefLink: "#me",
          imgLink: `${nestedPath.path}icons/top/me.png`,
          shownTitle: "About me",
        },
        {
          hrefLink: "#projects",
          imgLink: `${nestedPath.path}icons/top/projects.png`,
          shownTitle: "Projects",
        },
        {
          hrefLink: "#contrib",
          imgLink: `${nestedPath.path}icons/top/public.png`,
          shownTitle: "Contributions",
        }
      ]
})


const privateMenu = ref({
  menuButtons:
      [
        {
          hrefLink: "https://imalonelynerd.fr/yunohost/sso/",
          imgLink: `${nestedPath.path}icons/top/login.png`,
          shownTitle: "Log in",
        },
        {
          routerLink: nestedPath.path,
          hrefLink: "route",
          imgLink: `${nestedPath.path}icons/top/public.png`,
          shownTitle: "Switch to Public",
        },
        {
          hrefLink: "#next",
          imgLink: `${nestedPath.path}icons/top/nextcloud.png`,
          shownTitle: "Nextcloud Apps",
        },
        {
          hrefLink: "#yuno",
          imgLink: `${nestedPath.path}icons/top/yuno.png`,
          shownTitle: "YunoHost Apps",
        },
        {
          hrefLink: "#webapps",
          imgLink: `${nestedPath.path}icons/top/webapps.png`,
          shownTitle: "Webapps",
        },
        {
          hrefLink: "#misc",
          imgLink: `${nestedPath.path}icons/top/misc.png`,
          shownTitle: "Miscellaneous",
        }
      ]
})

</script>

<template>
  <div class="mobile-navbar-container">
    <HiddenMenu :menuOptions="publicMenu" menuId="links" id="links" v-if="currentPage($route) === 'HOME'"/>
    <HiddenMenu :menuOptions="privateMenu" menuId="links" id="links" v-if="currentPage($route) === 'PRIVATE'"/>
    <HiddenMenu :menuOptions="themeMenu" menuId="mtheme" id="mtheme"/>
    <MenuButton buttonId="links" :imgLink="nestedPath.path + 'icons/top/list.png'" shownTitle=""/>
    <MenuButton buttonId="mtheme" :imgLink="nestedPath.path + 'icons/top/theme.png'" shownTitle="" :isImportant="true"/>
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