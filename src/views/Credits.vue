<script setup>

import CellCluster from "@/components/cellClusters/CellCluster.vue";
import {wallpyli} from "@/assets/js/categories";
import GalleryList from "@/components/cellClusters/GalleryList.vue";
</script>

<template>
  <div>
    <h2>Credits</h2>
    <p>
      ⬧ The icons used in the <b>"About me"</b> section are from <a
        href="https://icons8.com">Icons8</a>.</p>
    <p>
      ⬧ All the other icons are made by <b>me</b>, you can download them <a
        href="https://files.imalonelynerd.fr/LonelyIsland/Icons/">here</a>.
    </p>
  </div>
  <div>
    <h2>Licenses</h2>
    <p>
      ⬧ This website and all of the handmade assets are licensed under the <a
        href="https://opensource.org/license/unlicense/">Unlicense</a>.
    </p>
  </div>
  <CellCluster shown-title="Wallpaper sources">
    <GalleryList :cellList="wallpyli"/>
  </CellCluster>
</template>

<style scoped>
.page > div {
  animation: Hewwo ease-out 0.75s;
}

@media screen and (orientation: landscape) {
  .page > div:not(.cell-list) {
    width: 100%;
    margin: 0 auto 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--big-gap);
  }

  .page > div:not(.cell-list) > * {
    margin: 0;
  }

  .page > div:not(.cell-list) a {
    font-weight: bold;
  }

  .page > div:not(.cell-list) a:hover {
    opacity: 0.5;
  }

  .cell-list {
    margin-top: 0;
  }
}

@media screen and (orientation: portrait) {
  .page > div:not(.cell-list) {
    width: 85%;
    margin: 0 auto 12vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4vw;
  }

  .page > div:not(.cell-list) > p {
    width: 100%;
  }

  .page > div:not(.cell-list) > * {
    margin: 0;
  }

  .page > div:not(.cell-list) a {
    font-weight: bold;
  }

  .page > div:not(.cell-list) a:active {
    opacity: 0.5;
  }

  .cell-list {
    margin-top: 0;
  }
}

</style>