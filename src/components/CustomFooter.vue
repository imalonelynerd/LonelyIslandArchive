<script setup>

import {ref} from "vue";

const isCreditsDisplayed = ref(false);

</script>

<template>
  <footer>
    <div v-if="isCreditsDisplayed" class="credits">
      <h3>Credits & License</h3>
      <p>
        ⬧ The icons used in the <b>"Tools & softwares I use"</b> section are from <a
          href="https://icons8.com"><b>Icons8</b></a><br>
        ⬧ All the other icons are made by <b>me</b><br>
        ⬧ All the background images are from the game <a
          href="https://store.steampowered.com/app/1310330/Goodbye_Volcano_High">Goodbye Volcano High</a><br>
        ⬧ This website and all of the handmade assets are licensed under <a
          href="https://opensource.org/license/unlicense/">the Unlicense</a>
      </p>
    </div>
    <div class="footer">
      <p>©️ 2023 <a href="https://github.com/lonelynerd">Nerd</a></p>
      <p>⬧</p>
      <p>🇷🇴 ❤️ 🇩🇪 ❤️ 🇫🇷</p>
      <p>⬧</p>
      <a @click="isCreditsDisplayed = !isCreditsDisplayed">Credits</a>
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

  .credits {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 32px;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--widget);
    gap: 16px;
    animation: Hewwo ease-out 0.5s;
    box-shadow: var(--shadow);
  }

  .credits > * {
    margin: 0;
    text-align: center;
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
    gap: 4vw;
    color: var(--text);
    opacity: 0.75;
    width: 100%;
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

  .credits {
    width: 75%;
    margin-left: auto;
    margin-right: auto;
    border-radius: 6vw;
    margin-top: 2vw;
    padding: 4vw 6vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--widget);
    gap: 6vw;
    animation: Hewwo ease-out 0.5s;
    box-shadow: var(--shadow);
  }

  .credits > * {
    margin: 0;
    text-align: center;
  }
}
</style>