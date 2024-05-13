<script setup>

</script>

<template>
  <div class="TitleCard">
    <slot></slot>
  </div>
</template>

<style>
.TitleCard {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  gap: 8px;
}

.TitleCard * {
  margin: 0;
}

.TitleCard > img {
  width: 200px;
}

.TitleCard > h1 {
  font-size: 2em;
  font-weight: 900;
}

.TitleCard > h2 {
  font-size: 1.25em;
  font-weight: 700;
  opacity: 0.75;
}
</style>