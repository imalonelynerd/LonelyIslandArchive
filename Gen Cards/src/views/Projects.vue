<script setup>

import CellCluster from "@/components/cellClusters/CellCluster.vue";
import ImageList from "@/components/cellClusters/ImageList.vue";
import GalleryList from "@/components/cellClusters/GalleryList.vue";

import {concepts, icons, projects, wallpy} from "@/assets/js/categories"
</script>

<template>
  <CellCluster shownTitle="Projects">
    <ImageList :cell-list="projects"/>
  </CellCluster>
  <CellCluster shown-title="Designs : Icons">
    <GalleryList :cellList="icons"/>
  </CellCluster>
  <CellCluster shown-title="Designs : Wallpapers">
    <GalleryList :cellList="wallpy"/>
  </CellCluster>
  <CellCluster shown-title="Designs : Concepts">
    <GalleryList :cellList="concepts"/>
  </CellCluster>

</template>

<style scoped>
div {
  animation: Hewwo ease-out 0.75s;

}
</style>