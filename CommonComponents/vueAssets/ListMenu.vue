<script setup>
defineProps(['hasTitle'])
</script>

<template>
  <div class="list-container">
    <slot name="title" v-if="hasTitle">
    </slot>
    <div class="list-content">
      <slot>

      </slot>
    </div>
  </div>
</template>

<style>
.list-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: stretch;
  gap: 32px;
}

.list-container > p {
  font-weight: 900;
  opacity: 0.75;
  font-size: var(--font-regular);
  margin: 0;
  text-align: left;
}

.list-content {
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  justify-content: stretch;
  gap: 16px;
}

</style>
