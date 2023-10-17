<script setup>

const props = defineProps([
  "cellList"
])

const cellListVar = props.cellList.links;
</script>

<template>
  <div class="big-cell">
    <a v-for="elem in cellListVar" @click="elem.onc">
      <div>
        <img :src="elem.img" :alt="elem.img">
        <h2>{{ elem.title }}</h2>
      </div>
      <p v-html="elem.desc"></p>
      <code>{{ elem.code }}</code>
    </a>
  </div>
</template>

<style scoped>
@media only screen and (orientation: landscape) {
  .big-cell {
    width: 90%;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
  }

  .big-cell > a {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 24px 16px;
    background: var(--widget);
    border-radius: 16px;
    text-align: center;
    transition: all 0.25s;
    gap: 16px;
    box-shadow: var(--shadow);
  }

  .big-cell > a:hover {
    /*border-radius: 64px;*/
    filter: var(--effect);
  }

  .big-cell > a > * {
    margin: 0;
  }

  .big-cell > a > div {
    display: flex !important;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .big-cell > a > div > img {
    height: 40px;
    margin: 0 16px 0 0;
    filter: var(--icon);
  }

  .big-cell > a > div > h2 {
    font-size: 1.15em;
    margin: 0;
  }
}

@media only screen and (orientation: portrait) {
  .big-cell {
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }

  .big-cell > *:not(:last-of-type) {
    margin-bottom: 2vh;
  }

  .big-cell > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 3vh 1vh;
    background: var(--widget);
    border-radius: 2vh;
    text-align: center;
    transition: all 0.25s;
    gap: 1.5vh;
    box-shadow: var(--shadow);
  }

  .big-cell > a > div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .big-cell > a > * {
    margin: 0;
  }

  .big-cell > a > div > img {
    height: 4vh;
    filter: var(--icon);
  }

  .big-cell > a > div > h2 {
    margin: 1vh 0 0 0;
  }

  .big-cell > a:active {
    filter: var(--effect);
  }
}
</style>