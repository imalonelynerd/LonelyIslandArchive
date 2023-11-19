<script setup>

import {changeLoc} from "@/assets/js/menuUtils";

const props = defineProps([
  "cellList"
])

const cellListVar = props.cellList.links;
</script>

<template>
  <div class="r-cell">
    <a v-for="elem in cellListVar" :title="elem.title" @click="elem.onc"> <!--@click="elem.onc"-->
      <img :src="elem.img">
      <div>
        <p>{{elem.title}}</p>
      </div>
    </a>
  </div>
</template>

<style scoped>
@media only screen and (orientation: landscape) {
  .r-cell {
    margin: -32px 0 -32px;
    padding: 32px 0 32px;
    width: 90%;
    display: flex;
    flex-direction: row;
    overflow-x: scroll;
    overflow-y: visible;
    justify-content: start;
    align-items: stretch;
    gap: 24px;
    border-radius: 32px;
  }

  .r-cell > a {
    height: 200px;
    display: flex;
    flex-direction: column;
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
    transform: translateY(-12px);
  }

  .r-cell > a > * {
    margin: 0;
    transition: all 0.25s;
  }

  .r-cell > a > div {
    width: 100%;
    height: 15%;
    display: flex;
    align-items: center;
    justify-content: center;
  }

  .r-cell > a > div > p {
    margin: 0;
    width: 70%;
    font-size: 0.9em;
    opacity: 0.75;
    height: fit-content;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .r-cell > a > img {
    height: 85%;
    border-radius: 32px 32px 0 0;
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

  .r-cell > a > div {
    display: none;
  }

  .r-cell > a > img {
    height: 100%;
    width: 100%;
    object-fit: cover;
    border-radius: 6vw;
  }
}
</style>