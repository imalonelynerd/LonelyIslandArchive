<script setup>

</script>

<template>
  <div class="title-cluster">
    <img id="icon" src="images/icon-dark.png">
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
  }

  .title-cluster > h1 {
    color: var(--gradient);
  }

  .title-cluster > * {
    margin: 16px 0;
  }

  .title-cluster > img {
    height: 256px;
  }
}

@media only screen and (orientation: portrait) {
  .title-cluster {
    width: 100%;
    text-align: center;
  }

  .title-cluster > h1 {
    color: var(--gradient);
  }

  .title-cluster > * {
    margin: 16px 0;
  }

  .title-cluster > img {
    height: 15vh;
  }
}
</style>