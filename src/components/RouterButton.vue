<script setup>
defineProps([
  "hrefLink",
  "imgLink",
  "shownTitle",
  "isImportant"
])
</script>

<template>
  <router-link class="rlink" :to="hrefLink" :class="{ important : isImportant }">
    <img :src="imgLink" :alt="imgLink">
    <p v-show="shownTitle !== ''">{{ shownTitle }}</p>
  </router-link>
</template>

<style scoped>
.rlink {
  margin: 0;
  padding: 16px 24px;
  border-radius: 999px;
  font-size: 1em;
  font-weight: bold;
  background: var(--widget);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  max-width: 200px;
  transition: all 0.25s;
  filter: var(--shadow);
}

.rlink:hover {
  max-width: 150px;
  filter: var(--effect);
}

.rlink > img {
  height: 1.25em;
  filter: var(--icon);
}

.rlink > p {
  margin: 0;
  padding: 0;
  text-overflow: fade;
  text-wrap: none;
  max-width: 0;
  overflow: hidden;
  transition: all 0.25s;
}

.rlink:hover > p {
  max-width: 999px;
  margin: 0 0 0 12px;
  transition: all 0.25s;
}
</style>