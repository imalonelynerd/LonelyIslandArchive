<script setup>
import MenuButton from "@/components/navbarComponements/MenuButton.vue";
import HiddenMenu from "@/components/navbarComponements/HiddenMenu.vue";
import {ref} from "vue";
import {switchTheme} from "@/assets/js/themeMgmt";
import {currentPage} from "@/assets/js/switchPath";
import nestedPath from "@/assets/json/nestedPath.json";
import {showMenuUnusual} from "@/assets/js/menuUtils";

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
            showMenuUnusual("mtheme2");
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

const publicMenu = ref({
  menuButtons:
      [
        {
          hrefLink: "#me",
          imgLink: `${nestedPath.path}icons/top/me.png`,
          shownTitle: "About me",
        },
        {
          hrefLink: "#contact",
          imgLink: `${nestedPath.path}icons/top/contact.png`,
          shownTitle: "Contacts",
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
  <HiddenMenu :menuOptions="publicMenu" menuId="links" id="links" v-if="currentPage($route) === 'HOME'"/>
  <HiddenMenu :menuOptions="privateMenu" menuId="links" id="links" v-if="currentPage($route) === 'PRIVATE'"/>
  <HiddenMenu :menuOptions="themeMenu" menuId="mtheme" id="mtheme"/>
  <HiddenMenu :menu-options="themeMenu2" menu-id="mtheme2" id="mtheme2"/>

  <div class="mobile-navbar-container">
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
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 3vh;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  animation: HewwoBar ease-out 0.75s;
}
</style>