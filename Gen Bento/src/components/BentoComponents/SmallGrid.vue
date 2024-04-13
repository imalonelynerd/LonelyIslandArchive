<script setup>

</script>

<template>
  <div class="smallGrid">
    <div class="smallGridText">
      <slot name="title">
      </slot>
    </div>
    <slot>
    </slot>
  </div>
</template>

<style>

.smallGrid {
  height: 180px;
  width: 180px;
  border-radius: var(--radius-small);
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-auto-rows: 1fr;
  justify-content: stretch;
  align-items: stretch;
  gap: 10px;
}

.smallGrid > div {
  background: color-mix(in srgb, transparent var(--alpha), var(--color2));

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  border-radius: var(--radius-inf);
  transition: var(--switch);
}

.smallGrid > div:hover {
  background: color-mix(in srgb, transparent var(--alpha), var(--color4));
  scale: 1.1;
}

.smallGrid > div:active {
  scale: 0.9;
}

.smallGrid > div > img {
  height: 20px;
  filter: var(--filter);
}

.smallGridText {
  grid-column-start: 1;
  grid-column-end: 3;
  grid-row-start: 1;
  grid-row-end: 3;
  padding: 16px;
  border-radius: var(--radius-small) !important;
}

.smallGridText > p > b {
  font-size: var(--font-medium);
  font-weight: 900;
}

.smallGridText > p > i {
  font-size: var(--font-regular);
  font-style: normal;
  font-weight: 900;
}

.smallGridText > p {
  font-size: var(--font-regular);
  font-weight: 400;
  color: color-mix(in srgb, var(--text), transparent 33%);
}

</style>