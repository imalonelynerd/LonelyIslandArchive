<script setup>

const props = defineProps([
  "cellList",
])

const cellListVar = props.cellList.links;
</script>

<template>
  <div class="im-cell">
    <a v-for="elem in cellListVar" :href="elem.href" @click="elem.onc">
      <img :src="elem.img" :alt="elem.img">
      <h2>{{ elem.title }}</h2>
      <p v-html="elem.desc"></p>
      <code>{{ elem.code }}</code>
    </a>
  </div>
</template>

<style scoped>
@media only screen and (orientation: landscape) {
  .im-cell {
    width: 90%;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr 1fr;
    gap: 24px;
  }

  .im-cell > a {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 0 0 24px;
    background: var(--widget);
    border-radius: 16px;
    text-align: center;
    transition: all 0.25s;
    gap: 16px;
    box-shadow: var(--shadow);
  }

  .im-cell > a:hover {
    /*border-radius: 64px;*/
    filter: var(--effect);
  }

  .im-cell > a > img {
    height: fit-content;
    width: 100%;
    border-radius: 16px 16px 0 0;
    transition: all 0.25s;
  }

  .im-cell > *, .im-cell > a > * {
    margin: 0;
  }

  .im-cell > a > *:not(img) {
    padding: 0 32px;
  }

  .im-cell > a > h2 {
    font-size: 1.20em;
  }
}

@media only screen and (orientation: portrait) {
  .im-cell {
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 2vh;
  }

  .im-cell > a {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /*start ?*/
    align-items: center;
    padding: 0 0 3vh;
    background: var(--widget);
    border-radius: 2vh;
    text-align: center;
    transition: all 0.25s;
    gap: 1vh;
    box-shadow: var(--shadow);
  }

  .im-cell > a > * {
    margin: 0;
  }

  .im-cell > a > img {
    height: fit-content;
    width: 100%;
    border-radius: 2vh 2vh 0 0;
    margin-bottom: 1.5vh !important;
  }

  .im-cell > a > h2 {
    margin: 1vh 0 0 0;
  }

  .im-cell > a:active {
    filter: var(--effect);
  }
}
</style>