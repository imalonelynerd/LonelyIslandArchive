<script setup>

</script>

<template>
  <div class="SmallCard">
    <slot></slot>
  </div>
</template>

<style>
.SmallCard {
  box-sizing: border-box;
  border-radius: var(--radius-small);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: start;
  background: #20202040;
  gap: 12px;
  transition: var(--switch);
  box-shadow: 0 0 16px #20202040;
}

.SmallCard * {
  margin: 0;
}

.SmallCard:hover {
  scale: 1.05;
  background: #20202060;
}

.SmallCard > h2 {
  font-size: 1.25em;
}

.SmallCard > img {
  height: 48px;
}
</style>