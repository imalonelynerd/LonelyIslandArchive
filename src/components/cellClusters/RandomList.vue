<script setup>

import {changeLoc} from "@/assets/js/menuUtils";

const props = defineProps([
  "cellList"
])

const cellListVar = props.cellList.links;
</script>

<template>
  <div class="r-cell">
    <a v-for="elem in cellListVar" :title="elem.title" @click="changeLoc(elem.img)"> <!--@click="elem.onc"-->
      <img :src="elem.img">
    </a>
  </div>
</template>

<style scoped>
@media only screen and (orientation: landscape) {
  .r-cell {
    margin: -16px 0 -16px;
    padding: 16px 0 16px;
    width: 90%;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: visible;
    justify-content: start;
    align-items: stretch;
    gap: 24px;
    scrollbar-width: none;
    border-radius: 32px;
  }

  .r-cell::-webkit-scrollbar {
    display: none;
  }

  .r-cell > a {
    height: 160px;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--widget);
    border-radius: 32px;
    text-align: center;
    transition: all 0.25s;
    box-shadow: var(--shadow);
  }

  .r-cell > a:hover {
    filter: var(--effect);
    transform: translateY(-16px);
  }

  .r-cell > a > * {
    margin: 0;
    transition: all 0.25s;
  }

  .r-cell > a > img {
    height: 100%;
    width: fit-content;
    border-radius: 32px;
  }
}

@media only screen and (orientation: portrait) {
  .r-cell {
    width: 85%;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    justify-content: start;
    align-items: stretch;
    gap: 4vw;
  }

  .r-cell::-webkit-scrollbar {
    display: none;
  }

  .r-cell > a {
    height: 40vw;
    display: flex;
    justify-content: center;
    align-items: center;
    background: var(--widget);
    border-radius: 6vw;
    text-align: center;
    transition: all 0.25s;
    box-shadow: var(--shadow);
  }

  .r-cell > a > * {
    margin: 0;
    transition: all 0.25s;
  }

  .r-cell > a > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 6vw;
  }
}
</style>