<script setup>

</script>

<template>
  <div class="desc" id="me">
    <h2>About me</h2>
    <div>
      <h3><strong>Special ability : putting too much effort into stupid things</strong></h3>
      <p><strong>Cybesec student</strong><br>
        Hobbist <strong>graphical designer</strong><br>
        <strong>C hater</strong><br></p>
      <h3>Projects I've worked on :</h3>
      <ul>
        <li><strong>Talisman</strong> (webapp &amp; GTK), a stupid simple, yet elegant Yu-Gi-Oh! companion</li>
        <li><strong>PrettyHeroes</strong>, a simple and colorful About Me page creator. I'll let you guess why I named
          it this way...
        </li>
        <li><strong>Frisk</strong>, an online gallery, made to be a self-hostable DeviantArt alternative</li>
        <li><strong>Blahaj ecosystem</strong>, a serie of websites made for <strong>blahaj.land</strong></li>
        <li><strong>Oxygen²</strong>, Oxygen reincarnated</li>
      </ul>
    </div>
    <p>From : <a href="https://heroes.imalonelynerd.fr/#/lonelynerd">PrettyHeroes</a></p>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 64px 0;
  }

  .desc > * {
    margin: 0;
  }

  .desc > *:not(:last-child) {
    margin-bottom: 32px;
  }

  .desc > div {
    width: 80%;
    padding: 32px 64px;
    background: var(--widget);;
    border-radius: 3vh;

    transition: all 0.25s;
    font-family: monospace;
  }

  .desc > div:hover {
    filter: var(--effect);
  }

  .desc > p {
    margin: -16px 0 0;
    font-size: 0.9em;
    opacity: 0.75;
  }
}

@media screen and (orientation: portrait) {
  .desc {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 6vh 0;
  }

  .desc > * {
    margin: 0;
  }

  .desc > *:not(:last-child) {
    margin-bottom: 2vh;
  }

  .desc > div {
    width: 76vw;
    padding: 4vw;
    background: var(--widget);
    border-radius: 3vh;

    transition: all 0.25s;
    font-family: monospace;
  }

  .desc > div:active {
    filter: var(--effect);
  }

  .desc > p {
    margin: -1vh 0 0;
    font-size: 0.9em;
    opacity: 0.75;
  }
}
</style>