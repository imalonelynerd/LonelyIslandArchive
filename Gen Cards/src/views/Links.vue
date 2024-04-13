<script setup>

import CellCluster from "@/components/cellClusters/CellCluster.vue";
import BlockList from "@/components/cellClusters/BlockList.vue";
import {contact} from "@/assets/js/categories";

</script>

<template>
  <CellCluster shownTitle="Let's get in touch !">
    <BlockList :cellList="contact"/>
  </CellCluster>
</template>

<style scoped>
div {
  animation: Hewwo ease-out 0.75s;
}
</style>