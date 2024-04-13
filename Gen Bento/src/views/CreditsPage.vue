<script setup>

import BentoBox from '@/components/BentoBox.vue'
import WidePictureBox from '@/components/BentoComponents/WidePictureBox.vue'
import WideBox from '@/components/BentoComponents/WideBox.vue'
import { changeLoc } from '@/common/jsAssets/linksActions.js'
import IconBox from '@/components/BentoComponents/IconBox.vue'

changeLoc('#', false)
</script>

<template>
  <BentoBox :sect-nb="1" title="Credits" style="margin-top: 192px">
    <WideBox>
      <p>The icons used in the <i>"About me"</i> section are from <i><a
        href="https://icons8.com">Icons8</a></i>.</p></WideBox>
    <WideBox>
      <p>All the other icons are made by <i>me</i>, you can download them <i><a
        href="https://files.imalonelynerd.fr/LonelyIsland/Icons/">here</a></i>.</p>
    </WideBox>
  </BentoBox>
  <BentoBox :sect-nb="1" title="Backgrounds">
    <WidePictureBox
      title="By Max Rovensky"
      @click="changeLoc('https://unsplash.com/fr/photos/prise-de-vue-aerienne-de-lile-Yd1z7287HIw')">
      <img src="/images/backgrounds/day.png">
    </WidePictureBox>
    <WidePictureBox
      title="By David Robinson"
      @click="changeLoc('https://unsplash.com/fr/photos/plan-deau-sous-ciel-nuageux-au-coucher-du-soleil-uDnW8JExFIs')">
      <img src="/images/backgrounds/twilight.png">
    </WidePictureBox>
    <WidePictureBox
      title="By Jaël Vallée"
      @click="changeLoc('https://unsplash.com/fr/photos/photographie-en-accelere-detoiles-WJXAwGrsHJg')">
      <img src="/images/backgrounds/night.png">
    </WidePictureBox>
    <WidePictureBox
      title="By Chris-Håvard Berge"
      @click="changeLoc('https://unsplash.com/fr/photos/roches-noires-pres-du-plan-deau-sous-un-ciel-vert-x5KGzpzML-M')">
      <img src="/images/backgrounds/comet.png">
    </WidePictureBox>
    <WidePictureBox
      title="By Maximilian Schäffler"
      @click="changeLoc('https://unsplash.com/fr/photos/meduses-bleues-dans-leau-pendant-la-journee-o7RbwCKx3pY')">
      <img src="/images/backgrounds/oled.png">
    </WidePictureBox>
  </BentoBox>
</template>

<style>

</style>