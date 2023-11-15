<script setup>

const props = defineProps([
  "cellList",
])

const cellListVar = props.cellList.links;
</script>

<template>
  <div class="im-cell">
    <a v-for="elem in cellListVar" @click="elem.onc">
      <img :src="elem.img">
      <h2>{{ elem.title }}</h2>
      <p v-html="elem.desc"></p>
      <code v-if="elem.code !== ''">{{ elem.code }}</code>
    </a>
  </div>
</template>

<style scoped>
@media only screen and (orientation: landscape) {
  .im-cell {
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
    scrollbar-width: none;
    border-radius: 32px;
  }

  .im-cell::-webkit-scrollbar {
    display: none;
  }

  .im-cell > a {
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 0 0 32px;
    background: var(--widget);
    border-radius: 32px;
    text-align: center;
    transition: all 0.25s;
    gap: 12px;
    box-shadow: var(--shadow);
  }

  .im-cell > a:hover {
    /*border-radius: 64px;*/
    filter: var(--effect);
    transform: translateY(-12px);
  }

  .im-cell > a > img {
    height: fit-content;
    width: 100%;
    border-radius: 32px 32px 0 0;
    transition: all 0.25s;
    margin-bottom: 16px;
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

  .im-cell > a:active {
    filter: var(--effect);
  }
}
</style>