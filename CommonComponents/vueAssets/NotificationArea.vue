<script setup>
</script>

<template>
  <div class="notification">
    <div v-for="(e,i) in $notifications.notificationList" v-bind:key="i" :style="{backgroundColor : e.type.color}"
         @click="$notifications.popNotification()">
      <div>
        <img :src="e.type.image" v-if="e.type.image !== ''">
        <h3 v-if="e.title !== ''">{{ e.title }}</h3>
      </div>
      <p v-if="e.content !== ''">{{ e.content }}</p>
    </div>
  </div>
</template>

<style>
.notification {
  width: 400px;
  position: fixed;
  z-index: 999;
  bottom: 32px;
  right: 32px;

  display: flex;
  flex-direction: column;
  justify-content: end;
  align-items: stretch;

  gap: 16px;
}

.notification > div {
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: stretch;
  gap: 16px;
  padding: 24px;
  border-radius: var(--radius-small);
  transition: var(--switch);
  animation: Notification ease-out 0.25s;
}

.notification > div:hover {
  background: color-mix(in srgb, var(--color2), var(--color4)) !important;
  scale: 1.05;
}

.notification > div:active {
  scale: 0.95;
}

.notification > div > p {
  margin: 0;
}

.notification > div > div {
  display: flex;
  flex-direction: row;
  justify-content: stretch;
  align-items: center;
  gap: 8px;
}

.notification > div > div > img {
  height: var(--font-big);
  filter: var(--filter);
}

.notification > div > div > h3 {
  margin: 0;
  font-size: var(--font-medium);
}

</style>