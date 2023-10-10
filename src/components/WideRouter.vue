<script setup>
defineProps([
  "hrefLink",
  "imgLink",
  "shownTitle",
  "isImportant",
])
</script>

<template>
  <router-link class="wlink" :to="hrefLink" :class="{ important : isImportant }">
    <img :src="imgLink" :alt="imgLink">
    <p v-show="shownTitle !== ''">{{ shownTitle }}</p>
  </router-link>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .wlink {
    margin: 0;
    padding: 16px 24px;
    border-radius: 64px;
    font-size: 1em;
    font-weight: bold;
    background: var(--widget);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
    box-shadow: var(--shadow);
  }

  .wlink:hover {
    filter: var(--effect);
  }

  .wlink > img {
    height: 1.25em;
    filter: var(--icon);
  }

  .wlink > p {
    padding: 0;
    margin: 0 0 0 12px;
    transition: all 0.25s;
  }

  .wlink.important {
    background: var(--important);
  }

  .wlink.important > img {
    filter: var(--icon-imp)
  }
}

@media screen and (orientation: portrait) {
  .wlink {
    margin: 0;
    padding: 2vh 3vh;
    border-radius: 6vh;
    font-size: 1em;
    font-weight: bold;
    background: var(--widget);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
    box-shadow: var(--shadow);
  }

  .wlink:hover {
    filter: var(--effect);
  }

  .wlink > img {
    height: 1.25em;
    filter: var(--icon);
  }

  .wlink > p {
    padding: 0;
    margin: 0 0 0 2vh;
    transition: all 0.25s;
  }

  .wlink.important {
    background: var(--important);
  }

  .wlink.important > img {
    filter: var(--icon-imp)
  }
}
</style>