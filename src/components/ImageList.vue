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
    justify-content: space-between;
    align-items: center;
    padding: 0 0 32px;
    background: var(--widget);;
    border-radius: 24px;
    text-align: center;
    transition: all 0.25s;
  }

  .im-cell > a:hover {
    filter: var(--effect);
  }

  .im-cell > a > img {
    height: fit-content;
    width: 100%;
    border-radius: 24px;
  }

  .im-cell > a > h2 {
    font-size: 1.15em;
  }

  .im-cell > a > * {
    margin: 0;
  }

  .im-cell > a > *:not(:last-child){
    margin-bottom: 16px;
  }
}

@media only screen and (orientation: portrait) {
  .im-cell {
    width: 90%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: stretch;
  }

  .im-cell > *:not(:last-of-type) {
    margin-bottom: 1.5vh;
  }

  .im-cell > a {
    display: flex;
    flex-direction: column;
    justify-content: space-between; /*start ?*/
    align-items: center;
    padding: 0 0 3vh;
    background: var(--widget);;
    border-radius: 3vh;
    text-align: center;
    transition: all 0.25s;
  }

  .im-cell > a > img {
    height: fit-content;
    width: 100%;
    border-radius: 3vh;
  }

  .im-cell > a > h2 {
    margin: 1vh 0 0 0;
  }

  .im-cell > a > * {
    margin: 0;
  }

  .im-cell > a > *:not(:last-child){
    margin-bottom: 1.5vh;
  }

  .im-cell > a:active {
    filter: var(--effect);
  }
}
</style>