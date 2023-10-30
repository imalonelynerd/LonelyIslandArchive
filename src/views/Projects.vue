<script setup>

import CellCluster from "@/components/cellClusters/CellCluster.vue";
import {ref} from "vue";
import nestedPath from "@/assets/json/nestedPath.json";
import {changeLoc} from "@/assets/js/menuUtils";


const projects = ref({
  links: [
    {
      onc: function () {
        changeLoc("https://github.com/lonelynerd/TalismanGTK");
      },
      img: `${nestedPath.path}captures/talisman.webp`,
      title: "Talisman",
      desc: "A YuGiOh! companion app",
      code: ""
      /*code: "github.com/lonelynerd/TalismanGTK"*/
    },
    {
      onc: function () {
        changeLoc("https://github.com/lonelynerd/PrettyHeroes");
      },
      img: `${nestedPath.path}captures/prettyheroes.webp`,
      title: "PrettyHeroes",
      desc: "An About Me page generator",
      code: ""
      /*code: "github.com/lonelynerd/PrettyHeroes"*/
    },
    {
      onc: function () {
        changeLoc("https://github.com/lonelynerd/EventHorizon");
      },
      img: `${nestedPath.path}captures/event.webp`,
      title: "EventHorizon",
      desc: "A grid-like timetable, made in Vue",
      code: ""
      /*code: "github.com/lonelynerd/EventHorizon"*/
    },
    {
      onc: function () {
        changeLoc("https://github.com/lonelynerd/DeathCount");
      },
      img: `${nestedPath.path}captures/deathcount.webp`,
      title: "DeathCount",
      desc: "A vicious Discord counting bot",
      code: ""
      /*code: "github.com/lonelynerd/DeathCount"*/
    },
    /*{
      onc: function () {
        changeLoc("https://github.com/LunarRat-Dev-Team");
      },
      img: `${nestedPath.path}captures/lunarrat.webp`,
      title: "Lunar Rat",
      desc: "A Windows 9X styled distro",
      code: "github.com/LunarRat-Dev-Team"
    }*/
  ]
});
const contrib = ref({
  links: [
    {
      onc: function () {
        changeLoc("https://invent.kde.org/pinheiro/oxygen2");
      },
      img: `${nestedPath.path}icons/oxygen.webp`,
      title: "Oxygen²",
      desc: "I'm currently working on it...",
      code: "invent.kde.org/pinheiro/oxygen2"
    },
    {
      onc: function () {
        changeLoc("https://blahaj.land");
      },
      img: `${nestedPath.path}icons/blahaj.webp`,
      title: "Blahaj Land",
      desc: "I made this website !",
      code: "blahaj.land"
    },
    {
      onc: function () {
        changeLoc("https://getcryst.al");
      },
      img: `${nestedPath.path}icons/crystal.webp`,
      title: "Crystal Linux",
      desc: "I made some wallpapers !",
      code: "getcryst.al"
    },
    {
      onc: function () {
        changeLoc("https://goober.cloud");
      },
      img: `${nestedPath.path}icons/goober.webp`,
      title: "GooberCloud",
      desc: "I made this website too !",
      code: "goober.cloud"
    }
  ]
});
const images = ref({
  links: [
    {
      img: `${nestedPath.path}random/tal.webp`,
      title: "Talisman icon",
    },
    {
      img: `${nestedPath.path}random/val.webp`,
      title: "Valent icon",
    },
    {
      img: `${nestedPath.path}random/crystalw.webp`,
      title: "Crystal wallpaper",
    },
    {
      img: `${nestedPath.path}random/dol.webp`,
      title: "KDE icons concept",
    },
    {
      img: `${nestedPath.path}random/gaia.webp`,
      title: "Gaia icon pack",
    },
    {
      img: `${nestedPath.path}random/flwr.webp`,
      title: "FLWR wallpapers",
    },
    {
      img: `${nestedPath.path}random/desk.webp`,
      title: "Desktop concept",
    },
  ]
});


</script>

<template>
  <CellCluster :cellList="projects" listType="ImageList" shownTitle="Projects"/>
  <CellCluster :cellList="contrib" listType="BigList" shownTitle="Contributions"/>
  <CellCluster :cellList="images" list-type="RandomList" shown-title="Designs & Icons"/>
</template>

<style scoped>
div {
  animation: Hewwo ease-out 0.75s;

}
</style>