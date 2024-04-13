<script setup>

defineProps([
  'title', 'sectNb'
])

</script>

<template>
  <div class="bento-container">
    <h2 v-if="title !== undefined && title !== ''">{{ title }}</h2>
    <div v-for="i in sectNb" class="bento" :key="i">
      <slot :name="i === 1 ? 'default' :  i">
      </slot>
    </div>
  </div>
</template>

<style>
.bento-container {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 64px;
}

.bento-container > h2 {
  color: var(--imp);
  font-size: var(--font-big);
  font-weight: 900;
  width: 768px;
  margin: 0;
}

.bento {
  width: 768px;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  gap: 16px;
}
</style>