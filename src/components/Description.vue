<script setup>

import nestedPath from "@/assets/json/nestedPath.json"
import SmallButton from "@/components/SmallButton.vue";
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
      <div>
        <h3>Tools & softwares I use</h3>
        <div>
          <SmallButton shown-title="Python" :img-link="nestedPath.path + 'icons/small/python.png'"/>
          <SmallButton shown-title="JavaScript" :img-link="nestedPath.path + 'icons/small/js.png'"/>
          <SmallButton shown-title="PHP" :img-link="nestedPath.path + 'icons/small/php.png'"/>
          <SmallButton shown-title="Java" :img-link="nestedPath.path + 'icons/small/java.png'"/>
          <SmallButton shown-title="C" :img-link="nestedPath.path + 'icons/small/c.png'"/>
          <SmallButton shown-title="OCaml" :img-link="nestedPath.path + 'icons/small/ocaml.png'"/>
          <SmallButton shown-title="NodeJS" :img-link="nestedPath.path + 'icons/small/node.png'"/>
          <SmallButton shown-title="Electron" :img-link="nestedPath.path + 'icons/small/electron.png'"/>
          <SmallButton shown-title="VueJS" :img-link="nestedPath.path + 'icons/small/vue.png'"/>
          <SmallButton shown-title="jQuery" :img-link="nestedPath.path + 'icons/small/jquery.png'"/>
          <SmallButton shown-title="GTK4/LibAdwaita" :img-link="nestedPath.path + 'icons/small/gtk.png'"/>
          <SmallButton shown-title="Figma" :img-link="nestedPath.path + 'icons/small/figma.png'"/>
          <SmallButton shown-title="Inkscape" :img-link="nestedPath.path + 'icons/small/inkscape.png'"/>
          <SmallButton shown-title="Gimp" :img-link="nestedPath.path + 'icons/small/gimp.png'"/>
          <SmallButton shown-title="Linux" :img-link="nestedPath.path + 'icons/small/linux.png'"/>
        </div>
      </div>
      <div>
        <h3>Contacts</h3>
        <p>If you have a <b>question</b>, an <b>issue</b> with one of my projects, or maybe you want me to <b>do
          something</b>, I'll be more than happy to help !<br>You can contact me using the <a
            href="#contact"><b>links</b></a> listed below !</p>
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
    margin-bottom: -24px !important;
    box-shadow: var(--shadow);
    border-radius: 128px;
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

  .desc > div > div {
    width: 80%;
    border-radius: 16px;
    padding: 24px 64px;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--widget);
    gap: 24px;
    box-shadow: var(--shadow);
  }

  .desc > div > div > * {
    margin: 0;
  }

  .desc > div > div > div {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: start;
    row-gap: 8px;
    column-gap: 12px;
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
    margin-bottom: -3vh !important;
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

  /*.desc > p {
    margin: -24px 0 0;
    font-size: 0.9em;
    opacity: 0.5;
  }*/
  .desc > div > * {
    margin: 0;
  }

  .desc > div > div {
    width: 80%;
    border-radius: 2vh;
    padding: 3vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    background: var(--widget);
    gap: 3vh;
    box-shadow: var(--shadow);
  }

  .desc > div > div > * {
    margin: 0;
  }

  .desc > div > div > div {
    height: 20vh;
    overflow: scroll;
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