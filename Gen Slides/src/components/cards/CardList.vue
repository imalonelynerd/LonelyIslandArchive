<script setup>
const props = defineProps(["rows"]);

const fRows = props.rows === undefined ? 3 : props.rows;
</script>

<template>
  <div class="CardList">
    <slot></slot>
  </div>
</template>

<style scoped>
.CardList {
  border-radius: var(--radius-small);
  max-width: 1200px;
  display: flex; /*TODO*/
  grid-auto-rows: 1fr;
  grid-template-columns: repeat(v-bind(fRows), 1fr);
  justify-content: start;
  align-items: stretch;
  gap: 16px;
}
</style>