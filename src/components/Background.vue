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
    filter: blur(2px);
    margin: 0;
    background: linear-gradient(180deg, transparent 25%, var(--bg) 100%), var(--bg-img) center top no-repeat;
    background-size: cover;
    z-index: -5;
    position: fixed;
    left: -5vw;
    right: -5vw;
    top: -1vw;
    height: 0;
    width: 110vw;
    animation: HewwoBg ease-out 1s;
    transition: all 0.5s;
  }

  .bg.isfull {
    height: 105vh;
    animation: HewwoBg ease-out 1s;
  }
}

@media only screen and (orientation: portrait) {
  .bg {
    filter: blur(1vw);
    opacity: 0;
    margin: 0;
    background: var(--bg-img) center top no-repeat;
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