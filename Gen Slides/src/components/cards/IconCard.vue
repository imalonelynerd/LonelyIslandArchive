<script setup>

</script>

<template>
  <div class="IconCard">
    <slot></slot>
  </div>
</template>

<style>
.IconCard {
  box-sizing: border-box;
  border-radius: var(--radius-small);
  padding: 24px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #20202040;
  gap: 12px;
  transition: var(--switch);
  box-shadow: 0 0 16px #20202040;
}

.IconCard * {
  margin: 0;
}

.IconCard:hover {
  scale: 1.05;
  background: #20202060;
}

.IconCard > img {
  height: 64px;
}
</style>