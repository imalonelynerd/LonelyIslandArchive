<script setup>

import nestedPath from "@/assets/json/nestedPath.json"
import Bullet from "@/components/Bullet.vue";
</script>

<template>
  <div class="desc">
    <img :src="nestedPath.path + 'images/fey-pebble.png'"/>
    <h1>Nerd <span>imalonelynerd</span></h1>
    <h2>"Special ability : putting too much effort into stupid things"</h2>
    <p>
      <b>{{ new Date().getFullYear() - 2004 }}</b> y.o. ⬧ <b>they/them</b> ⬧ based in <b>Rouen</b>, France<br><br>
      <b>Cybesec</b> student, Hobbist <b>graphical/UI designer</b>, On a <b>C redemption</b> arc
    </p>
    <div>
      <h3>Tools & softwares I use</h3>
      <div class="bullets">
        <Bullet :img-link="nestedPath.path + 'icons/small/python.png'" shown-title="Python"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/js.png'" shown-title="JavaScript"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/php.png'" shown-title="PHP"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/java.png'" shown-title="Java"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/c.png'" shown-title="C"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/ocaml.png'" shown-title="OCaml"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/node.png'" shown-title="NodeJS"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/electron.png'" shown-title="Electron"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/vue.png'" shown-title="VueJS"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/jquery.png'" shown-title="jQuery"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/gtk.png'" shown-title="GTK4"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/figma.png'" shown-title="Figma"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/inkscape.png'" shown-title="Inkscape"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/gimp.png'" shown-title="Gimp"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/linux.png'" shown-title="Linux"/>
      </div>
    </div>
    <div>
      <h3>Contacts</h3>
      <p>If you have a <b>question</b>, an <b>issue</b> with one of my projects, or maybe you want me to <b>do
        something</b>, I'll be more than happy to help !<br>All my communication mediums are listed
        <router-link
            :to="nestedPath.path + 'links'">here
        </router-link>
        !
      </p>
    </div>
  </div>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  .desc {
    transition: var(--transition);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: var(--big-gap);
    animation: Hewwo ease-out 0.75s;
  }

  .desc > * {
    margin: 0;
  }

  .desc > h2 {
    color: var(--important);
  }

  .desc > img {
    height: 128px;
    margin-bottom: -24px;
    box-shadow: var(--shadow), var(--pebble);
    border-radius: var(--widget-radius);
  }

  .desc a {
    font-weight: bold;
  }

  .desc a:hover {
    opacity: 0.5;
  }

  .desc > h1 > span {
    font-size: 0.75em;
    opacity: 0.5;
  }

  .desc > div {
    width: 80%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: var(--med-gap);
  }

  .desc > div > * {
    margin: 0;
  }

  .bullets {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: var(--text-gap);
  }
}

@media screen and (orientation: portrait) {
  .desc {
    transition: var(--transition);
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 10vw;
    animation: Hewwo ease-out 0.75s;
  }

  .desc > * {
    margin: 0;
    width: 85%;
  }

  .desc > h2 {
    color: var(--important);
  }

  .desc > img {
    height: 30vw;
    width: 30vw;
    margin-bottom: -8vw;
    box-shadow: var(--shadow), var(--pebble);
    border-radius: var(--widget-radius);
  }

  .desc a {
    font-weight: bold;
  }

  .desc a:active {
    opacity: 0.5;
  }

  .desc > h1 > span {
    font-size: 0.75em;
    opacity: 0.5;
  }

  .desc > div {
    width: 85%;
    display: flex;
    flex-wrap: wrap;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 4vw;
  }

  .desc > div > * {
    margin: 0;
  }

  .bullets {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 2vw;
  }
}
</style>