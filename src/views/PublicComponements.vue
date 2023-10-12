<script setup>

import CellCluster from "@/components/cellClusters/CellCluster.vue";
import {ref} from "vue";
import nestedPath from "@/assets/json/nestedPath.json";
import Description from "@/components/Description.vue";
import PublicTitle from "@/components/Titles/PublicTitle.vue";

function copyText(text) {
  navigator.clipboard.writeText(text);
  alert(`"${text}" copied successfully !`);
  return true;
}

const projects = ref({
  links: [
    {
      href: "https://github.com/lonelynerd/Frisk",
      img: `${nestedPath.path}captures/frisk.png`,
      title: "Frisk",
      desc: "A self-hostable online gallery",
      code: "github.com/lonelynerd/Frisk"
    },
    {
      href: "https://github.com/lonelynerd/TalismanGTK",
      img: `${nestedPath.path}captures/talisman.png`,
      title: "Talisman",
      desc: "A YuGiOh! companion app",
      code: "github.com/lonelynerd/TalismanGTK"
    },
    {
      href: "https://github.com/lonelynerd/PrettyHeroes/",
      img: `${nestedPath.path}captures/prettyheroes.png`,
      title: "PrettyHeroes",
      desc: "An About Me page generator",
      code: "github.com/lonelynerd/PrettyHeroes"
    },
    {
      href: "https://github.com/lonelynerd/EventHorizon",
      img: `${nestedPath.path}captures/event.png`,
      title: "EventHorizon",
      desc: "A grid-like timetable, made in Vue",
      code: "github.com/lonelynerd/EventHorizon"
    },
    {
      href: "https://github.com/lonelynerd/DeathCount",
      img: `${nestedPath.path}captures/deathcount.png`,
      title: "DeathCount",
      desc: "A vicious Discord counting bot",
      code: "github.com/lonelynerd/DeathCount"
    },
    {
      href: "https://github.com/LunarRat-Dev-Team",
      img: `${nestedPath.path}captures/lunarrat.png`,
      title: "Lunar Rat",
      desc: "A Windows 9X styled distro",
      code: "github.com/LunarRat-Dev-Team"
    }
  ]
});

const contrib = ref({
  links: [
    {
      href: "https://invent.kde.org/pinheiro/oxygen2",
      img: `${nestedPath.path}icons/oxygen.png`,
      title: "Oxygen²",
      desc: "Currently working on it...",
      code: "invent.kde.org/pinheiro/oxygen2"
    },
    {
      href: "https://blahaj.land",
      img: `${nestedPath.path}icons/blahaj.png`,
      title: "Blahaj Land",
      desc: "I made this website !",
      code: "blahaj.land"
    },
    {
      href: "https://getcryst.al",
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
      href: "mailto:imalonelynerd@gmail.com",
      img: `${nestedPath.path}icons/mail.png`,
      title: "Mail",
      span: "imalonelynerd@gmail.com"
    },
    {
      href: "mailto:imalonelynerd@blahaj.land",
      img: `${nestedPath.path}icons/mail.png`,
      title: "Mail",
      span: "imalonelynerd@blahaj.land"
    },
    {
      href: "https://github.com/lonelynerd/",
      img: `${nestedPath.path}icons/github.png`,
      title: "GitHub",
      span: "lonelynerd"
    },
    {
      href: "https://mastodon.social/@imalonelynerd/",
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
      href: "https://reddit.com/u/smpl_deb",
      img: `${nestedPath.path}icons/reddit.png`,
      title: "Reddit",
      span: "u/smpl_deb"
    },
    {
      href: "https://www.figma.com/@imalonelynerd",
      img: `${nestedPath.path}icons/figma.png`,
      title: "Figma",
      span: "@imalonelynerd"
    },
    {
      href: "https://heroes.imalonelynerd.fr/#/lonelynerd",
      img: `${nestedPath.path}icons/prettyheroes.png`,
      title: "PrettyHeroes",
      span: ""
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