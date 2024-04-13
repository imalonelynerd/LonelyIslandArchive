<script setup>
</script>

<template>
  <div class="footer">
    <p>©️ {{ new Date().getFullYear() }} <a href="https://github.com/imalonelynerd">Nerd</a></p>
    <a @click="$route.name === 'Credits' ? $router.go(-1) : $router.push('/credits')">Credits</a>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .footer {
    position: fixed;
    bottom: 0;
    right: 0;
    left: 0;
    border-radius: var(--widget-radius) var(--widget-radius) 0 0;
    padding: 12px 32px;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--small-gap);
    background: transparent;
    opacity: 0.33;
    color: var(--text);
    transition: var(--transition);
  }

  .footer:hover {
    padding: 12px 32px;
    opacity: 1;
  }

  .footer > * {
    margin: 0;
  }

  .footer a {
    font-weight: bold;
  }

  .footer a:hover {
    opacity: 0.5;
  }
}

@media screen and (orientation: portrait) {
  .footer {
    position: fixed;
    bottom: 0;
    right: 4vw;
    left: 4vw;
    border-radius: var(--widget-radius) var(--widget-radius) 0 0;
    padding: 4vw;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2vw;
    background: transparent;
    opacity: 0.33;
    color: var(--text);
    transition: var(--transition);
  }

  .footer:active {
    opacity: 1;
  }

  .footer > * {
    margin: 0;
  }

  .footer > a {
    display: none;
  }

  .footer a {
    font-weight: bold;
  }
}
</style>