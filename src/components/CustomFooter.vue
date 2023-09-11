<template>
  <footer>
    <p>©️ <b>2023 <a href="https://github.com/lonelynerd">Nerd</a></b></p>
    <p>⋅</p>
    <p> Some rights reserved</p>
    <p>⋅</p>
    <p>🇷🇴 ❤️ 🇩🇪 ❤️ 🇫🇷</p>
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
  }

  footer > * {
    margin: 8px;
  }
}

@media only screen and (orientation: portrait) {
  footer {
    color: var(--text);
    opacity: 0.75;
    width: 100%;
    display: flex;
    text-align: center;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    margin-bottom: 2vh;
  }

  footer > * {
    margin: 0;
  }
}
</style>