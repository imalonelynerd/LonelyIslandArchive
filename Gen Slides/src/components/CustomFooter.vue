<script setup>

</script>

<template>
  <div class="CustomFooter">
    <slot>
    </slot>
  </div>
</template>

<style>
.CustomFooter {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 16px;
  padding: 0 0 12px;
}

.CustomFooter > * {
  color: var(--imp);
  margin: 0;
}

.CustomFooter a {
  font-weight: 700;
}
</style>