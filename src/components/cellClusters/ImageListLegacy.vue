<script setup>

defineProps([
  "cellList",
])

</script>

<template>
  <div class="im-cell">
    <a v-for="elem in cellList" @click="elem.onc">
      <img :src="elem.img">
      <h2>{{ elem.title }}</h2>
      <p v-html="elem.desc"></p>
      <code v-if="elem.code !== ''">{{ elem.code }}</code>
    </a>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
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
    gap: var(--big-gap);
    border-radius: var(--widget-radius);
  }

  .im-cell > a {
    min-width: 400px;
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    padding: 0 0 32px;
    background: var(--widget);
    border-radius: var(--widget-radius);
    text-align: center;
    transition: var(--transition);
    gap: var(--small-gap);
    box-shadow: var(--shadow), var(--pebble);
  }

  .im-cell > a:hover {
    filter: var(--effect);
    transform: translateY(-12px);
  }

  .im-cell > a > img {
    height: fit-content;
    width: 100%;
    border-radius: var(--widget-radius) var(--widget-radius) 0 0;
    transition: var(--transition);
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

  .im-cell::-webkit-scrollbar-thumb {
    background: none;
  }
}

@media screen and (orientation: portrait) {
  .im-cell {
    width: 85%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
    gap: 4vw;
  }

  .im-cell > a {
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;
    padding: 0 0 6vw;
    background: var(--widget);
    border-radius: var(--widget-radius);
    text-align: center;
    transition: var(--transition);
    gap: 2vw;
    box-shadow: var(--shadow), var(--pebble);
  }

  .im-cell > a > * {
    margin: 0;
  }

  .im-cell > a > img {
    height: fit-content;
    width: 100%;
    border-radius: var(--widget-radius) var(--widget-radius) 0 0;
    margin-bottom: 3vw !important;
  }

  .im-cell > a:active {
    filter: var(--effect);
  }
}
</style>