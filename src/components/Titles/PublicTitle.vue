<script setup>
import nestedPath from "@/assets/json/nestedPath.json";
import WideButton from "@/components/WideButton.vue";
import {changeLoc} from "@/assets/js/menuUtils";
</script>

<template>
  <div class="title-cluster">
    <img id="icon" src="/images/fey3.png">
    <h1>Hello there !</h1>
    <p>I'm Nerd</p>
    <div>
      <WideButton @update:buttonClicked="changeLoc('#projects')"
                  :imgLink="nestedPath.path + 'icons/top/projects.png'"
                  shownTitle="See my work"/>
      <WideButton @update:buttonClicked="$router.push(nestedPath.path + 'private')"
                  :imgLink="nestedPath.path + 'icons/top/private.png'"
                  shownTitle="See hosted services"/>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (orientation: landscape) {
  .title-cluster {
    width: 100vw;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 16px;
    animation: Hewwo ease-out 0.75s;
  }

  .title-cluster > * {
    margin: 0;
  }

  .title-cluster > *:first-child {
    margin-bottom: 32px;
  }

  .title-cluster > *:last-child {
    margin-top: 16px;
  }

  .title-cluster > img {
    height: 224px;
    /*filter: var(--icon-imp);*/
  }

  .title-cluster > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }
}

@media only screen and (orientation: portrait) {
  .title-cluster {
    width: 100%;
    height: 100vh;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 2vh;
    animation: Hewwo ease-out 0.75s;
  }

  .title-cluster > img {
    height: 20vh;
  }

  .title-cluster > * {
    margin: 0;
  }

  .title-cluster > *:first-child {
    margin-bottom: 3vh;
  }

  .title-cluster > *:last-child {
    margin-top: 2vh;
  }

  .title-cluster > div {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 2vh;
  }
}
</style>
