<script setup>

import CellCluster from "@/components/cellClusters/CellCluster.vue";
import SmallList from "@/components/cellClusters/SmallList.vue";
import {misc, nextcloud, webapps, yuno} from "@/assets/js/categories";
import BigList from "@/components/cellClusters/BigList.vue";
</script>

<template>
  <CellCluster shownTitle="Nextcloud apps">
    <SmallList :cellList="nextcloud"/>
  </CellCluster>
  <CellCluster shownTitle="YunoHost apps">
    <BigList :cellList="yuno"/>
  </CellCluster>
  <CellCluster shownTitle="Webapps">
    <BigList :cellList="webapps"/>
  </CellCluster>
  <CellCluster shownTitle="Miscellaneous">
    <SmallList :cellList="misc"/>
  </CellCluster>
</template>

<style scoped>
div {
  animation: Hewwo ease-out 0.75s;

}
</style>