<script setup>

defineProps([
  "isFull"
])

</script>

<template>
  <div :class="{ 'isfull' : isFull }" class="bg"></div>
</template>

<style scoped>
@media only screen and (orientation: landscape) {
  .bg {
    margin: 0;
    background: linear-gradient(-180deg, transparent, var(--bg)), var(--bg-img) center top no-repeat;
    background-size: cover;
    z-index: -5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 0;
    animation: HewwoBg ease-out 1s;
    transition: all 0.25s;
  }

  .bg.isfull {
    margin: 0;
    background: linear-gradient(-180deg, transparent 50%, var(--bg) 100%), var(--bg-img) center top no-repeat;
    background-size: cover;
    z-index: -5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    animation: HewwoBg ease-out 1s;
    transition: all 0.25s;
  }
}

@media only screen and (orientation: portrait) {
  .bg {
    opacity: 0;
    margin: 0;
    background: linear-gradient(-180deg, transparent, var(--bg)), var(--bg-img) center top no-repeat;
    background-size: cover;
    z-index: -5;
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    width: 100vw;
    height: 100vh;
    animation: HewwoBg ease-out 1s;
    transition: all 0.75s;
  }

  .bg.isfull {
    opacity: 1;
  }
}
</style>