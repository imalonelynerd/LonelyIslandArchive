<script setup>
import NavbarButton from "@/components/navbarComponements/NavbarButton.vue"
import HiddenMenu from "@/components/navbarComponements/HiddenMenu.vue"
import {ref} from "vue";
import {switchTheme} from "@/assets/js/themeMgmt"
import nestedPath from "@/assets/json/nestedPath.json"

defineProps([
  "alignRight",
  "hasScrolled",
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
          imgLink: `${nestedPath.path}icons/theme/day.webp`,
          shownTitle: "Day",
        },
        {
          onClick: function () {
            switchTheme('twilight')
          },
          imgLink: `${nestedPath.path}icons/theme/twilight.webp`,
          shownTitle: "Twilight"
        },
        {
          onClick: function () {
            switchTheme('night')
          },
          imgLink: `${nestedPath.path}icons/theme/night.webp`,
          shownTitle: "Night"
        },
        {
          onClick: function () {
            switchTheme('comet')
          },
          imgLink: `${nestedPath.path}icons/theme/comet.webp`,
          shownTitle: "Asteroid"
        },
        {
          onClick: function () {
            isThemeMenu2Shown.value = true;
          },
          imgLink: `${nestedPath.path}icons/misc.webp`,
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
          imgLink: `${nestedPath.path}icons/theme/system.webp`,
          shownTitle: "System",
        },
        {
          onClick: function () {
            switchTheme('time')
          },
          imgLink: `${nestedPath.path}icons/theme/time.webp`,
          shownTitle: "Based on time"
        },
        {
          onClick: function () {
            isThemeMenuShown.value = true;
          },
          imgLink: `${nestedPath.path}icons/misc.webp`,
          shownTitle: "Back"
        }
      ]
})

</script>

<template>
  <div :class="{ 'align-right' : alignRight, 'hasbg' : hasScrolled }" class="navbar-container">
    <div class="navbar">
      <NavbarButton img-link=""
                    shownTitle="Home"
                    @update:buttonClicked="$router.push(nestedPath.path + '')"/>
      <NavbarButton img-link=""
                    shownTitle="About me"
                    @update:buttonClicked="$router.push(nestedPath.path + 'about')"/>
      <NavbarButton img-link=""
                    shownTitle="Contacts"
                    @update:buttonClicked="$router.push(nestedPath.path + 'links')"/>
      <NavbarButton img-link=""
                    shownTitle="Projects"
                    @update:buttonClicked="$router.push(nestedPath.path + 'projects')"/>
      <NavbarButton img-link=""
                    shownTitle="Private"
                    @update:buttonClicked="$router.push(nestedPath.path + 'private')"/>
      <NavbarButton :imgLink="nestedPath.path + 'icons/theme.webp'"
                    :isImportant="$route.name !== 'Home'"
                    :isTransparent="$route.name === 'Home'"
                    shownTitle="Theme"
                    @update:buttonClicked="isThemeMenuShown = true"/>
    </div>
  </div>
  <HiddenMenu v-if="isThemeMenuShown === true" :menuOptions="themeMenu"
              @update:menuHidden="isThemeMenuShown = false"/>
  <HiddenMenu v-if="isThemeMenu2Shown === true" :menuOptions="themeMenu2"
              @update:menuHidden="isThemeMenu2Shown = false"/>

</template>

<style scoped>
@media only screen and (orientation: portrait) {
  div {
    display: none !important;
  }
}

.navbar-container {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  padding: 16px 24px;
  display: flex;
  z-index: 5;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  transition: all 0.25s;
}

.navbar, .navbar > div {
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 8px;
}

.align-right {
  justify-content: end;
}

.hasbg {
  background: var(--bg);
  box-shadow: var(--shadow);
}

</style>