<script setup>

import nestedPath from "@/assets/json/nestedPath.json";
import WideButton from "@/components/WideButton.vue";
import {changeLoc} from "@/assets/js/menuUtils";
</script>

<template>
  <div class="title-cluster">
    <img id="icon" src="/images/icon-alt.png">
    <h1>Lonely Island</h1>
    <p>Welcome back...</p>
    <div>
      <WideButton @update:buttonClicked="changeLoc('https://imalonelynerd.fr/yunohost/sso/')"
                  :imgLink="nestedPath.path + 'icons/top/login.png'"
                  shownTitle="Log in"
                  is-important="true"/>
      <WideButton @update:buttonClicked="$router.push(nestedPath.path)"
                  :hrefLink="nestedPath.path"
                  :imgLink="nestedPath.path + 'icons/top/public.png'"
                  shownTitle="See my portfolio"/>
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
    filter: var(--icon-imp);
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
  }

  .title-cluster > img {
    height: 20vh;
    filter: var(--icon-imp);
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