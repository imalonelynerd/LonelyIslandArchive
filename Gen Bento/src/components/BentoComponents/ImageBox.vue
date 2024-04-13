<script setup>

</script>

<template>
  <div class="imgBox">
    <slot>
    </slot>
  </div>
</template>

<style>

.imgBox {
  background: color-mix(in srgb, transparent var(--alpha), var(--color2));
  height: 164px;
  width: 180px;
  padding: 0 0 16px;
  border-radius: var(--radius-small);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  gap: 8px;
  transition: var(--switch);
}

.imgBox:hover {
  background: color-mix(in srgb, transparent var(--alpha), var(--color4));
  scale: 1.05;
}

.imgBox:active {
  scale: 0.95;
}

.imgBox > * {
  margin: 0;
}

.imgBox > img {
  min-height: 1px;
  max-height: 108px;
  width: 100%;
  padding: 0;
  margin-bottom: 4px;
  border-radius: var(--radius-small) var(--radius-small) 0 0;
}

.imgBox > p > b {
  font-size: var(--font-medium);
  font-weight: 900;
}

.imgBox > p > i {
  font-size: var(--font-regular);
  font-style: normal;
  font-weight: 900;
}

.imgBox > p {
  padding: 0 16px;
  font-size: var(--font-regular);
  font-weight: 400;
  color: color-mix(in srgb, var(--text), transparent 33%);
}

</style>