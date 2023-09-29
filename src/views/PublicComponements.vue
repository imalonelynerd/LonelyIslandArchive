<script setup>

import CellCluster from "@/components/CellCluster.vue";
import {ref} from "vue";
import nestedPath from "@/assets/json/nestedPath.json";

function copyText(text) {
  navigator.clipboard.writeText(text);
  alert("Copied successfully !");
  return true;
}

const projects = ref({
  links: [
    {
      href: "https://github.com/lonelynerd/Frisk",
      img: `${nestedPath.path}icons/frisk.png`,
      title: "Frisk",
      desc: "A self-hostable online gallery",
      code: "github.com/lonelynerd/Frisk"
    },
    {
      href: "https://github.com/lonelynerd/Talisman",
      img: `${nestedPath.path}icons/talisman.png`,
      title: "Talisman",
      desc: "A YuGiOh! companion app",
      code: "github.com/lonelynerd/Talisman"
    },
    {
      href: "https://github.com/lonelynerd/PrettyHeroes/",
      img: `${nestedPath.path}icons/prettyheroes.png`,
      title: "Pretty Heroes",
      desc: "A simple About Me page generator",
      code: "heroes.imalonelynerd.fr"
    },
    {
      href: "https://github.com/lonelynerd/DeathCount",
      img: `${nestedPath.path}icons/deathcount.png`,
      title: "DeathCount",
      desc: "A Discord counting bot with added vicious features",
      code: "github.com/lonelynerd/DeathCount"
    },
    {
      href: "https://github.com/LunarRat-Dev-Team",
      img: `${nestedPath.path}icons/lunarrat.png`,
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
      desc: "Working on it...",
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
      href: "https://heroes.imalonelynerd.fr/#/lonelynerd",
      img: `${nestedPath.path}icons/prettyheroes.png`,
      title: "Nerd",
      span: "Pretty Heroes"
    },
    {
      onc: function () {
        copyText('imalonelynerd')
      },
      img: `${nestedPath.path}icons/discord.png`,
      title: "imalonelynerd",
      span: "#0"
    },
    {
      href: "mailto:imalonelynerd@gmail.com",
      img: `${nestedPath.path}icons/mail.png`,
      title: "imalonelynerd",
      span: "@gmail.com"
    },
    {
      href: "mailto:imalonelynerd@blahaj.land",
      img: `${nestedPath.path}icons/mail.png`,
      title: "imalonelynerd",
      span: "@blahaj.land"
    },
    {
      href: "https://github.com/lonelynerd/",
      img: `${nestedPath.path}icons/github.png`,
      title: "lonelynerd",
      span: ".github.io"
    },
    {
      href: "https://mastodon.social/@imalonelynerd/",
      img: `${nestedPath.path}icons/mastodon.png`,
      title: "@imalonelynerd",
      span: "@mastodon.social"
    },
    {
      onc: function () {
        copyText('@imalonelynerd:matrix.org')
      },
      img: `${nestedPath.path}icons/matrix.png`,
      title: "@imalonelynerd",
      span: ":matrix.org"
    }
  ]
});

</script>

<template>
  <CellCluster shownTitle="Let's get in touch !" id="contact" listType="SmallList" :cellList="contact"/>
  <CellCluster shownTitle="Projects" id="projects" listType="BigList" :cellList="projects"/>
  <CellCluster shownTitle="Contributions" id="contrib" listType="BigList" :cellList="contrib"/>
</template>

<style scoped>
* {
  animation: Hewwo 0.75s;
}
</style>