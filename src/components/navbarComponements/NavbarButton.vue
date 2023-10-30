<script setup>
defineProps([
  "hrefLink",
  "imgLink",
  "shownTitle",
  "isImportant",
])

defineEmits([
  "update:buttonClicked"
])
</script>

<template>
  <a :class="{ important : isImportant, noimage : imgLink === '' }" class="link" @click="$emit('update:buttonClicked')">
    <img :src="imgLink">
    <p v-show="shownTitle !== ''">{{ shownTitle }}</p>
  </a>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .link {
    margin: 0;
    padding: 16px;
    border-radius: 64px;
    font-size: 1em;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    max-width: 200px;
    transition: all 0.25s;
  }

  .link:hover {
    transform: translateY(8px);
    max-width: 150px;
    padding: 16px 24px;
    filter: var(--effect);
  }

  .link > img {
    filter: var(--icon);
    height: 1.25em;
  }

  .link > p {
    margin: 0;
    padding: 0;
    text-overflow: fade;
    white-space: nowrap;
    text-wrap: none;
    max-width: 0;
    overflow: hidden;
    transition: all 0.25s;
  }

  .link:hover > p {
    max-width: 999px;
    margin: 0 0 0 12px;
    transition: all 0.25s;
    opacity: 1;
  }

  .link.important {
    padding: 16px 24px;
    background: var(--important);
  }

  .link.important:hover {
    background: var(--important);
    filter: none;
  }

  .link.important > img {
    filter: var(--icon-imp);
  }

  .link.noimage {
    max-width: none;
  }

  .link.noimage > img {
    display: none;
  }

  .link.noimage > p {
    margin: 0;
    max-width: none;
  }

  .link.noimage:hover {
    margin: 0;
    background: var(--widget);
    max-width: none;
  }
}

@media screen and (orientation: portrait) {
  .link {
    margin: 0;
    padding: 4vw 4vw;
    border-radius: 12vw;
    font-size: 1em;
    font-weight: bold;
    background: var(--widget);
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    transition: all 0.25s;
  }

  .link:active {
    filter: var(--effect);
  }

  .link > img {
    height: 1.5em;
    filter: var(--icon);
  }

  .link > p {
    display: none;
  }

  .link.important {
    background: var(--important);
  }

  .link.important > img {
    filter: var(--icon-imp);
  }
}
</style>