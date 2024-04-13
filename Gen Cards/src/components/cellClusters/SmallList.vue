<script setup>

defineProps([
  "cellList"
])

</script>

<template>
  <div class="small-cell">
    <a v-for="elem in cellList" :title="elem.span" @click="elem.onc">
      <img :src="elem.img">
      <h2>{{ elem.title }}</h2>
      <p v-if="elem.span !== ''">{{ elem.span }}</p>
      <!--p>{{ elem.span === "" ? "> " + elem.title:elem.span }}</p-->
    </a>
  </div>

</template>

<style scoped>
@media screen and (orientation: landscape) {
  .small-cell {
    width: 90%;
    display: flex !important;
    flex-direction: row;
    flex-wrap: wrap;
    align-items: center;
    justify-content: start;
    gap: var(--small-gap);
  }

  .small-cell > a {
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 16px 32px;
    background: var(--widget);
    border-radius: var(--widget-radius);
    transition: var(--transition);
    gap: var(--text-gap);
    box-shadow: var(--shadow), var(--pebble);
  }

  .small-cell > a > * {
    margin: 0;
  }

  .small-cell > a:hover {
    transform: translateY(-12px);
    filter: var(--effect);
  }

  .small-cell > a > img {
    height: 1.5em;
    margin-right: 8px;
    /*filter: var(--icon);*/
  }

  .small-cell > a > h2 {
    font-size: 1em;
  }

  .small-cell > a > p {
    font-size: 0.75em;
    opacity: 0.5;
  }
}

@media screen and (orientation: portrait) {
  .small-cell {
    width: 85%;
    display: grid !important;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    align-items: center;
    justify-content: start;
    gap: 4vw;
  }

  .small-cell > a {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 6vw 0;
    background: var(--widget);
    border-radius: var(--widget-radius);
    transition: var(--transition);
    gap: 2vw;
    box-shadow: var(--shadow), var(--pebble);
  }

  .small-cell > a > * {
    margin: 0;
  }

  .small-cell > a:active {
    filter: var(--effect);
  }

  .small-cell > a > img {
    height: 2em;
    /*filter: var(--icon);*/
  }

  .small-cell > a > h2 {
    font-size: 1em;
    max-width: 25vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  .small-cell > a > p {
    font-size: 0.75em;
    opacity: 0.5;
    max-width: 25vw;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
}
</style>