<script setup>

</script>

<template>
  <div class="wBgBox">
    <slot>
    </slot>
  </div>
</template>

<style>

.wBgBox {
  background: color-mix(in srgb, transparent var(--alpha), var(--color2));
  height: 180px;
  width: 376px;
  border-radius: var(--radius-small);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: var(--switch);
}

.wBgBox:hover {
  background: color-mix(in srgb, transparent var(--alpha), var(--color4));
  scale: 1.05;
}

.wBgBox:active {
  scale: 0.95;
}

.wBgBox > * {
  margin: 0;
}

.wBgBox > img {
  height: 100%;
  width: 100%;
  transition: var(--switch);
  border-radius: var(--radius-small);
}

</style>