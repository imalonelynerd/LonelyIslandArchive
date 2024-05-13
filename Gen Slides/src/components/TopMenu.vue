<script setup>

import RoundButton from '@/components/RoundButton.vue'
import BlurryPicture from '@/components/BlurryPicture.vue'
import ThemeSelector from '@/components/ThemeSelector.vue'
import { ref } from 'vue'

const isShown = ref(false);
</script>

<template>
  <div class="TopMenu" ref="TopMenu">
    <div>
      <BlurryPicture
        width="160px"
        height="160px">
        <img src="/images/fey.png" alt="Avatar" class="Avatar">
      </BlurryPicture>
      <h3>Hey there, I'm</h3>
      <h1>Nerd</h1>
    </div>
    <div>
      <RoundButton>About me</RoundButton>
      <RoundButton>My web apps</RoundButton>
      <RoundButton>My apps</RoundButton>
      <RoundButton>My designs</RoundButton>
      <RoundButton>Contact me</RoundButton>
      <RoundButton @click="isShown = !isShown">
        <img src="/icons/theme.png">
      </RoundButton>
    </div>
    <ThemeSelector v-if="isShown"/>
  </div>
</template>

<style>
.TopMenu {
  box-sizing: border-box;
  width: 1200px;

  background: var(--widget);
  padding: var(--card-padding) 56px;
  border-radius: 0 0 var(--radius-small) var(--radius-small);

  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  gap: 24px;

  overflow-y: scroll;
  transition: var(--switch);
  z-index: 3;

  flex-grow: 0;
}

.TopMenu * {
  margin: 0;
}

.Avatar {
  border-radius: var(--radius-inf);
}

.TopMenu > div:nth-of-type(1) {
  display: flex;
  flex-direction: column;
  justify-content: start;
}

.TopMenu > div:nth-of-type(1) > div {
  margin-bottom: 16px;
}

.TopMenu > div > h1 {
  font-size: 3em;
  font-weight: 900;
}

.TopMenu > div > h3 {
  font-size: 1em;
  opacity: 0.75;
}

.TopMenu > div:nth-of-type(2) {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 20px;
}

</style>