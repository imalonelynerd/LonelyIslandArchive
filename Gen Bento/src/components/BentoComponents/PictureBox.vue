<script setup>

</script>

<template>
  <div class="bgBox">
    <slot>
    </slot>
  </div>
</template>

<style>

.bgBox {
  background: color-mix(in srgb, transparent var(--alpha), var(--color2));

  height: 180px;
  width: 180px;
  border-radius: var(--radius-small);
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: var(--switch);
}

.bgBox:hover {
  background: color-mix(in srgb, transparent var(--alpha), var(--color4));
  scale: 1.05;
}

.bgBox:active {
  scale: 0.95;
}

.bgBox > * {
  margin: 0;
}

.bgBox > img {
  height: 100%;
  width: 100%;
  transition: var(--switch);
  object-fit: cover;
  border-radius: var(--radius-small);
}
</style>