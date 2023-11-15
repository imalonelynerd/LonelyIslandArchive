<script setup>

const props = defineProps([
  "cellList"
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

  .im-cell > a:hover {
    transform: translateY(-12px);
    filter: var(--effect);
  }

  .im-cell > a > * {
    margin: 0;
  }

  .im-cell > a > img {
    height: 64px;
  }

  .im-cell > a > h2 {
    font-size: 1.15em;
    margin: 0;
  }
}

@media only screen and (orientation: portrait) {
  .im-cell {
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }

  .im-cell > *:not(:last-of-type) {
    margin-bottom: 4vw;
  }

  .im-cell > a {
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

  .im-cell > a > * {
    margin: 0;
  }

  .im-cell > a > img {
    height: 12vw;
  }

  .im-cell > a:active {
    filter: var(--effect);
  }
}
</style>