<script setup>

import CellCluster from "@/components/cellClusters/CellCluster.vue";
import nestedPath from "@/assets/json/nestedPath.json"

import {ref} from "vue";
import PrivateTitle from "@/components/Titles/PrivateTitle.vue";
import {changeLoc} from "@/assets/js/menuUtils";

const nextcloud = ref({
  links: [
    {
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/apps/files/");
      },
      img: `${nestedPath.path}icons/files.png`,
      title: "Files",
      span: ""
    },
    {
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/apps/calendar/");
      },
      img: `${nestedPath.path}icons/calendar.png`,
      title: "Calendar",
      span: ""
    },
    {
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/apps/music/");
      },
      img: `${nestedPath.path}icons/music.png`,
      title: "Music",
      span: ""
    },
    {
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/apps/deck/");
      },
      img: `${nestedPath.path}icons/deck.png`,
      title: "Deck",
      span: ""
    },
    {
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/apps/nextpod/");
      },
      img: `${nestedPath.path}icons/podcast.png`,
      title: "NextPod",
      span: ""
    },
    {
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/apps/tasks/");
      },
      img: `${nestedPath.path}icons/tasks.png`,
      title: "Tasks",
      span: ""
    },
    {
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/apps/news/");
      },
      img: `${nestedPath.path}icons/news.png`,
      title: "News",
      span: ""
    }
  ]
})
const yuno = ref({
  links: [
    {
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/");
      },
      img: `${nestedPath.path}icons/nextcloud.png`,
      title: "Nextcloud",
      desc: "A small personal cloud <b>(private)</b>",
      code: "files.imalonelynerd.fr"
    },
    {
      onc: function () {
        changeLoc("https://send.imalonelynerd.fr/");
      },
      img: `${nestedPath.path}icons/send.png`,
      title: "Send",
      desc: "Send data to anyone ! <b>(private)</b>",
      code: "send.imalonelynerd.fr"
    },
    {
      onc: function () {
        changeLoc("https://mail.imalonelynerd.fr/");
      },
      img: `${nestedPath.path}icons/mail.png`,
      title: "Roundcube",
      desc: "Internal (for now) email system <b>(private)</b>",
      code: "mail.imalonelynerd.fr"
    },
    {
      onc: function () {
        changeLoc("https://imalonelynerd.fr/speed");
      }, img: `${nestedPath.path}icons/speed.png`,
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
        changeLoc("https://imalonelynerd.fr/landing");
      }, img: `${nestedPath.path}icons/landing.png`,
      title: "Landing page",
      desc: "The very page you're on right now",
      code: "imalonelynerd.fr/landing"
    },
    {
      onc: function () {
        changeLoc("https://imalonelynerd.fr/talisman");
      }, img: `${nestedPath.path}icons/talisman.png`,
      title: "Talisman",
      desc: "A YuGiOh! companion app",
      code: "imalonelynerd.fr/talisman"
    },
    {
      onc: function () {
        changeLoc("https://imalonelynerd.fr/edt");
      }, img: `${nestedPath.path}icons/calendar.png`,
      title: "EventHorizon",
      desc: "A timetable for university",
      code: "imalonelynerd.fr/edt"
    },
    {
      onc: function () {
        changeLoc("https://heroes.imalonelynerd.fr/");
      }, img: `${nestedPath.path}icons/prettyheroes.png`,
      title: "PrettyHeroes",
      desc: "A simple About Me page generator",
      code: "heroes.imalonelynerd.fr"
    }
  ]
});
const misc = ref({
  links: [
    {
      onc: function () {
        changeLoc("https://imalonelynerd.fr/yunohost");
      }, img: `${nestedPath.path}icons/yuno.png`,
      title: "Yunohost page",
      span: "(private)"
    },
    {
      onc: function () {
        changeLoc("https://imalonelynerd.fr/yunohost/admin/");
      },
      img: `${nestedPath.path}icons/yuno.png`,
      title: "Admin page",
      span: "(private)"
    },
    {
      onc: function () {
        changeLoc("https://imalonelynerd.fr/dash/#/system-status");
      },
      img: `${nestedPath.path}icons/speed.png`,
      title: "LinuxDash",
      span: "(private)"
    }
  ]
});
</script>

<template>
  <PrivateTitle/>
  <CellCluster shownTitle="Nextcloud apps" listType="SmallList" :cellList="nextcloud" id="next"/>
  <CellCluster shownTitle="YunoHost apps" id="yuno" listType="BigList" :cellList="yuno"/>
  <CellCluster shownTitle="Webapps" id="webapps" listType="BigList" :cellList="webapps"/>
  <CellCluster shownTitle="Miscellaneous" id="misc" listType="SmallList" :cellList="misc"/>
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