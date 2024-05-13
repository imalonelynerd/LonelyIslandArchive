<script setup>
import { RouterView } from 'vue-router'
import CustomFooter from '@/components/CustomFooter.vue'
import TopMenu from '@/components/TopMenu.vue'
</script>

<template>
  <div class="AppView">
    <TopMenu />
    <RouterView />
    <CustomFooter>
      <p>&copy; {{ new Date().getFullYear() }} <a href="https://github.com/imalonelynerd">Nerd</a></p>
      <RouterLink to="credits">Credits</RouterLink>
    </CustomFooter>

  </div>
</template>

<style>
.AppView {
  box-sizing: border-box;
  transition: var(--switch);
  display: flex;
  flex-direction: column;
  justify-content: start;
  align-items: center;
  gap: 64px;
}
</style>
