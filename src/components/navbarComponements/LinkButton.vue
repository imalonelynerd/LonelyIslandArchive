<script setup>
defineProps([
  "hrefLink",
  "imgLink",
  "shownTitle",
  "isImportant",
])
</script>

<template>
  <a class="link" :href="hrefLink" :class="{ important : isImportant }">
    <img :src="imgLink" :alt="imgLink">
    <p v-show="shownTitle !== ''">{{ shownTitle }}</p>
  </a>
</template>

<style scoped>
.link {
  margin: 0;
  padding: 16px 24px;
  border-radius: 64px;
  font-size: 1em;
  font-weight: bold;
  background: var(--widget);
  display: flex;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  max-width: 200px;
  transition: all 0.25s;
  box-shadow: var(--shadow);
}

.link:hover {
  max-width: 150px;
  filter: var(--effect);
}

.link > img {
  height: 1.25em;
  filter: var(--icon);
}

.link > p {
  margin: 0;
  padding: 0;
  text-overflow: fade;
  white-space: nowrap;
  text-wrap: none;
  max-width: 0;
  overflow: hidden;
  transition: all 0.25s;
}

.link:hover > p {
  max-width: 999px;
  margin: 0 0 0 12px;
  transition: all 0.25s;
}

.link.important {
  background: var(--important);
}

.link.important > img {
  filter: var(--icon-imp)
}
</style>