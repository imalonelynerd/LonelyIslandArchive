<script setup>

import {ref} from "vue";

const isCreditsDisplayed = ref(false);

</script>

<template>
  <div class="credits" v-if="isCreditsDisplayed">
    <h3>Credits & License</h3>
    <p>
      ⬧ The icons used in the <a href="#me">"tools"</a> section are from <a href="https://icons8.com"><b>Icons8</b></a><br>
      ⬧ All the other icons are made by <b>me</b><br>
      ⬧ The background images are all from the game <a
        href="https://store.steampowered.com/app/1310330/Goodbye_Volcano_High">Goodbye Volcano High</a><br>
      ⬧ This website and all of the handmade assets are licensed under <a
        href="https://opensource.org/license/unlicense/">the Unlicense</a>
    </p>
  </div>
  <footer>
    <p>©️ 2023 <a href="https://github.com/lonelynerd">Nerd</a></p>
    <!--p>⬧</p>
    <p> Some rights reserved</p-->
    <p>⬧</p>
    <p>🇷🇴 ❤️ 🇩🇪 ❤️ 🇫🇷</p>
    <p>⬧</p>
    <a @click="isCreditsDisplayed = !isCreditsDisplayed">Credits</a>
  </footer>
</template>

<style scoped>
@media only screen and (orientation: landscape) {
  footer {
    color: var(--text);
    opacity: 0.75;
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 20px;
    margin-top: 8px;
    gap: 16px;
  }

  footer a, div a {
    font-weight: bold;
  }

  footer a:hover, div a:hover {
    opacity: 0.5;
  }

  .credits {
    width: 85%;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 32px;
    border-radius: 16px;
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
    color: var(--text);
    opacity: 0.75;
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    margin-bottom: 3vh;
    margin-top: 1vh;
    gap: 2vh;
  }

  footer a, div a {
    font-weight: bold;
  }

  footer a:hover, div a:hover {
    opacity: 0.5;
  }

  .credits {
    width: 73vw;
    margin-left: auto;
    margin-right: auto;
    margin-bottom: 2vh;
    border-radius: 2vh;
    padding: 3vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--widget);
    gap: 2vh;
    animation: Hewwo ease-out 0.5s;
    box-shadow: var(--shadow);
  }

  .credits > * {
    margin: 0;
    text-align: center;
  }
}
</style>