<script setup>
defineProps([
  'color', 'start', 'end'
])
</script>

<template>
  <div class="prjBox">
    <slot>
    </slot>
  </div>
</template>

<style>

.prjBox {
  background: color-mix(in srgb, transparent var(--alpha), v-bind(color));

  height: 132px;
  width: 328px;
  grid-column-start: v-bind(start);
  grid-column-end: v-bind(end);
  border-radius: var(--radius-small);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  gap: 8px;
  transition: var(--switch);
}

.prjBox:hover {
  background: color-mix(in srgb, transparent var(--alpha), var(--color4));
  scale: 1.05;
}

.prjBox:active {
  scale: 0.95;
}

.prjBox * {
  margin: 0;
  color: var(--imp);
}

.prjBox > img {
  width: 48px;
  margin-bottom: 4px;
}

.prjBox > p > b {
  font-size: var(--font-medium);
  font-weight: 900;
}

.prjBox > p > i {
  font-size: var(--font-regular);
  font-style: normal;
  font-weight: 900;
}

.prjBox > p {
  font-size: var(--font-regular);
  font-weight: 400;
}

</style>