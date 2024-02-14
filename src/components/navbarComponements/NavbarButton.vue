<script setup>
defineProps([
  "hrefLink",
  "imgLink",
  "shownTitle",
  "isImportant",
  "isTransparent"
])

defineEmits([
  "update:buttonClicked"
])
</script>

<template>
  <a :class="{ 'important' : isImportant, 'noimage' : imgLink === '', 'transparent' : isTransparent }" class="link"
     @click="$emit('update:buttonClicked')">
    <img :src="imgLink">
    <p v-show="shownTitle !== ''">{{ shownTitle }}</p>
  </a>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .link {
    margin: 0;
    padding: 16px;
    border-radius: var(--button-radius);
    font-size: 1em;
    font-weight: bold;
    display: flex;
    align-items: center;
    justify-content: center;
    cursor: pointer;
    max-width: 200px;
    transition: var(--transition);
  }

  .link:hover {
    transform: translateY(8px);
    max-width: 150px;
    box-shadow: var(--shadow), var(--pebble);
    padding: 16px 24px;
  }

  .link > img {
    /*filter: var(--icon);*/
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
    transition: var(--transition);
  }

  .link:hover > p {
    max-width: 999px;
    margin: 0 0 0 12px;
    transition: var(--transition);
    opacity: 1;
  }

  .link.important {
    background: var(--important);
    box-shadow: var(--shadow), var(--pebble);
    padding: 16px 24px;
  }

  .link.important:hover {
    filter: var(--effect);
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

  .link.transparent {
    padding: 16px 24px;
    background: transparent;
  }

  .link.transparent:hover {
    background: var(--widget);
  }
}

@media screen and (orientation: portrait) {
  .link {
    margin: 0;
    padding: 4vw 4vw;
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
  }

  .link:active {
    filter: var(--effect);
  }

  .link > img {
    height: 1.5em;
    /*filter: var(--icon);*/
  }

  .link > p {
    display: none;
  }

  .link.important {
    background: var(--important);
  }
}
</style>