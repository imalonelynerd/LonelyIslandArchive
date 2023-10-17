<script setup>

const props = defineProps([
  "cellList",
])

const cellListVar = props.cellList.links;
</script>

<template>
  <div class="im-cell">
    <a v-for="elem in cellListVar" @click="elem.onc"
       :style="`background: linear-gradient(180deg, transparent, var(--widget)), url('${elem.img}') no-repeat center center`">
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
    justify-content: start;
    align-items: center;
    padding: 24px 32px;
    background-size: cover;
    border-radius: 16px;
    text-align: center;
    transition: all 0.25s;
    gap: 16px;
    box-shadow: var(--shadow);
  }

  .im-cell > a:hover {
    filter: var(--effect);
  }

  .im-cell > *, .im-cell > a > * {
    margin: 0;
  }

  .im-cell > a > h2 {
    font-size: 1.20em;
  }
}

@media only screen and (orientation: portrait) {
  .im-cell {
    width: 90%;
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
    border-radius: 3vh 3vh 0 0;
    margin-bottom: 1.5vh !important;
  }

  .im-cell > a > h2 {
    margin: 1vh 0 0 0;
  }

  .im-cell > a:active {
    filter: var(--effect);
  }
}
</style>