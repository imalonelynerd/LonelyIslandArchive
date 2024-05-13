<script setup>

</script>

<template>
  <div class="footer">
    <slot>
    </slot>
  </div>
</template>

<style>
.footer {
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 8px;
  margin-top: -64px;
}

.footer > * {
  color: var(--imp);
}

.footer > a {
  font-weight: 700;
  text-decoration: none;
}
</style>