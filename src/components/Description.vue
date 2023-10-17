<script setup>

import nestedPath from "@/assets/json/nestedPath.json"
import Bullet from "@/components/Bullet.vue";
</script>

<template>
  <div class="desc" id="me">
    <!--h2>About me</h2-->
    <div>
      <img :src="nestedPath.path + 'images/fey.png'"/>
      <h1>Nerd <span>imalonelynerd</span></h1>
      <h3><i>"Special ability : putting too much effort into stupid things"</i></h3>
      <p>
        <b>19</b> y.o. ⬧ <b>they/them</b> ⬧ based in <b>Rouen</b>, France<br>
        <b>Cybesec</b> student, Hobbist <b>graphical/UI designer</b>, <b>C hater</b>
      </p>
      <div class="desc-cluster">
        <div>
          <h3>Tools & softwares I use</h3>
          <div>
            <Bullet shown-title="Python" :img-link="nestedPath.path + 'icons/small/python.png'"/>
            <Bullet shown-title="JavaScript" :img-link="nestedPath.path + 'icons/small/js.png'"/>
            <Bullet shown-title="PHP" :img-link="nestedPath.path + 'icons/small/php.png'"/>
            <Bullet shown-title="Java" :img-link="nestedPath.path + 'icons/small/java.png'"/>
            <Bullet shown-title="C" :img-link="nestedPath.path + 'icons/small/c.png'"/>
            <Bullet shown-title="OCaml" :img-link="nestedPath.path + 'icons/small/ocaml.png'"/>
            <Bullet shown-title="NodeJS" :img-link="nestedPath.path + 'icons/small/node.png'"/>
            <Bullet shown-title="Electron" :img-link="nestedPath.path + 'icons/small/electron.png'"/>
            <Bullet shown-title="VueJS" :img-link="nestedPath.path + 'icons/small/vue.png'"/>
            <Bullet shown-title="jQuery" :img-link="nestedPath.path + 'icons/small/jquery.png'"/>
            <Bullet shown-title="GTK4" :img-link="nestedPath.path + 'icons/small/gtk.png'"/>
            <Bullet shown-title="Figma" :img-link="nestedPath.path + 'icons/small/figma.png'"/>
            <Bullet shown-title="Inkscape" :img-link="nestedPath.path + 'icons/small/inkscape.png'"/>
            <Bullet shown-title="Gimp" :img-link="nestedPath.path + 'icons/small/gimp.png'"/>
            <Bullet shown-title="Linux" :img-link="nestedPath.path + 'icons/small/linux.png'"/>
          </div>
        </div>
        <div>
          <h3>Contacts</h3>
          <p>If you have a <b>question</b>, an <b>issue</b> with one of my projects, or maybe you want me to <b>do
            something</b>, I'll be more than happy to help !<br>You can contact me using the <a
              href="#contact">links</a> listed below !</p>
        </div>
      </div>
    </div>
    <!--p>From : <a href="https://github.com/lonelynerd"><b>GitHub</b></a></p-->
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .desc {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 32px;
  }

  .desc > * {
    margin: 0;
  }

  .desc > div > img {
    height: 128px;
    margin-bottom: -8px !important;
    box-shadow: var(--shadow);
    border-radius: 128px;
  }

  .desc a {
    font-weight: bold;
  }

  .desc a:hover {
    opacity: 0.5;
  }

  .desc > div {
    transition: all 0.25s;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 36px;
  }

  .desc > div > h1 > span {
    font-size: 0.75em;
    opacity: 0.5;
  }

  .desc > p {
    margin: -24px 0 0;
    font-size: 0.9em;
    opacity: 0.5;
  }

  .desc > div > * {
    margin: 0;
  }

  .desc-cluster {
    width: 90%;
    display: grid;
    grid-auto-rows: 1fr;
    grid-template-columns: 1fr 1fr;
    gap: 32px;
  }

  .desc-cluster > div {
    border-radius: 16px;
    padding: 24px 32px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--widget);
    gap: 24px;
    box-shadow: var(--shadow);
  }

  .desc-cluster > div > * {
    margin: 0;
  }

  .desc-cluster > div > div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    gap: 8px;
  }
}

@media screen and (orientation: portrait) {
  .desc {
    display: flex;
    flex-direction: column;
    justify-content: start;
    align-items: center;
    gap: 3vh;
  }

  .desc > h2 {
    display: none;
  }

  .desc > * {
    margin: 0;
  }

  .desc > div > img {
    height: 15vh;
    box-shadow: var(--shadow);
    border-radius: 15vh;
  }

  .desc > div {
    width: 90%;
    transition: all 0.25s;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 4vh;
  }

  .desc > div > h1 > span {
    font-size: 0.75em;
    opacity: 0.5;
  }

  .desc a {
    font-weight: bold;
  }

  .desc a:active {
    opacity: 0.5;
  }

  /*.desc > p {
    margin: -24px 0 0;
    font-size: 0.9em;
    opacity: 0.5;
  }*/
  .desc > div > * {
    margin: 0;
  }

  .desc-cluster {
    width: 85vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 2vh;
  }

  .desc-cluster > div {
    border-radius: 2vh;
    padding: 3vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--widget);
    gap: 2vh;
    box-shadow: var(--shadow);
  }

  .desc-cluster > div > * {
    margin: 0;
  }

  .desc-cluster > div > div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    row-gap: 1vh;
    column-gap: 1vh;
  }
}
</style>