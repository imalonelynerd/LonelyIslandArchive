<script setup>

const props = defineProps([
  "cellList",
  "cellType"
])

const cellListVar = props.cellList.links;
</script>

<template>
  <div class="big-cell">
    <a v-for="elem in cellListVar" :href="elem.href" @click="elem.onc">
      <div>
        <img :src="elem.img">
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
    gap: 32px;
  }

  .big-cell > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 48px 24px;
    background: var(--bg2);;
    border-radius: 32px;
    text-align: center;
  }

  .big-cell > a > div {
    display: flex !important;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .big-cell > a > div > img {
    height: 48px;
    margin-right: 16px;
  }
}

@media only screen and (orientation: portrait) {
  .big-cell {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }

  .big-cell > *:not(:last-of-type) {
    margin-bottom: 1vh;
  }

  .big-cell > a {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center; /*start ?*/
    align-items: center;
    padding: 3vh 2vh;
    background: var(--bg2);;
    border-radius: 3vh;
    text-align: center;
  }

  .big-cell > a > div {
    display: flex;
    flex-direction: column;
    justify-content: center; /*start ?*/
    align-items: center;
  }

  .big-cell > a > div > img {
    height: 4vh;
  }

  .big-cell > a > div > h2 {
    margin: 1vh 0 0 0;
  }
}
</style>