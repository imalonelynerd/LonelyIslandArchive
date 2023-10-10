<script setup></script>

<template>
  <div class="bg" id="bg"></div>
</template>

<style scoped>
@media only screen and (orientation: landscape) {
  .bg {
    margin: 0;
    background: linear-gradient(180deg, transparent, var(--bg)), var(--bg-img) center center no-repeat;
    background-size: cover;
    z-index: -5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    animation: HewwoBg ease-out 1s;
  }
}

@media only screen and (orientation: portrait) {
  .bg {
    background: linear-gradient(180deg, #0000, var(--bg)), var(--bg-img) center center no-repeat;
    margin: 0 !important;
    background-size: cover;
    z-index: -5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 60vh;
    border-radius: 0;
    animation: HewwoBg ease-out 1s;
  }
}
</style>