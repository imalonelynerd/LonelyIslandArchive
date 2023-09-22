<script setup>

</script>

<template>
  <div class="bg"></div>
</template>

<style scoped>
  @media only screen and (orientation: landscape) {
    .bg {
      margin: 0;
      background: url('/images/bg.png') center center no-repeat;
      filter: var(--bg-effect);
      background-size: cover;
      z-index: -5;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100vw;
      height: 550px;
      border-radius: 0 0 64px 64px;
    }
  }

  @media only screen and (orientation: portrait) {
    .bg {
      margin: 0 !important;
      filter: var(--bg-effect);
      background: url('/images/bg2.png') center center no-repeat;
      background-size: cover;
      z-index: -5;
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      width: 100vw;
      height: 40vh;
      border-radius: 0;
    }
  }
</style>