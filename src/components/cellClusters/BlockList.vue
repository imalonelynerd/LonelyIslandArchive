<script setup>

const props = defineProps([
  "cellList"
])

const cellListVar = props.cellList.links;
</script>

<template>
  <div class="block-cell">
    <a v-for="elem in cellListVar" @click="elem.onc" :title="elem.span">
      <img :src="elem.img">
      <h2>{{ elem.title }}</h2>
      <p>{{ elem.span }}</p>
      <!--p>{{ elem.span === "" ? "> " + elem.title:elem.span }}</p-->
    </a>
  </div>

</template>

<style scoped>
@media only screen and (orientation: landscape) {
  .block-cell {
    width: 90%;
    overflow: scroll;
    display: flex !important;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 16px;
  }

  .block-cell > a {
    flex-basis: 128px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 24px;
    background: var(--widget);
    border-radius: 16px;
    transition: all 0.25s;
    gap: 8px;
    box-shadow: var(--shadow);
  }

  .block-cell > a > * {
    text-align: center;
    margin: 0;
  }

  .block-cell > a:hover {
    filter: var(--effect);
  }

  .block-cell > a > img {
    height: 1.5em;
    filter: var(--icon);
  }

  .block-cell > a > h2 {
    font-size: 1em;
  }

  .block-cell > a > p {
    font-size: 0.75em;
    opacity: 0.5;
  }
}

@media only screen and (orientation: portrait) {
  .block-cell {
    width: 90%;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 2vh;
  }

  .block-cell > a {
    display: flex;
    flex-direction: row;
    justify-content: center; /*start ?*/
    align-items: center;
    padding: 1vh 1vh;
    background: var(--widget);
    border-radius: 2vh;
    text-align: center;
    transition: all 0.25s;
    box-shadow: var(--shadow);
  }

  .block-cell > a > img {
    height: 2.5vh;
    margin-right: 1.5vh;
    filter: var(--icon);
  }

  .block-cell > a > h2 {
    font-weight: normal;
    font-size: 1.125em;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
  }

  .block-cell > a > h2 > span {
    font-size: 0.5em;
    opacity: 50%;
  }

  .block-cell > a:active {
    filter: var(--effect);
  }
}
</style>