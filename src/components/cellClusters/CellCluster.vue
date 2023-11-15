<script setup>
import SmallList from "@/components/cellClusters/SmallList.vue";
import BigList from "@/components/cellClusters/BigList.vue";
import ImageList from "@/components/cellClusters/ImageList.vue";
import BlockList from "@/components/cellClusters/BlockList.vue";
import GalleryList from "@/components/cellClusters/GalleryList.vue";

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
    <BigList v-if="listType === 'BigList'" :cellList="cellListVar"/>
    <ImageList v-if="listType === 'ImageList'" :cellList="cellListVar"/>
    <BlockList v-if="listType === 'BlockList'" :cellList="cellListVar"/>
    <GalleryList v-if="listType === 'GalleryList'" :cellList="cellListVar"/>

  </div>
</template>

<style scoped>
@media only screen and (orientation: landscape) {
  .cell-list {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin: 64px 0;
    gap: 32px;
  }

  .cell-list > h2 {
    margin: 0;
  }
}

@media only screen and (orientation: portrait) {
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