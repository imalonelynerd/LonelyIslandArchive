<script setup>
import nestedPath from "@/assets/json/nestedPath.json";
import WideButton from "@/components/WideButton.vue";
</script>

<template>
  <div class="title-cluster">
    <img id="icon" src="/images/fey.webp">
    <h1>Hello there !</h1>
    <p>I'm Nerd</p>
    <div>
      <WideButton :imgLink="nestedPath.path + 'icons/me.webp'"
                  shownTitle="About me"
                  @update:buttonClicked="$router.push(nestedPath.path + 'about')"/>
      <WideButton :imgLink="nestedPath.path + 'icons/projects.webp'"
                  shownTitle="See my work"
                  @update:buttonClicked="$router.push(nestedPath.path + 'projects')"/>
      <WideButton :imgLink="nestedPath.path + 'icons/private.webp'"
                  shownTitle="See hosted services"
                  @update:buttonClicked="$router.push(nestedPath.path + 'private')"/>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (orientation: landscape) {
  .title-cluster {
    animation: HewwoRev ease-out 0.75s;
    position: absolute;
    top: 16px;
    right: 0;
    bottom: 0;
    left: 0;
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

  .title-cluster > *:last-child {
    margin-top: 16px;
  }

  .title-cluster > img {
    height: 256px;
    /*filter: var(--icon-imp);*/
  }

  .title-cluster > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
  }

  .title-cluster > div > * {
    min-width: 156px;
  }

  .title-cluster > div > *:nth-child(1):hover {
    transform: translateX(-16px);
  }

  .title-cluster > div > *:nth-child(2):hover {
    transform: translateY(16px);
  }

  .title-cluster > div > *:nth-child(3):hover {
    transform: translateX(16px);
  }
}

@media only screen and (orientation: portrait) {
  .title-cluster {
    animation: HewwoRev ease-out 0.75s;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4vw;
    position: absolute;
    top: 0;
    bottom: 8vw;
    left: 0;
    right: 0;
  }

  .title-cluster > img {
    height: 40vw;
  }

  .title-cluster > * {
    margin: 0;
  }

  .title-cluster > *:last-child {
    margin-top: 4vw;
  }

  .title-cluster > div {
    display: flex;
    flex-direction: column;
    align-items: stretch;
    justify-content: center;
    gap: 4vw;
  }
}
</style>
