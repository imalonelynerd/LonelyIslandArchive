<script setup>
import Button from './CustomButton.vue'

const ICONS_LOCATION = '/icons/'
defineEmits(['update:menuHidden'])
</script>

<template>
  <div class="Quick" @click="$emit('update:menuHidden')" />
  <div class="Fly">
    <div class="quickfly-menu">
      <slot name="title">
      </slot>
    </div>
    <slot>
    </slot>
    <Button @click="$emit('update:menuHidden')" is-important="true">
      <img :src="ICONS_LOCATION + 'back.png'" />
      <p>Back</p>
    </Button>
  </div>
</template>

<style>
@media screen and (orientation: landscape) {
  .Quick {
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: color-mix(in srgb, var(--color1), transparent 50%);
    z-index: 9;
    animation: Root ease-out 0.5s;
  }

  .Fly {
    position: fixed;
    bottom: -32px;
    max-height: 80%;
    overflow: scroll;
    left: 50%;
    transform: translateX(-50%);
    z-index: 10;
    min-width: 600px;
    display: flex;
    flex-direction: column;
    justify-content: end;
    align-items: stretch;
    background: var(--color1);
    border-radius: var(--radius-small) var(--radius-small) 0 0;
    animation: Menu ease-out 0.33s !important;
    padding: 64px;
    gap: 48px;
  }

  .quickfly-menu {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 16px;
  }

  .quickfly-menu > img {
    height: 96px;
    width: 96px;
  }

  .quickfly-menu > p {
    font-weight: 900;
    font-size: var(--font-medium);
    margin: 0;
  }

  .Fly > div:last-of-type {
    align-self: center;
  }
}
</style>