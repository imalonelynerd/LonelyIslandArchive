<script setup>
import HiddenMenu from "@/components/navbarComponements/HiddenMenu.vue";
import {ref} from "vue";
import {switchTheme} from "@/assets/js/themeMgmt";
import {currentPage} from "@/assets/js/switchPath";
import nestedPath from "@/assets/json/nestedPath.json";
import {changeLoc} from "@/assets/js/menuUtils";
import NavbarButton from "@/components/navbarComponements/NavbarButton.vue";

const isThemeMenuShown = ref(false);
const isThemeMenu2Shown = ref(false);
const isLinkMenuShown = ref(false);

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

const publicMenu = ref({
  menuButtons:
      [
        {
          onClick: function () {
            changeLoc('#me')
          },
          imgLink: `${nestedPath.path}icons/top/me.png`,
          shownTitle: "About me",
        },
        {
          onClick: function () {
            changeLoc('#contact')
          },
          imgLink: `${nestedPath.path}icons/top/contact.png`,
          shownTitle: "Contacts",
        },
        {
          onClick: function () {
            changeLoc('#projects')
          },
          imgLink: `${nestedPath.path}icons/top/projects.png`,
          shownTitle: "Projects",
        },
        {
          onClick: function () {
            changeLoc('#contrib')
          },
          imgLink: `${nestedPath.path}icons/top/public.png`,
          shownTitle: "Contributions",
        }
      ]
})

const privateMenu = ref({
  menuButtons:
      [
        {
          onClick: function () {
            changeLoc('#next')
          },
          imgLink: `${nestedPath.path}icons/top/nextcloud.png`,
          shownTitle: "Nextcloud Apps",
        },
        {
          onClick: function () {
            changeLoc('#yuno')
          },
          imgLink: `${nestedPath.path}icons/top/yuno.png`,
          shownTitle: "YunoHost Apps",
        },
        {
          onClick: function () {
            changeLoc('#webapps')
          },
          imgLink: `${nestedPath.path}icons/top/webapps.png`,
          shownTitle: "Webapps",
        },
        {
          onClick: function () {
            changeLoc('#misc')
          },
          imgLink: `${nestedPath.path}icons/top/misc.png`,
          shownTitle: "Miscellaneous",
        }
      ]
})

</script>

<template>
  <HiddenMenu :menuOptions="publicMenu"
              v-if="currentPage($route) === 'HOME' && isLinkMenuShown"
              @update:menuHidden="isLinkMenuShown = false"/>
  <HiddenMenu :menuOptions="privateMenu"
              v-if="currentPage($route) === 'PRIVATE' && isLinkMenuShown"
              @update:menuHidden="isLinkMenuShown = false"/>
  <HiddenMenu :menuOptions="themeMenu"
              v-if="isThemeMenuShown"
              @update:menuHidden="isThemeMenuShown = false"/>
  <HiddenMenu :menu-options="themeMenu2"
              v-if="isThemeMenu2Shown"
              @update:menuHidden="isThemeMenu2Shown = false"/>

  <div class="mobile-navbar-container">
    <NavbarButton @update:buttonClicked="isLinkMenuShown = true"
                  :imgLink="nestedPath.path + 'icons/top/list.png'"
                  shownTitle=""/>
    <NavbarButton @update:buttonClicked="isThemeMenuShown = true"
                  :imgLink="nestedPath.path + 'icons/top/theme.png'"
                  shownTitle="" :isImportant="true"/>
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