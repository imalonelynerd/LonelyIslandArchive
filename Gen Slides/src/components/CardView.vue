<script setup>
defineProps(['color1', 'color2'])
</script>

<template>
  <div class="CardView">
    <slot></slot>
  </div>
</template>

<style>
.CardView {
  border-radius: var(--radius-big);
  box-sizing: border-box;
  width: 1200px;
  min-height: 700px;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: stretch;
  gap: 32px;

  background: linear-gradient(v-bind(color1), v-bind(color2));
  box-shadow: 0 0 64px color-mix(in srgb, v-bind(color1), transparent 50%);
  padding: 32px;
}
</style>