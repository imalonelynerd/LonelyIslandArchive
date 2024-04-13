<script setup>
import NavbarButton from "@/components/navbarComponements/NavbarButton.vue"
import HiddenMenu from "@/components/navbarComponements/HiddenMenu.vue"
import {ref} from "vue";
import nestedPath from "@/assets/json/nestedPath.json"
import WideButton from "@/components/WideButton.vue";
import {getTheme, switchTheme} from "@/assets/js/themeMgmt";

const isThemeMenuShown = ref(false);
const curTheme = ref(getTheme());

</script>

<template>
  <div class="navbar-container">
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
      <NavbarButton :imgLink="nestedPath.path + 'icons/theme.png'"
                    :isImportant="true"
                    shownTitle="Theme"
                    @update:buttonClicked="isThemeMenuShown = true"/>
    </div>
  </div>
  <HiddenMenu @update:menuHidden="isThemeMenuShown = false" v-if="isThemeMenuShown">
    <div class="vmenu">
      <img src="/icons/theme.png"/>
      <h1>Themes</h1>
      <h3>Static themes</h3>
      <div>
        <WideButton
            img-link="/icons/theme/day.png"
            shown-title="Day"
            @update:button-clicked="switchTheme('day'); curTheme = 'day'"
            :is-important="curTheme === 'day'"
        />
        <WideButton
            img-link="/icons/theme/twilight.png"
            shown-title="Twilight"
            @update:button-clicked="switchTheme('twilight'); curTheme = 'twilight'"
            :is-important="curTheme === 'twilight'"
        />
        <WideButton
            img-link="/icons/theme/night.png"
            shown-title="Night"
            @update:button-clicked="switchTheme('night'); curTheme = 'night'"
            :is-important="curTheme === 'night'"

        />
        <WideButton
            img-link="/icons/theme/comet.png"
            shown-title="Asteroid"
            @update:button-clicked="switchTheme('comet'); curTheme = 'comet'"
            :is-important="curTheme === 'comet'"

        />
      </div>
      <h3>Dynamic themes</h3>
      <div>
        <WideButton
            img-link="/icons/theme/time.png"
            shown-title="Based on time"
            @update:button-clicked="switchTheme('time'); curTheme = 'time'"
            :is-important="curTheme === 'time'"
        />
        <WideButton
            img-link="/icons/theme/system.png"
            shown-title="System"
            @update:button-clicked="switchTheme('system'); curTheme = 'system'"
            :is-important="curTheme === 'system'"
        />
        <WideButton
            img-link="/icons/theme/random.png"
            shown-title="Random"
            @update:button-clicked="switchTheme('random'); curTheme = 'random'"
            :is-important="curTheme === 'random'"
        />
      </div>
      <WideButton
          shown-title="Back"
          img-link="/icons/back.png"
          @update:button-clicked="isThemeMenuShown = false"
      />
    </div>
  </HiddenMenu>
</template>

<style scoped>
@media screen and (orientation: portrait) {
  div {
    display: none !important;
  }
}

@media screen and (orientation: landscape) {

  .navbar-container {
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    padding: 16px 24px;
    display: flex;
    z-index: 5;
    flex-direction: row;
    justify-content: end;
    align-items: center;
    transition: var(--transition);
    background: var(--bg);
  }

  .navbar, .navbar > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    gap: var(--text-gap);
  }

  .vmenu > * {
    margin: 0;
  }

  .vmenu {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 32px;
    gap: var(--big-gap);
  }

  .vmenu > img {
    height: 96px;
  }

  .vmenu > div {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
    align-items: center;
    gap: var(--small-gap);
  }
}

</style>