<script setup>

import CellCluster from "@/components/cellClusters/CellCluster.vue";
import {ref} from "vue";
import nestedPath from "@/assets/json/nestedPath.json";
import {changeLoc} from "@/assets/js/menuUtils";


const projects = ref({
  links: [
    {
      onc: function () {
        changeLoc("https://github.com/imalonelynerd/TalismanGTK");
      },
      img: `${nestedPath.path}captures/talisman.webp`,
      title: "Talisman",
      desc: "A YuGiOh! companion app",
      code: ""
    },
    {
      onc: function () {
        changeLoc("https://github.com/imalonelynerd/Talisman");
      },
      img: `${nestedPath.path}captures/talismanweb.webp`,
      title: "Talisman Web",
      desc: "The web version of Talisman, made with VueJS",
      code: ""
    },
    {
      onc: function () {
        changeLoc("https://github.com/imalonelynerd/PrettyHeroes");
      },
      img: `${nestedPath.path}captures/prettyheroes.webp`,
      title: "PrettyHeroes",
      desc: "An About Me page generator",
      code: ""
    },
    {
      onc: function () {
        changeLoc("https://github.com/imalonelynerd/EventHorizon");
      },
      img: `${nestedPath.path}captures/event.webp`,
      title: "EventHorizon",
      desc: "A grid-like timetable, made with VueJS",
      code: ""
    },
    {
      onc: function () {
        changeLoc("https://github.com/imalonelynerd/DeathCount");
      },
      img: `${nestedPath.path}captures/deathcount.webp`,
      title: "DeathCount",
      desc: "A vicious Discord counting bot",
      code: ""
    },
  ]
});
const contrib = ref({
  links: [
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
        changeLoc("https://invent.kde.org/pinheiro/oxygen2");
      },
      img: `${nestedPath.path}icons/oxygen.webp`,
      title: "Oxygen²",
      desc: "I'm currently working on it...",
      code: "invent.kde.org/pinheiro/oxygen2"
    },
    {
      onc: function () {
        changeLoc("https://goober.cloud");
      },
      img: `${nestedPath.path}icons/goober.webp`,
      title: "GooberCloud",
      desc: "I made this website",
      code: "goober.cloud"
    }
  ]
});

const icons = ref({
  links: [
    {
      img: `${nestedPath.path}gallery/icons/tal.webp`,
      title: "Talisman icon",
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/Icons/Talisman/")
      }
    },
    {
      img: `${nestedPath.path}gallery/icons/anki.webp`,
      title: "Anki icons concept",
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/Icons/Anki/")
      }
    },
    {
      img: `${nestedPath.path}gallery/icons/val.webp`,
      title: "Valent icon concept",
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/Icons/Valent/" +
            "")
      }
    },
    {
      img: `${nestedPath.path}gallery/icons/dol.webp`,
      title: "KDE icons concept",
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/Icons/Breeze%20concept%20icons/")
      }
    },
    {
      img: `${nestedPath.path}gallery/icons/gaia.webp`,
      title: "Gaia icon pack",
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/Icons/Gaia%20icons/")
      }
    },
    {
      img: `${nestedPath.path}gallery/icons/island.webp`,
      title: "LonelyIsland icons",
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/LonelyIsland/Icons/")
      }
    },
    {
      img: `${nestedPath.path}gallery/icons/tools.webp`,
      title: "Talisman \"tools\" icons",
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/Icons/Talisman%20tools/")
      }
    },
    {
      img: `${nestedPath.path}gallery/icons/da.webp`,
      title: "DeviantArt icon concept",
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/Icons/DeviantArt/")
      }
    }
  ]
});

const wallpy = ref({
  links: [
    {
      img: `${nestedPath.path}gallery/wallpapers/clairvoyantw.webp`,
      title: "\"Blur\" wallpaper",
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/Wallpapers/Blur%20wallpapers/")
      }
    },
    {
      img: `${nestedPath.path}images/day.webp`,
      title: "LonelyIsland wallpapers",
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/LonelyIsland/Backgrounds/")
      }
    },
    {
      img: `${nestedPath.path}gallery/wallpapers/playground.webp`,
      title: "\"Playground\" wallpaper",
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/Wallpapers/Playground/")
      }
    }
  ]
});
const concepts = ref({
  links: [
    {
      img: `${nestedPath.path}gallery/concepts/desk.webp`,
      title: "Desktop concept",
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/Concepts/Desktop%20concept/")
      }
    },
    {
      img: `${nestedPath.path}gallery/concepts/tel.webp`,
      title: "Phone volume slider concept",
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/Concepts/Phone%20concept/")
      }
    },
    {
      img: `${nestedPath.path}gallery/concepts/lock1.webp`,
      title: "Desktop lockscreen concept",
      onc: function () {
        changeLoc("https://files.imalonelynerd.fr/Concepts/Lockscreen%20concept/")
      }
    }
  ]
});




</script>

<template>
  <CellCluster :cellList="projects" listType="ImageList" shownTitle="Projects"/>
  <!--CellCluster :cellList="contrib" listType="BigList" shownTitle="Contributions"/-->
  <CellCluster :cellList="icons" list-type="GalleryList" shown-title="Designs : Icons"/>
  <CellCluster :cellList="wallpy" list-type="GalleryList" shown-title="Designs : Wallpapers"/>
  <CellCluster :cellList="concepts" list-type="GalleryList" shown-title="Designs : Concepts"/>

</template>

<style scoped>
div {
  animation: Hewwo ease-out 0.75s;

}
</style>