<script setup>
defineProps([
  "onClick",
  "imgLink",
  "shownTitle",
  "hrefLink",
  "routerLink"
])
</script>

<template>
  <a @click="onClick" :href="hrefLink" v-if="hrefLink !== 'route'">
    <img :src="imgLink" :alt="imgLink">
    <p>{{ shownTitle }}</p>
  </a>
  <router-link :to="routerLink" v-if="hrefLink === 'route'">
    <img :src="imgLink" :alt="imgLink">
    <p>{{ shownTitle }}</p>
  </router-link>
</template>

<style scoped>

@media only screen and (orientation: landscape) {
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 16px;
    padding: 16px 32px;
    background: none;
    animation: all 0.25s;
    cursor: pointer;
  }

  a:hover {
    background: var(--bg);
    filter: var(--effect);
  }

  a > img {
    height: 32px;
    margin-right: 16px;
    filter: var(--icon);
  }

  a > p {
    margin: 0;
    font-weight: bold;
  }
}


@media only screen and (orientation: portrait) {
  a {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    border-radius: 6vh;
    padding: 2vh 3vh;
    background: none;
    animation: all 0.25s;
    cursor: pointer;
  }

  a:active {
    background: var(--bg);
    filter: var(--effect);
  }

  a > img {
    height: 2vh;
    margin-right: 1vh;
    filter: var(--icon);
  }

  a > p {
    font-size: 2vh;
    margin: 0;
    font-weight: bold;
  }
}

</style>