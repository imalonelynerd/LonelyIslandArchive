<script setup>

const props = defineProps([
  "shownTitle",
])

</script>

<template>
  <div class="cell-list">
    <h2>{{ shownTitle }}</h2>
    <slot>
    </slot>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .cell-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 64px 0;
    gap: var(--big-gap);
  }

  .cell-list > h2 {
    margin: 0;
  }
}

@media screen and (orientation: portrait) {
  .cell-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 12vw 0;
  }

  .cell-list > h2 {
    margin: 0 0 6vw;
  }
}
</style>