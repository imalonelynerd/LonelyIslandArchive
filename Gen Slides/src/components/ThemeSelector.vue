<script setup>

import RoundButton from '@/components/RoundButton.vue'
</script>

<template>
  <div class="ThemeSelector">
    <RoundButton
      has-custom-colors="true"
      color1="#FF0000"
      color2="#930000" />
    <RoundButton
      has-custom-colors="true"
      color1="#FF5C00"
      color2="#A12700"
    />
    <RoundButton
      has-custom-colors="true"
      color1="#24FF00"
      color2="#2AA100"
    />
    <RoundButton
      has-custom-colors="true"
      color1="#00FFA3"
      color2="#00A167"
    />
    <RoundButton
      has-custom-colors="true"
      color1="#00E0FF"
      color2="#0084A1"
    />
    <RoundButton
      has-custom-colors="true"
      color1="#0085FF"
      color2="#0054A1"
    />
    <RoundButton
      has-custom-colors="true"
      color1="#D83AFF"
      color2="#8500C3"
    />
    <RoundButton
      has-custom-colors="true"
      color1="#FF005C"
      color2="#93002C"
    />
    <RoundButton
      has-custom-colors="true"
      color1="#FFFFFF"
      color2="#AAAAAA"
    />
  </div>
</template>

<style scoped>
.ThemeSelector {
  background: #FFFFFF20;
  border-radius: var(--radius-inf);
  padding: 8px;
  display: flex;
  flex-direction: row;
  gap: 16px;
}
</style>