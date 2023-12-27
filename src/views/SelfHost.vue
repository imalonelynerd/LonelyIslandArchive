<script setup>

import CellCluster from "@/components/cellClusters/CellCluster.vue";
import nestedPath from "@/assets/json/nestedPath.json"

import {ref} from "vue";
import {changeLoc} from "@/assets/js/menuUtils";

const nextcloud = ref({
  links: [
    {
      onc: function () {
        changeLoc("https://cloud.imalonelynerd.fr/apps/files/");
      },
      img: `${nestedPath.path}icons/files.webp`,
      title: "Files",
      span: ""
    },
    {
      onc: function () {
        changeLoc("https://cloud.imalonelynerd.fr/apps/calendar/");
      },
      img: `${nestedPath.path}icons/calendar.webp`,
      title: "Calendar",
      span: ""
    },
    {
      onc: function () {
        changeLoc("https://cloud.imalonelynerd.fr/apps/music/");
      },
      img: `${nestedPath.path}icons/music.webp`,
      title: "Music",
      span: ""
    },
    {
      onc: function () {
        changeLoc("https://cloud.imalonelynerd.fr/apps/deck/");
      },
      img: `${nestedPath.path}icons/deck.webp`,
      title: "Deck",
      span: ""
    },
    {
      onc: function () {
        changeLoc("https://cloud.imalonelynerd.fr/apps/nextpod/");
      },
      img: `${nestedPath.path}icons/podcast.webp`,
      title: "NextPod",
      span: ""
    },
    {
      onc: function () {
        changeLoc("https://cloud.imalonelynerd.fr/apps/tasks/");
      },
      img: `${nestedPath.path}icons/tasks.webp`,
      title: "Tasks",
      span: ""
    },
    {
      onc: function () {
        changeLoc("https://cloud.imalonelynerd.fr/apps/news/");
      },
      img: `${nestedPath.path}icons/news.webp`,
      title: "News",
      span: ""
    }
  ]
});
const yuno = ref({
  links: [
    {
      onc: function () {
        changeLoc("https://cloud.imalonelynerd.fr/");
      },
      img: `${nestedPath.path}icons/nextcloud.webp`,
      title: "Nextcloud",
      desc: "A small personal cloud <b>(private)</b>",
      code: "cloud.imalonelynerd.fr"
    },
    {
      onc: function () {
        changeLoc("https://send.imalonelynerd.fr/");
      },
      img: `${nestedPath.path}icons/send.webp`,
      title: "Send",
      desc: "Send data to anyone ! <b>(private)</b>",
      code: "send.imalonelynerd.fr"
    },
    {
      onc: function () {
        changeLoc("https://mail.imalonelynerd.fr/");
      },
      img: `${nestedPath.path}icons/mail.webp`,
      title: "Roundcube",
      desc: "A (local) email client <b>(private)</b>",
      code: "mail.imalonelynerd.fr"
    },
    {
      onc: function () {
        changeLoc("https://imalonelynerd.fr/speed");
      }, img: `${nestedPath.path}icons/speed.webp`,
      title: "LibreSpeed",
      desc: "A lightweight connection speed tester",
      code: "imalonelynerd.fr/speed"
    }
  ]
});
const webapps = ref({
  links: [
    {
      onc: function () {
        changeLoc("https://talisman.imalonelynerd.fr");
      }, img: `${nestedPath.path}icons/talisman.webp`,
      title: "Talisman",
      desc: "<b>New version ! </b>A YuGiOh! companion app",
      code: "talisman.imalonelynerd.fr"
    },
    {
      onc: function () {
        changeLoc("https://horizon.imalonelynerd.fr/");
      }, img: `${nestedPath.path}icons/calendar.webp`,
      title: "EventHorizon",
      desc: "A timetable for university",
      code: "horizon.imalonelynerd.fr"
    },
    {
      onc: function () {
        changeLoc("https://heroes.imalonelynerd.fr/");
      }, img: `${nestedPath.path}icons/prettyheroes.webp`,
      title: "PrettyHeroes",
      desc: "A simple About Me page generator",
      code: "heroes.imalonelynerd.fr"
    },
    {
      onc: function () {
        changeLoc("https://talisman.imalonelynerd.fr/legacy");
      }, img: `${nestedPath.path}icons/talisman.webp`,
      title: "Talisman (legacy)",
      desc: "A YuGiOh! companion app",
      code: "talisman.imalonelynerd.fr/legacy"
    },
  ]
});
const misc = ref({
  links: [
    {
      onc: function () {
        changeLoc("https://imalonelynerd.fr/yunohost");
      }, img: `${nestedPath.path}icons/yuno.webp`,
      title: "Yunohost page",
      span: "(private)"
    },
    {
      onc: function () {
        changeLoc("https://imalonelynerd.fr/yunohost/admin/");
      },
      img: `${nestedPath.path}icons/yuno.webp`,
      title: "Admin page",
      span: "(private)"
    },
    {
      onc: function () {
        changeLoc("https://imalonelynerd.fr/dash/");
      },
      img: `${nestedPath.path}icons/dash.webp`,
      title: "LinuxDash",
      span: "(private)"
    }
  ]
});
</script>

<template>
  <CellCluster :cellList="nextcloud" listType="SmallList" shownTitle="Nextcloud apps"/>
  <CellCluster :cellList="yuno" listType="BigList" shownTitle="YunoHost apps"/>
  <CellCluster :cellList="webapps" listType="BigList" shownTitle="Webapps"/>
  <CellCluster :cellList="misc" listType="SmallList" shownTitle="Miscellaneous"/>
</template>

<style scoped>
div {
  animation: Hewwo ease-out 0.75s;

}
</style>