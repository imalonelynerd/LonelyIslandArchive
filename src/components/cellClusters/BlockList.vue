<script setup>

defineProps([
  "cellList"
])

function getColor(color) {
  if (color === undefined || color === "") {
    return `background: var(--widget)`
  }
  return `background: color-mix(in srgb, var(--widget), ${color} 33%)`
}
</script>

<template>
  <div class="block-cell">
    <a v-for="elem in cellList"
       :style="getColor(elem.style)"
       :title="elem.span"
       @click="elem.onc">
      <img :src="elem.img">
      <h2>{{ elem.title }}</h2>
      <p>{{ elem.span }}</p>
    </a>
  </div>

</template>

<style scoped>
@media screen and (orientation: landscape) {
  .block-cell {
    width: 90%;
    display: flex !important;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: stretch;
    justify-content: start;
    gap: var(--small-gap);
  }

  .block-cell > a {
    width: 128px;
    height: 128px !important;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 16px;
    background: var(--widget);
    border-radius: var(--widget-radius);
    transition: var(--transition);
    gap: var(--text-gap);
    box-shadow: var(--shadow), var(--pebble);
  }

  .block-cell > a > * {
    text-align: center;
    margin: 0;
  }

  .block-cell > a:hover {
    transform: translateY(-12px);
    filter: var(--effect);
  }

  .block-cell > a > img {
    height: 36px;
  }

  .block-cell > a > h2 {
    font-size: 1em;
  }

  .block-cell > a > p {
    font-size: 0.75em;
    opacity: 0.5;
    max-width: 80%;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}

@media screen and (orientation: portrait) {
  .block-cell {
    width: 85%;
    display: grid !important;
    grid-template-columns: 1fr 1fr;
    grid-auto-rows: 1fr;
    align-items: stretch;
    justify-content: stretch;
    gap: 4vw;
  }

  .block-cell > a {
    height: 40vw;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: var(--widget);
    border-radius: var(--widget-radius);
    transition: var(--transition);
    gap: 2vw;
    box-shadow: var(--shadow), var(--pebble);
  }

  .block-cell > a > * {
    text-align: center;
    margin: 0;
  }

  .block-cell > a:active {
    filter: var(--effect);
  }

  .block-cell > a > img {
    height: 8vw;
  }

  .block-cell > a > h2 {
    font-size: 1em;
  }

  .block-cell > a > p {
    font-size: 1em;
    opacity: 0.5;
    max-width: 25vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>