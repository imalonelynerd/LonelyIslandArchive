<script setup>

import nestedPath from "@/assets/json/nestedPath.json"
import Bullet from "@/components/Bullet.vue";
</script>

<template>
  <div class="desc">
    <img :src="nestedPath.path + 'images/fey2.webp'"/>
    <h1>Nerd <span>imalonelynerd</span></h1>
    <h2>"Special ability : putting too much effort into stupid things"</h2>
    <p>
      <b>19</b> y.o. ⬧ <b>they/them</b> ⬧ based in <b>Rouen</b>, France<br><br>
      <b>Cybesec</b> student, Hobbist <b>graphical/UI designer</b>, On a <b>C redemption</b> arc
    </p>
    <div>
      <h3>Tools & softwares I use</h3>
      <div class="bullets">
        <Bullet :img-link="nestedPath.path + 'icons/small/python.webp'" shown-title="Python"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/js.webp'" shown-title="JavaScript"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/php.webp'" shown-title="PHP"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/java.webp'" shown-title="Java"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/c.webp'" shown-title="C"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/ocaml.webp'" shown-title="OCaml"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/node.webp'" shown-title="NodeJS"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/electron.webp'" shown-title="Electron"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/vue.webp'" shown-title="VueJS"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/jquery.webp'" shown-title="jQuery"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/gtk.webp'" shown-title="GTK4"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/figma.webp'" shown-title="Figma"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/inkscape.webp'" shown-title="Inkscape"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/gimp.webp'" shown-title="Gimp"/>
        <Bullet :img-link="nestedPath.path + 'icons/small/linux.webp'" shown-title="Linux"/>
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
    transition: all 0.25s;
    text-align: center;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: start;
    gap: 48px;
    animation: Hewwo ease-out 0.75s;
  }

  .desc > * {
    margin: 0;
  }

  .desc > h2 {
    /*font-style: italic;*/
    color: var(--important);
  }

  .desc > img {
    height: 128px;
    margin-bottom: -32px !important;
    box-shadow: var(--shadow);
    border-radius: 128px;
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
    gap: 24px;
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
    gap: 12px;
  }
}

@media screen and (orientation: portrait) {
  .desc {
    transition: all 0.25s;
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
    /*font-style: italic;*/
    color: var(--important);
  }

  .desc > img {
    height: 30vw;
    width: 30vw;
    margin-bottom: -6vw !important;
    box-shadow: var(--shadow);
    border-radius: 40vw;
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