<script setup>
defineProps([
  "imgLink",
  "shownTitle",
])
</script>

<template>
  <div class="small">
    <img :src="imgLink">
    <p v-show="shownTitle !== ''">{{ shownTitle }}</p>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .small {
    margin: 0;
    padding: 8px 16px;
    border-radius: var(--button-radius);
    font-size: 1em;
    background: var(--widget);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: default;
    transition: var(--transition);
    box-shadow: var(--pebble), var(--shadow);
  }

  .small > img {
    height: 1em;
    filter: var(--icon);
  }

  .small > p {
    margin: 0 0 0 8px;
    padding: 0;
    font-weight: bold;
    opacity: 0.9;
    transition: var(--transition);
  }
}

@media screen and (orientation: portrait) {
  .small {
    margin: 0;
    padding: 2vw 4vw;
    border-radius: var(--button-radius);
    font-size: 1em;
    background: var(--widget);
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    cursor: default;
    transition: var(--transition);
    box-shadow: var(--pebble), var(--shadow);
  }

  .small > img {
    height: 1em;
    filter: var(--icon);
  }

  .small > p {
    margin: 0 0 0 1.5vw;
    padding: 0;
    font-weight: bold;
    transition: var(--transition);
  }
}

</style>