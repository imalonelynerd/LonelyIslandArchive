<script setup>

import {ref} from "vue";

const isCreditsDisplayed = ref(false);

</script>

<template>
  <footer>
    <div class="footer">
      <p>©️ 2023 <a href="https://github.com/imalonelynerd">Nerd</a></p>
      <p>⬧</p>
      <!--p>🇷🇴 ❤️ 🇩🇪 ❤️ 🇫🇷</p>
      <p>⬧</p-->
      <a @click="$route.name === 'Credits' ? $router.go(-1) : $router.push('/credits')">Credits</a>
    </div>
  </footer>
</template>

<style scoped>
@media only screen and (orientation: landscape) {
  footer {
    opacity: 0;
    background: var(--bg);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 16px 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 16px;
    animation: Hewwo ease-out 0.25s;
    transition: all 0.25s;
  }

  footer:hover {
    opacity: 1;
  }

  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 16px;
    color: var(--text);
  }

  .footer > * {
    margin: 0;
  }

  footer a {
    font-weight: bold;
  }

  footer a:hover {
    opacity: 0.5;
  }
}

@media only screen and (orientation: portrait) {
  footer {
    background: var(--bg);
    position: fixed;
    bottom: 0;
    left: 0;
    right: 0;
    padding: 2vw 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4vw;
  }

  .footer {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    color: var(--text);
    opacity: 0.75;
    width: 100%;
    font-size: 0.8em;
  }

  .footer > * {
    margin: 0;
  }

  footer a {
    font-weight: bold;
  }

  footer a:active {
    opacity: 0.5;
  }
}
</style>