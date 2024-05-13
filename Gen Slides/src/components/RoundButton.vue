<script setup>
defineProps(['color1', 'color2'])
</script>

<template>
  <div class="RoundButton" :class="{'hasCustomColors': color1 !== undefined && color2 !== undefined}">
    <slot></slot>
  </div>
</template>

<style>
.RoundButton {
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 12px 16px;
  border-radius: var(--radius-inf);
  background: linear-gradient(#FFFFFF20, #FFFFFF20);
  box-shadow: 0 0 24px #FFFFFF20;
  transition: var(--switch);
  cursor: pointer;
}

.RoundButton.hasCustomColors {
  background: linear-gradient(v-bind(color1), v-bind(color2));
  box-shadow: 0 0 24px color-mix(in srgb, v-bind(color1), transparent 50%);
}

.RoundButton:hover {
  background: linear-gradient(var(--highlight1), var(--highlight2));
  box-shadow: 0 0 24px color-mix(in srgb, var(--highlight1), transparent 50%);
  scale: 1.1;
}

.RoundButton > img {
  height: 1.5em;
}
</style>