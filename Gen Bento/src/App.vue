<script setup>
import { useThemes } from '@/common/jsAssets/themeSupport.js'
import CustomFooter from '@/common/vueAssets/CustomFooter.vue'
import Discover from '@/components/DiscoverMenu.vue'
import NotificationArea from '@/common/vueAssets/NotificationArea.vue'
import { PrettyCode } from '@/assets/prettyCode.js'
import { ref } from 'vue'

useThemes().setThemeFromCookie()
const witness = ref(false)
const pretty = new PrettyCode(witness)
pretty.initialize()

</script>

<template>
  <NotificationArea />
  <Discover />
  <RouterView>
  </RouterView>
  <CustomFooter>
    <p>© {{ new Date().getFullYear() }}</p>
    <a href="https://github.com/imalonelynerd">Nerd</a>
  </CustomFooter>

</template>

<style>
</style>
