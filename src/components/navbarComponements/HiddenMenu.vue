<script setup>

defineEmits(["update:menuHidden"])
</script>

<template>
  <div class="bg" @click="$emit('update:menuHidden')"/>
  <div class="menu">
    <slot>
    </slot>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: color-mix(in srgb, var(--widget), transparent 50%);
    z-index: 9;
    animation: Background ease-out 0.5s;
  }

  .menu {
    position: fixed;
    bottom: 0;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    background: var(--bg);
    width: 800px;
    border-radius: var(--widget-radius) var(--widget-radius) 0 0;
    animation: Menu ease-out 0.5s;
    box-shadow: var(--shadow), var(--pebble);
  }
}

@media screen and (orientation: portrait) {
  .bg {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: color-mix(in srgb, var(--widget), transparent 50%);
    z-index: 9;
    animation: Background ease-out 0.5s;
  }

  .menu {
    position: fixed;
    bottom: 0;
    left: 2vw;
    right: 2vw;
    z-index: 10;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: center;
    background: var(--bg);
    border-radius: var(--widget-radius) var(--widget-radius) 0 0;
    animation: MobileMenu ease-out 0.5s;
    box-shadow: var(--shadow), var(--pebble);
  }
}

</style>