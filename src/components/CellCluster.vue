<script setup>
import SmallList from "@/components/SmallList.vue";
import BigList from "@/components/BigList.vue";

const props = defineProps([
  "shownTitle",
  "listType",
  "cellList"
])

const cellListVar = props.cellList
</script>

<template>
  <div class="cell-list">
    <h2>{{ shownTitle }}</h2>
    <SmallList v-if="listType === 'SmallList'" :cellList="cellListVar"/>
    <BigList v-if="listType !== 'SmallList'" :cellList="cellListVar"/>
  </div>
</template>

<style scoped>
@media only screen and (orientation: landscape) {
  .cell-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .cell-list > h2 {
    margin: 0 0 32px;
  }
}

@media only screen and (orientation: portrait){
  .cell-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }

  .cell-list > h2 {
    margin: 0 0 2vh;
  }
}
</style>