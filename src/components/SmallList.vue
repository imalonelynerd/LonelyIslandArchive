<script setup>

const props = defineProps([
  "cellList"
])

const cellListVar = props.cellList.links;
</script>

<template>
  <div class="small-cell">
    <a v-for="elem in cellListVar" :href="elem.href" @click="elem.onc">
      <img :src="elem.img">
      <h2>{{ elem.title }}<span>{{ elem.span }}</span></h2>
    </a>
  </div>

</template>

<style scoped>
@media only screen and (orientation: landscape) {
  .small-cell {
    width: 90%;
    display: grid !important;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr 1fr;
    gap: 32px;
  }

  .small-cell > a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 12px;
    background: var(--bg2);;
    border-radius: 999px;
    text-align: center;
  }

  .small-cell > a > img {
    height: 32px;
    margin-right: 16px;
  }

  .small-cell > a > h2 {
    font-weight: normal;
    font-size: 1.25em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .small-cell > a > h2 > span {
    font-size: 0.5em;
    opacity: 50%;
  }
}

@media only screen and (orientation: portrait) {
  .small-cell {
    width: 90%;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 1vh;
  }

  .small-cell > a {
    display: flex;
    flex-direction: row;
    justify-content: center; /*start ?*/
    align-items: center;
    padding: 1vh;
    background: var(--bg2);;
    border-radius: 3vh;
    text-align: center;
  }

  .small-cell > a > img {
    height: 2.5vh;
    margin-right: 1.5vh;
  }

  .small-cell > a > h2 {
    font-weight: normal;
    font-size: 1.125em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .small-cell > a > h2 > span {
    font-size: 0.5em;
    opacity: 50%;
  }
}
</style>