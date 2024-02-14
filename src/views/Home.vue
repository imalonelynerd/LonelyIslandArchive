<script setup>
import nestedPath from "@/assets/json/nestedPath.json";
import WideButton from "@/components/WideButton.vue";
</script>

<template>
  <div class="title-cluster">
    <div class="image" />
    <h1>Happy new year !</h1>
    <p>I'm Nerd</p>
    <div>
      <WideButton :imgLink="nestedPath.path + 'icons/me.png'"
                  shownTitle="About me"
                  @update:buttonClicked="$router.push(nestedPath.path + 'about')"/>
      <WideButton :imgLink="nestedPath.path + 'icons/projects.png'"
                  shownTitle="See my work"
                  @update:buttonClicked="$router.push(nestedPath.path + 'projects')"/>
      <WideButton :imgLink="nestedPath.path + 'icons/private.png'"
                  shownTitle="See hosted services"
                  @update:buttonClicked="$router.push(nestedPath.path + 'private')"/>
    </div>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .title-cluster {
    animation: Hewwo ease-out 0.75s;
    background: var(--bg-img) center top no-repeat;
    background-size: cover;
    position: absolute;
    top: 86px;
    right: 32px;
    bottom: 40px;
    left: 32px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: var(--med-gap);
    border-radius: var(--widget-radius);
    box-shadow: var(--pebble), var(--shadow);
  }

  .title-cluster > * {
    margin: 0;
  }

  .title-cluster > *:last-child {
    margin-top: var(--small-gap);
  }

  .title-cluster > p {
    margin-top: -16px;
  }

  .title-cluster > div {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--med-gap);
  }

  .image {
    height: 225px;
    width: 225px;
    border-radius: var(--widget-radius);
    box-shadow: var(--pebble), var(--shadow);
    background: url("/images/fey-pebble.png");
    background-size: cover;
  }

  .title-cluster > div > * {
    min-width: 200px;
  }

  .title-cluster > div > *:nth-child(1):hover {
    transform: translateX(-16px);
  }

  .title-cluster > div > *:nth-child(2):hover {
    transform: translateY(-16px);
  }

  .title-cluster > div > *:nth-child(3):hover {
    transform: translateX(16px);
  }
}

@media screen and (orientation: portrait) {
  .title-cluster {
    animation: Hewwo ease-out 0.75s;
    background: var(--bg-img) center top no-repeat;
    text-align: center;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 4vw;
    position: absolute;
    top: 24vw;
    bottom: 12vw;
    right: 4vw;
    left: 4vw;
    border-radius: var(--widget-radius);
    box-shadow: var(--pebble), var(--shadow);
  }

  .image {
    height: 40vw;
    width: 40vw;
    border-radius: var(--widget-radius);
    box-shadow: var(--pebble), var(--shadow);
    background: url("/images/fey-pebble.png");
    background-size: cover;
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
