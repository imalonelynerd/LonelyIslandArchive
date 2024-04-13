<script setup>

defineProps([
  "cellList",
])

</script>

<template>
  <div class="im-cell">
    <a v-for="elem in cellList"
       @click="elem.onc"
       :style="`background : linear-gradient(var(--dark-filter) 0%, var(--dark-filter) 100%), linear-gradient(135deg, ${elem.colora} 0%, ${elem.colorb} 100%) !important`"
    >
      <img :src="elem.img">
      <div>
        <h2>{{ elem.title }}</h2>
        <p v-html="elem.desc"></p>
        <code v-if="elem.code !== ''">{{ elem.code }}</code>
      </div>
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
    gap: var(--med-gap);
    border-radius: var(--widget-radius);
  }

  .im-cell > a {
    min-width: 400px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
    padding: 24px 32px;
    background: var(--widget);
    border-radius: var(--widget-radius);
    text-align: center;
    gap: var(--med-gap);
    transition: var(--transition);
    box-shadow: var(--shadow), var(--pebble);
  }

  .im-cell > a:hover {
    filter: var(--effect);
    transform: translateY(-12px);
  }

  .im-cell > a > img {
    height: 50%;
    transition: var(--transition);
    margin-bottom: 16px;
  }

  .im-cell > a * {
    margin: 0;
  }

  .im-cell > a > div {
    width: 250px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: var(--small-gap);
  }

  .im-cell > a > div > h2 {
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
    padding: 6vw;
    background: var(--widget);
    border-radius: var(--widget-radius);
    text-align: center;
    transition: var(--transition);
    gap: 4vw;
    box-shadow: var(--shadow), var(--pebble);
  }

  .im-cell > a * {
    margin: 0;
  }

  .im-cell > a > img {
    height: 16vw;
  }

  .im-cell > a:active {
    filter: var(--effect);
  }
}
</style>