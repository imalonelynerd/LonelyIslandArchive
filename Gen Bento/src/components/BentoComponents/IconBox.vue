<script setup>

</script>

<template>
  <div class="iconBox">
    <slot>
    </slot>
  </div>
</template>

<style>

.iconBox {
  background: color-mix(in srgb, transparent var(--alpha), var(--color2));
  height: 148px;
  width: 148px;
  padding: 16px;
  border-radius: var(--radius-small);
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  gap: 8px;
  transition: var(--switch);
}

.iconBox:hover {
  background: color-mix(in srgb, transparent var(--alpha), var(--color4));
  scale: 1.05;
}

.iconBox:active {
  scale: 0.95;
}

.iconBox > * {
  margin: 0;
}

.iconBox > img {
  height: 32px;
  margin-bottom: 4px;
}

.iconBox > p > b {
  font-size: var(--font-medium);
  font-weight: 900;
}

.iconBox > p > i {
  font-size: var(--font-regular);
  font-style: normal;
  font-weight: 900;
}

.iconBox > p {
  font-size: var(--font-regular);
  font-weight: 400;
  color: color-mix(in srgb, var(--text), transparent 33%);
}

</style>