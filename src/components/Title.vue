<script setup>

</script>

<template>
  <div class="title-cluster">
    <img id="icon" src="/images/icon.png">
    <div>
      <h1>Lonely Island</h1>
      <p>Welcome back...</p>
    </div>
  </div>
</template>

<style scoped>
@media only screen and (orientation: landscape) {
  .title-cluster {
    width: 100%;
    text-align: center;
    margin: 32px 0;
  }

  .title-cluster > * {
    margin: 16px 0;
  }

  .title-cluster > img {
    height: 224px;
    filter: var(--icon-imp);
  }
}

@media only screen and (orientation: portrait) {
  .title-cluster {
    width: 100%;
    text-align: center;
    margin: 0 0 3vh;
  }

  .title-cluster > * {
    margin: 16px 0;
  }

  .title-cluster > img {
    height: 15vh;
    filter: var(--icon-imp);
  }
}
</style>