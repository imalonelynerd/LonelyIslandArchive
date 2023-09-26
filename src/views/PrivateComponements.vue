<script setup>

import CellCluster from "@/components/CellCluster.vue";

import {ref} from "vue";

const nextcloud = ref({
  links: [
    {
      href: "https://files.imalonelynerd.fr/apps/files/",
      img: "/landing/icons/files.png",
      title: "Files",
      span: ".../apps/files/"
    },
    {
      href: "https://files.imalonelynerd.fr/apps/calendar/",
      img: "/landing/icons/calendar.png",
      title: "Calendar",
      span: ".../apps/calendar/"
    },
    {
      href: "https://files.imalonelynerd.fr/apps/music/",
      img: "/landing/icons/music.png",
      title: "Music",
      span: ".../apps/music/"
    },
    {
      href: "https://files.imalonelynerd.fr/apps/deck/",
      img: "/landing/icons/deck.png",
      title: "Deck",
      span: ".../apps/deck/"
    },
    {
      href: "https://files.imalonelynerd.fr/apps/nextpod/",
      img: "/landing/icons/podcast.png",
      title: "NextPod",
      span: ".../apps/nextpod/"
    },
    {
      href: "https://files.imalonelynerd.fr/apps/tasks/",
      img: "/landing/icons/tasks.png",
      title: "Tasks",
      span: ".../apps/tasks/"
    },
    {
      href: "https://files.imalonelynerd.fr/apps/news/",
      img: "/landing/icons/news.png",
      title: "News",
      span: ".../apps/news/"
    }
  ]
})
const yuno = ref({
  links: [
    {
      href: "https://files.imalonelynerd.fr/",
      img: "/landing/icons/nextcloud.png",
      title: "Nextcloud",
      desc: "A small personal cloud <b>(private)</b>",
      code: "files.imalonelynerd.fr"
    },
    {
      href: "https://send.imalonelynerd.fr",
      img: "/landing/icons/send.png",
      title: "Send",
      desc: "Send data to anyone ! <b>(private)</b>",
      code: "send.imalonelynerd.fr"
    },
    {
      href: "https://mail.imalonelynerd.fr",
      img: "/landing/icons/mail.png",
      title: "Roundcube",
      desc: "Internal (for now) email system <b>(private)</b>",
      code: "mail.imalonelynerd.fr"
    }
  ]
});
const webapps = ref({
  links: [
    {
      href: "https://imalonelynerd.fr/landing/",
      img: "/landing/icons/landing.png",
      title: "Landing page",
      desc: "The very page you're on right now",
      code: "imalonelynerd.fr/landing"
    },
    {
      href: "https://imalonelynerd.fr/talisman",
      img: "/landing/icons/talisman.png",
      title: "Talisman",
      desc: "A YuGiOh! companion app",
      code: "imalonelynerd.fr/talisman"
    },
    {
      href: "https://imalonelynerd.fr/edt",
      img: "/landing/icons/calendar.png",
      title: "Timetable",
      desc: "An uni timetable, powered by SAGBOT",
      code: "imalonelynerd.fr/edt"
    },
    {
      href: "https://heroes.imalonelynerd.fr/",
      img: "/landing/icons/prettyheroes.png",
      title: "Pretty Heroes",
      desc: "A simple About Me page generator",
      code: "heroes.imalonelynerd.fr"
    }
  ]
});
const misc = ref({
  links: [
    {
      href: "https://imalonelynerd.fr/yunohost",
      img: "/landing/icons/yuno.png",
      title: "Yunohost page",
      span: ""
    },
  ]
});
</script>

<template>
  <CellCluster shownTitle="Nextcloud apps" listType="SmallList" :cellList="nextcloud" id="next"/>
  <CellCluster shownTitle="YunoHost apps" id="yuno" listType="BigList" :cellList="yuno"/>
  <CellCluster shownTitle="Webapps" id="webapps" listType="BigList" :cellList="webapps"/>
  <CellCluster shownTitle="Miscellaneous" id="misc" listType="SmallList" :cellList="misc"/>
</template>

<style scoped>
* {
  animation: Hewwo 0.75s;
}
</style>