<script setup>
defineProps([
  "imgLink",
  "shownTitle",
  "isImportant"
])

defineEmits(['update:buttonClicked']);
</script>

<template>
  <a :class="{ important : isImportant }" class="wlink" @click="$emit('update:buttonClicked')">
    <img v-if="imgLink" :src="imgLink">
    <p v-show="shownTitle !== ''">{{ shownTitle }}</p>
  </a>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .wlink {
    margin: 0;
    padding: 16px 24px;
    border-radius: var(--button-radius);
    font-size: 1em;
    font-weight: bold;
    background: var(--widget);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);
    box-shadow: var(--shadow), var(--pebble);
    gap: var(--small-gap);
  }

  .wlink:hover {
    transform: translateY(-12px);
    filter: var(--effect);
  }

  .wlink > img {
    height: 1.5em;
    /*filter: var(--icon);*/
  }

  .wlink > p {
    padding: 0;
    margin: 0;
    transition: var(--transition);
  }

  .wlink.important {
    background: var(--important);
  }
}

@media screen and (orientation: portrait) {
  .wlink {
    margin: 0;
    padding: 4vw 6vw;
    border-radius: var(--button-radius);
    font-size: 1em;
    font-weight: bold;
    background: var(--widget);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: var(--transition);
    box-shadow: var(--shadow), var(--pebble);
    gap: 2vw;
  }

  .wlink:active {
    filter: var(--effect);
  }

  .wlink > img {
    height: 1.25em;
    /*filter: var(--icon);*/
  }

  .wlink > p {
    padding: 0;
    margin: 0;
    transition: var(--transition);
  }

  .wlink.important {
    background: var(--important);
  }

}

</style>