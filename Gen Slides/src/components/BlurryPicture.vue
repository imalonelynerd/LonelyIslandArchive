<script setup>
defineProps(['height', 'width'])
</script>

<template>
  <div class="BlurryPicture">
    <slot></slot>
    <slot></slot>
  </div>
</template>

<style>

.BlurryPicture {
  display: flex;
  flex-direction: column;
  height: v-bind(height);
  transition: var(--switch);
}

.BlurryPicture > img {
  height: v-bind(height);
  width: v-bind(width);
}

.BlurryPicture:hover {
  scale: 1.1;
}

.BlurryPicture > img:first-of-type {
  z-index: 1;
  filter: blur(20px);
  transition: var(--switch);
}

.BlurryPicture:hover > img:first-of-type {
  filter: blur(10px) !important;
}

.BlurryPicture > img:last-of-type {
  z-index: 2;
  position: relative;
  top: calc(v-bind(height) * -1);
}
</style>