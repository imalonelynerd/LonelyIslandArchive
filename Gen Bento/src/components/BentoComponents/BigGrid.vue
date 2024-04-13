<script setup>

</script>

<template>
  <div class="bigGrid">
    <slot>
    </slot>
  </div>
</template>

<style>

.bigGrid {
  height: 180px;
  width: 180px;
  border-radius: var(--radius-small);
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-auto-rows: 1fr;
  justify-content: stretch;
  align-items: stretch;
  gap: 16px;
}

.bigGrid > div {
  background: color-mix(in srgb, transparent var(--alpha), var(--color2));
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-small);
  transition: var(--switch);
}

.bigGrid > div:hover {
  background: color-mix(in srgb, transparent var(--alpha), var(--color4));
  scale: 1.1;
}

.bigGrid > div:active {
  scale: 0.9;
}


.bigGrid > div > img {
  height: 32px;
  filter: var(--filter);
}

</style>