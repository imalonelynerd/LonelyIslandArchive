<script setup>
import {switchTheme} from "@/assets/js/themeMgmt";

defineEmits(['update:buttonClicked']);

switchTheme('comet')
</script>

<template>
  <a class="pbtn" @click="$emit('update:buttonClicked')">
    <img src="/icons/pretty.png"/>
    <p>Pretty Heroes</p>
  </a>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .pbtn {
    z-index: 20;
    position: fixed;
    bottom: 32px;
    right: 32px;
    padding: 24px 24px;
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
    animation: Hewwo ease-out 0.75s;
  }

  .pbtn:hover {
    filter: var(--effect);
  }

  .pbtn > img {
    height: 1.25em;
    /*filter: var(--icon);*/
  }

  .pbtn > p {
    padding: 0;
    margin: 0;
    transition: var(--transition);
  }
}

@media screen and (orientation: portrait) {
  .pbtn {
    z-index: 20;
    position: fixed;
    bottom: 20vw;
    right: 20vw;
    left: 20vw;
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
    gap: 2vw;
    animation: Hewwo ease-out 0.75s;
  }

  .pbtn:active {
    filter: var(--effect);
  }

  .pbtn > img {
    height: 1.25em;
    /*filter: var(--icon);*/
  }

  .pbtn > p {
    padding: 0;
    margin: 0;
    transition: var(--transition);
  }

  .pbtn.important {
    background: var(--important);
  }

  .pbtn.important > img {
    filter: var(--icon-imp)
  }
}

</style>