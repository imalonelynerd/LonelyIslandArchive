<script setup>
import MenuButton from "@/components/MenuButton.vue";
import HiddenMenu from "@/components/HiddenMenu.vue";
import {ref} from "vue";
import {switchTheme} from "@/assets/js/darkMode";

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

const linksMenu = ref({
  menuButtons:
      [
        {
          hrefLink: "#next",
          imgLink: "/images/icons/top/nextcloud.png",
          shownTitle: "Nextcloud Apps",
        },
        {
          hrefLink: "#yuno",
          imgLink: "/images/icons/top/yuno.png",
          shownTitle: "YunoHost Apps",
        },
        {
          hrefLink: "#webapps",
          imgLink: "/images/icons/top/webapps.png",
          shownTitle: "Webapps",
        },
        {
          hrefLink: "#projects",
          imgLink: "/images/icons/top/projects.png",
          shownTitle: "Projects / Contributions",
        },
        {
          hrefLink: "#contact",
          imgLink: "/images/icons/top/contact.png",
          shownTitle: "Contacts",
        }, {
        hrefLink: "#misc",
        imgLink: "/images/icons/top/misc.png",
        shownTitle: "Miscellaneous",
      },

      ]
})

</script>

<template>
  <div class="mobile-navbar-container">
    <HiddenMenu :menuOptions="linksMenu" menuId="links" id="links"/>
    <HiddenMenu :menuOptions="themeMenu" menuId="mtheme" id="mtheme"/>
    <MenuButton buttonId="links" imgLink="/images/icons/top/list.png" shownTitle=""/>
    <MenuButton buttonId="mtheme" imgLink="/images/icons/top/theme.png" shownTitle="" :isImportant="true"/>
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