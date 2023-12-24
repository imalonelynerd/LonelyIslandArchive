<script setup>
import HiddenMenu from "@/components/navbarComponements/HiddenMenu.vue";
import {ref} from "vue";
import {switchTheme} from "@/assets/js/themeMgmt";
import nestedPath from "@/assets/json/nestedPath.json";
import NavbarButton from "@/components/navbarComponements/NavbarButton.vue";
import {useRouter} from "vue-router";

defineProps([
  "hasScrolled"
])

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
const linksMenu = ref({
  menuButtons:
      [
        {
          onClick: function () {
            router.push(nestedPath.path + '')
          },
          imgLink: `${nestedPath.path}icons/landing.webp`,
          shownTitle: "Home",
        },
        {
          onClick: function () {
            router.push(nestedPath.path + 'about')
          },
          imgLink: `${nestedPath.path}icons/me.webp`,
          shownTitle: "About me",
        },
        {
          onClick: function () {
            router.push(nestedPath.path + 'links')
          },
          imgLink: `${nestedPath.path}icons/mail.webp`,
          shownTitle: "Contacts",
        },
        {
          onClick: function () {
            router.push(nestedPath.path + 'projects')
          },
          imgLink: `${nestedPath.path}icons/projects.webp`,
          shownTitle: "Projects",
        },
        {
          onClick: function () {
            router.push(nestedPath.path + 'private')
          },
          imgLink: `${nestedPath.path}icons/private.webp`,
          shownTitle: "Private",
        },
      ]
})

const router = useRouter()

</script>

<template>
  <HiddenMenu v-if="isLinkMenuShown" :menuOptions="linksMenu"
              @update:menuHidden="isLinkMenuShown = false"/>
  <HiddenMenu v-if="isThemeMenuShown"
              :menuOptions="themeMenu"
              @update:menuHidden="isThemeMenuShown = false"/>
  <HiddenMenu v-if="isThemeMenu2Shown"
              :menu-options="themeMenu2"
              @update:menuHidden="isThemeMenu2Shown = false"/>

  <div :class="{'hasbg' : hasScrolled}" class="mobile-navbar-container">
    <NavbarButton :imgLink="nestedPath.path + 'icons/list.webp'"
                  shownTitle=""
                  @update:buttonClicked="isLinkMenuShown = true"/>
    <NavbarButton :imgLink="nestedPath.path + 'icons/theme.webp'"
                  :isImportant="true"
                  shownTitle="" @update:buttonClicked="isThemeMenuShown = true"/>
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
  padding: 6vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  animation: HewwoBar ease-out 0.75s;
  transition: all 0.25s;
  z-index: 5;
}

.hasbg {
  background: var(--bg);
  box-shadow: var(--shadow);
}
</style>