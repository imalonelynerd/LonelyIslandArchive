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

  .big-cell > a {
    min-width: 350px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 32px 16px;
    background: var(--widget);
    border-radius: 32px;
    text-align: center;
    transition: all 0.25s;
    gap: 16px;
    box-shadow: var(--shadow);
  }

  .big-cell > a:hover {
    transform: translateY(-12px);
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
    margin-bottom: 4vw;
  }

  .big-cell > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6vw 0;
    background: var(--widget);
    border-radius: 6vw;
    text-align: center;
    transition: all 0.25s;
    gap: 3vw;
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
    height: 8vw;
    filter: var(--icon);
  }

  .big-cell > a > div > h2 {
    margin: 2vw 0 0 0;
  }

  .big-cell > a:active {
    filter: var(--effect);
  }
}
</style>