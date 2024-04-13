<script setup>

</script>

<template>
  <div class="wideBox">
    <slot>
    </slot>
  </div>
</template>

<style>

.wideBox {
  background: color-mix(in srgb, transparent var(--alpha), var(--color2));
  height: 148px;
  width: 344px;
  padding: 16px;
  border-radius: var(--radius-small);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  gap: 8px;
  transition: var(--switch);
}

.wideBox:hover {
  background: color-mix(in srgb, transparent var(--alpha), var(--color4));
  scale: 1.05;
}

.wideBox:active {
  scale: 0.95;
}

.wideBox > * {
  margin: 0;
}

.wideBox > img {
  height: 32px;
  margin-bottom: 4px;
}

.wideBox > p > b {
  font-size: var(--font-medium);
  font-weight: 900;
}

.wideBox > p > i {
  font-size: var(--font-regular);
  font-style: normal;
  font-weight: 900;
}

.wideBox > p {
  font-size: var(--font-regular);
  font-weight: 400;
  color: color-mix(in srgb, var(--text), transparent 33%);
}

</style>