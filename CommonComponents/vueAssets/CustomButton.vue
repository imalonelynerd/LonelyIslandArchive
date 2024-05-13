<script setup>
defineProps(['isColored', 'isImportant', 'isRetractable', 'isDisabled'])

</script>

<template>
  <div class="button" :class="
  {'colored' : isColored,
   'important' : isImportant,
    'retractable' : isRetractable,
    'disabled' : isDisabled
  }">
    <slot></slot>
  </div>
</template>

<style>
.button {
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: center;
  width: fit-content;
  height: fit-content;
  border-radius: var(--radius-inf);
  padding: 12px 20px;
  gap: 12px;
  background: var(--color2);
  transition: var(--switch);
  cursor: pointer;
}

.button:hover {
  background: var(--color4);
  scale: 1.05;
}

.button:active {
  scale: 0.95;
}

.button > img {
  height: 20px;
}

.button > p {
  font-weight: 700;
  font-size: var(--font-menu);
  margin: 0;
}

.button.colored > img {
  filter: var(--filter);
}

.button.important {
  background: var(--color3);
}

.button.important:hover {
  background: color-mix(in srgb, var(--color3), var(--color4));
}

.button.retractable {
  gap: 0;
}

.button.retractable > p {
  margin: 0;
  padding: 0;
  text-overflow: fade;
  white-space: nowrap;
  text-wrap: none;
  max-width: 0;
  overflow: hidden;
  transition: var(--switch);
}

.button.retractable:hover > p {
  max-width: 999px;
  margin: 0 0 0 12px;
  transition: var(--switch);
  opacity: 1;
}

.button.disabled {
  opacity: 0.75;
}
</style>
