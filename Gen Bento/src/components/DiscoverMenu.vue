<script setup>

import Quickfly from '@/common/vueAssets/QuickflyMenu.vue'
import { ref } from 'vue'
import List from '@/common/vueAssets/ListMenu.vue'
import { changeLoc } from '@/common/jsAssets/linksActions.js'
import { SpecialTheme } from '@/common/jsAssets/themeSupport.js'
import Button from '@/common/vueAssets/CustomButton.vue'
import { Theme } from '@/assets/commonNecessities.js'
import router from '@/router/index.js'

const isThemesShown = ref(false)

</script>

<template>
  <Quickfly
    @update:menu-hidden="isThemesShown = false" v-if="isThemesShown === true">
    <template #title>
      <img src="/icons/themes/theme.png">
      <p>Themes</p>
    </template>
    <List :has-title="true">
      <template #title>
        <p>Static themes</p>
      </template>
      <Button @click="$themes.switchTheme(Theme.Day)">
        <img src="/icons/themes/day.png" />
        <p>Day</p>
      </Button>
      <Button @click="$themes.switchTheme(Theme.Twilight)">
        <img src="/icons/themes/twilight.png" />
        <p>Twilight</p>
      </Button>
      <Button @click="$themes.switchTheme(Theme.Night)">
        <img src="/icons/themes/night.png" />
        <p>Night</p>
      </Button>
      <Button @click="$themes.switchTheme(Theme.Comet)">
        <img src="/icons/themes/comet.png" />
        <p>Comet</p>
      </Button>
      <Button @click="$themes.switchTheme(Theme.Oled)">
        <img src="/icons/themes/oled.png" title="Saves battery on OLED screens" />
        <p>OLED</p>
      </Button>
    </List>
    <List :has-title="true">
      <template #title>
        <p>Dynamic themes</p>
      </template>
      <Button title="Switches between Day / Night" @click="$themes.switchTheme(SpecialTheme.Time)">
        <img src="/icons/themes/time.png" />
        <p>Time-based</p>
      </Button>
      <Button title="Switches between Day / Night" @click="$themes.switchTheme(SpecialTheme.System)">
        <img src="/icons/themes/system.png" />
        <p>OS default</p>
      </Button>
      <Button @click="$themes.switchTheme(SpecialTheme.Random)">
        <img src="/icons/themes/random.png" />
        <p>Random</p>
      </Button>
    </List>
  </Quickfly>
  <div class="discover-container">
    <div class="discover" v-if="$route.name === 'home'">
      <div @click="changeLoc('#',false)">
        <img src="/icons/up.png" />
      </div>
      <div @click="changeLoc('#me',false)">
        <img src="/icons/me.png" />
      </div>
      <div @click="changeLoc('#projects',false)">
        <img src="/icons/projects.png" />
      </div>
      <div @click="changeLoc('#designs',false)">
        <img src="/icons/designs.png" />
      </div>
      <div @click="changeLoc('#contact',false)">
        <img src="/icons/contact.png" />
      </div>
      <div @click="isThemesShown = true;">
        <img src="/icons/theme.png" />
      </div>
    </div>
    <div class="discover" v-else>
      <div @click="router.push('/')">
        <img src="/icons/back.png" />
      </div>
      <div @click="isThemesShown = true;">
        <img src="/icons/theme.png" />
      </div>
    </div>
  </div>
</template>

<style>
.discover-container {
  position: fixed;
  top: 0;
  left: 48px;
  bottom: 0;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.discover {
  width: 56px;
  height: fit-content;
  display: flex;
  flex-direction: column;
  align-items: stretch;
  justify-content: center;
  gap: 12px;
  border-radius: var(--radius-inf);
  transition: var(--switch);
}

.discover > div {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 20px;
  background: color-mix(in srgb, transparent var(--alpha2), var(--color2));

  gap: 12px;
  border-radius: var(--radius-inf);
  transition: var(--switch);
}

.discover:hover > div {
  background: color-mix(in srgb, transparent var(--alpha), var(--color2));
}

.discover > div:hover {
  background: color-mix(in srgb, transparent var(--alpha), var(--color4));
  scale: 1.1;
}

.discover > div:active {
  scale: 0.9;
}

.discover:hover > div:last-child {
  background: var(--color3);
}

.discover > div:last-child:hover {
  background: color-mix(in srgb, var(--color3), var(--color4));
}

.discover > div > img {
  height: 16px;
}

.discover > div > p {
  margin: 0;
  font-size: var(--font-small);
  font-weight: bold;
}
</style>