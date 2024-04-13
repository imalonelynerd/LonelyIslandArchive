<script setup>
import Button from '@/common/vueAssets/CustomButton.vue'
import { changeLoc } from '@/common/jsAssets/linksActions.js'
</script>

<template>
  <div class="Welcome">
    <div>
      <div>
        <img src="/images/fey.png">
        <div>
          <h2>Hey there !</h2>
          <p>I'm Nerd</p>
          <Button @click="changeLoc('#me', false)" is-colored="true" is-retractable="true">
            <img src="/icons/scroll.png">
            <p>See more</p>
          </Button>
        </div>
      </div>
    </div>
  </div>
</template>

<style>
.Welcome {
  z-index: 6;
  display: flex;
  flex-direction: column;
  justify-content: stretch;
  align-items: stretch;
  height: 100vh;
}

.Welcome > div {
  margin: 32px;
  height: 100%;
  background: var(--bg-img) no-repeat center center;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: stretch;
  gap: 64px;
  padding: 64px;
  border-radius: var(--radius-big);
}

.Welcome > div > div {
  display: flex;
  flex-direction: row;
  gap: 24px;
}

.Welcome > div > div > img {
  height: 150px;
  border-radius: var(--radius-small);
}

.Welcome > div > div > div {
  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: start;
  gap: 16px;
}

.Welcome > div > div > div > h2 {
  font-weight: 900;
  font-size: var(--font-big);
  color: var(--imp);
}

.Welcome > div > div > div > p {
  font-size: var(--font-medium);
  color: var(--imp);
}

.Welcome > div * {
  margin: 0;
}
</style>