<script setup>
defineProps([
  'color'
])
</script>

<template>
  <div class="colBox">
    <slot>
    </slot>
  </div>
</template>

<style>

.colBox {
  background: color-mix(in srgb, transparent var(--alpha), v-bind(color));
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

.colBox:hover {
  background: color-mix(in srgb, transparent var(--alpha), var(--color4));
  scale: 1.05;
}

.colBox:active {
  scale: 0.95;
}

.colBox * {
  margin: 0;
  color: var(--imp);
}

.colBox > img {
  height: 32px;
  margin-bottom: 4px;
}

.colBox > p > b {
  font-size: var(--font-medium);
  font-weight: 900;
}

.colBox > p > i {
  font-size: var(--font-regular);
  font-style: normal;
  font-weight: 900;
}

.colBox > p {
  font-size: var(--font-small);
  font-weight: 400;
}

</style>