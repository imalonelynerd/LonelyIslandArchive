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
    justify-content: center;
    align-items: center;
    padding: 32px 0;
    background: var(--widget);;
    border-radius: 24px;
    text-align: center;
  }

  .big-cell > a > div {
    display: flex !important;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }

  .big-cell > a > div > img {
    height: 40px;
    margin-right: 16px;
    filter: var(--icon);
  }

  .big-cell > a > div > h2 {
    font-size: 1.15em;
  }
}

@media only screen and (orientation: portrait) {
  .big-cell {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }

  .big-cell > *:not(:last-of-type) {
    margin-bottom: 1.5vh;
  }

  .big-cell > a {
    display: flex;
    flex-direction: column;
    justify-content: center; /*start ?*/
    align-items: center;
    padding: 3vh 0;
    background: var(--widget);;
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
    filter: var(--icon);
  }

  .big-cell > a > div > h2 {
    margin: 1vh 0 0 0;
  }
}
</style>