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
    gap: 12px;
  }

  .wlink:hover {
    transform: translateY(-12px);
    filter: var(--effect);
  }

  .wlink > img {
    height: 1.25em;
    filter: var(--icon);
  }

  .wlink > p {
    padding: 0;
    margin: 0;
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
    padding: 4vw 6vw;
    border-radius: 8vw;
    font-size: 1em;
    font-weight: bold;
    background: var(--widget);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
    box-shadow: var(--shadow);
    gap: 12px;
  }

  .wlink:active {
    filter: var(--effect);
  }

  .wlink > img {
    height: 1.25em;
    filter: var(--icon);
  }

  .wlink > p {
    padding: 0;
    margin: 0;
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