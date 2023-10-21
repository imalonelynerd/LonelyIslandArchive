<script setup>

import CellCluster from "@/components/cellClusters/CellCluster.vue";
import {ref} from "vue";
import nestedPath from "@/assets/json/nestedPath.json";
import Description from "@/components/Description.vue";
import PublicTitle from "@/components/Titles/PublicTitle.vue";
import {changeLoc, mailTo} from "@/assets/js/menuUtils";


const projects = ref({
  links: [
    /*{
      onc: function () {
        changeLoc("https://github.com/lonelynerd/Frisk");
      },
      img: `${nestedPath.path}captures/frisk.png`,
      title: "Frisk",
      desc: "A self-hostable online gallery",
      code: "github.com/lonelynerd/Frisk"
    },*/
    {
      onc: function () {
        changeLoc("https://github.com/lonelynerd/TalismanGTK");
      },
      img: `${nestedPath.path}captures/talisman.png`,
      title: "Talisman",
      desc: "A YuGiOh! companion app",
      code: "github.com/lonelynerd/TalismanGTK"
    },
    {
      onc: function () {
        changeLoc("https://github.com/lonelynerd/PrettyHeroes");
      },
      img: `${nestedPath.path}captures/prettyheroes.png`,
      title: "PrettyHeroes",
      desc: "An About Me page generator",
      code: "github.com/lonelynerd/PrettyHeroes"
    },
    {
      onc: function () {
        changeLoc("https://github.com/lonelynerd/EventHorizon");
      },
      img: `${nestedPath.path}captures/event.png`,
      title: "EventHorizon",
      desc: "A grid-like timetable, made in Vue",
      code: "github.com/lonelynerd/EventHorizon"
    },
    {
      onc: function () {
        changeLoc("https://github.com/lonelynerd/DeathCount");
      },
      img: `${nestedPath.path}captures/deathcount.png`,
      title: "DeathCount",
      desc: "A vicious Discord counting bot",
      code: "github.com/lonelynerd/DeathCount"
    },
    /*{
      onc: function () {
        changeLoc("https://github.com/LunarRat-Dev-Team");
      },
      img: `${nestedPath.path}captures/lunarrat.png`,
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
      img: `${nestedPath.path}icons/oxygen.png`,
      title: "Oxygen²",
      desc: "I'm currently working on it...",
      code: "invent.kde.org/pinheiro/oxygen2"
    },
    {
      onc: function () {
        changeLoc("https://blahaj.land");
      },
      img: `${nestedPath.path}icons/blahaj.png`,
      title: "Blahaj Land",
      desc: "I made this website !",
      code: "blahaj.land"
    },
    {
      onc: function () {
        changeLoc("https://getcryst.al");
      },
      img: `${nestedPath.path}icons/crystal.png`,
      title: "Crystal Linux",
      desc: "I made some wallpapers !",
      code: "getcryst.al"
    }
  ]
});

const contact = ref({
  links: [
    {
      onc: function () {
        copyText('imalonelynerd')
      },
      img: `${nestedPath.path}icons/discord.png`,
      title: "Discord",
      span: "imalonelynerd"
    },
    {
      onc: function () {
        mailTo("mailto:imalonelynerd@gmail.com");
      },
      img: `${nestedPath.path}icons/mail.png`,
      title: "Mail",
      span: "imalonelynerd@gmail.com"
    },
    {
      onc: function () {
        mailTo("mailto:imalonelynerd@blahaj.land");
      },
      img: `${nestedPath.path}icons/mail.png`,
      title: "Mail",
      span: "imalonelynerd@blahaj.land"
    },
    {
      onc: function () {
        changeLoc("https://github.com/lonelynerd/");
      },
      img: `${nestedPath.path}icons/github.png`,
      title: "GitHub",
      span: "lonelynerd"
    },
    {
      onc: function () {
        changeLoc("https://mastodon.social/@imalonelynerd/");
      },
      img: `${nestedPath.path}icons/mastodon.png`,
      title: "Mastodon",
      span: "@imalonelynerd@mastodon.social"
    },
    {
      onc: function () {
        copyText('@imalonelynerd:matrix.org')
      },
      img: `${nestedPath.path}icons/matrix.png`,
      title: "Matrix",
      span: "@imalonelynerd:matrix.org"
    },
    {
      onc: function () {
        changeLoc("https://reddit.com/u/smpl_deb");
      },
      img: `${nestedPath.path}icons/reddit.png`,
      title: "Reddit",
      span: "u/smpl_deb"
    },
    {
      onc: function () {
        changeLoc("https://www.figma.com/@imalonelynerd");
      },
      img: `${nestedPath.path}icons/figma.png`,
      title: "Figma",
      span: "@imalonelynerd"
    },
    {
      onc: function () {
        changeLoc("https://heroes.imalonelynerd.fr/lonelynerd");
      },
      img: `${nestedPath.path}icons/prettyheroes.png`,
      title: "PrettyHeroes",
      span: "lonelynerd"
    }
  ]
});

</script>

<template>
  <PublicTitle/>
  <Description/>
  <CellCluster shownTitle="Let's get in touch !" id="contact" listType="SmallList" :cellList="contact"/>
  <CellCluster shownTitle="Projects" id="projects" listType="ImageList" :cellList="projects"/>
  <CellCluster shownTitle="Contributions" id="contrib" listType="BigList" :cellList="contrib"/>
</template>

<style scoped>
@media screen and (orientation: landscape) {
  * {
    animation: Hewwo ease-out 0.75s;
  }
}

@media screen and (orientation: portrait) {
  * {
    animation: HewwoMobile ease-out 0.75s;
  }
}
</style>