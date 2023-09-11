<script setup>
import Navbar from "./components/Navbar.vue"
import MobileNavbar from "@/components/MobileNavbar.vue";
import Title from "@/components/Title.vue";
import CellCluster from "@/components/CellCluster.vue";
import {ref} from "vue";
import "@/assets/js/randomEffects"
import CustomFooter from "@/components/CustomFooter.vue";

document.querySelector('html').dataset.theme = `theme-dark`;

const nextcloud = ref(
    {
      links: [
        {
          href: "https://files.imalonelynerd.fr/apps/files/",
          img: "images/icons/files.png",
          title: "Files",
          span: ".../apps/files/"
        },
        {
          href: "https://files.imalonelynerd.fr/apps/calendar/",
          img: "images/icons/calendar.png",
          title: "Calendar",
          span: ".../apps/calendar/"
        },
        {
          href: "https://files.imalonelynerd.fr/apps/music/",
          img: "images/icons/music.png",
          title: "Music",
          span: ".../apps/music/"
        },
        {
          href: "https://files.imalonelynerd.fr/apps/deck/",
          img: "images/icons/deck.png",
          title: "Deck",
          span: ".../apps/deck/"
        },
        {
          href: "https://files.imalonelynerd.fr/apps/nextpod/",
          img: "images/icons/podcast.png",
          title: "NextPod",
          span: ".../apps/nextpod/"
        },
        {
          href: "https://files.imalonelynerd.fr/apps/tasks/",
          img: "images/icons/tasks.png",
          title: "Tasks",
          span: ".../apps/tasks/"
        },
        {
          href: "https://files.imalonelynerd.fr/apps/news/",
          img: "images/icons/news.png",
          title: "News",
          span: ".../apps/news/"
        }
      ]
    }
)

const yuno = ref({
      links: [
        {
          href: "https://files.imalonelynerd.fr/",
          img: "images/icons/nextcloud.png",
          title: "Nextcloud",
          desc: "A small personal cloud <b>(private)</b>",
          code: "files.imalonelynerd.fr"
        },
        {
          href: "http://send.imalonelynerd.fr",
          img: "images/icons/send.png",
          title: "Send",
          desc: "Send data to anyone ! <b>(private)</b>",
          code: "send.imalonelynerd.fr"
        },
        {
          href: "http://mail.imalonelynerd.fr",
          img: "images/icons/mail.png",
          title: "Roundcube",
          desc: "Internal (for now) email system <b>(private)</b>",
          code: "mail.imalonelynerd.fr"
        }
      ]
    }
);

const webapps = ref({
      links: [
        {
          href: "http://imalonelynerd.fr/landing/",
          img: "images/icons/landing.png",
          title: "Landing page",
          desc: "The very page you're on right now",
          code: "imalonelynerd.fr/landing"
        },
        {
          href: "http://imalonelynerd.fr/talisman",
          img: "images/icons/talisman.png",
          title: "Talisman",
          desc: "A YuGiOh! companion app",
          code: "imalonelynerd.fr/talisman"
        },
        {
          href: "http://imalonelynerd.fr/edt",
          img: "images/icons/calendar.png",
          title: "Timetable",
          desc: "An uni timetable, powered by SAGBOT",
          code: "imalonelynerd.fr/edt"
        },
        {
          href: "",
          img: "images/icons/gallery.png",
          title: "Gallery",
          desc: "Coming soon...",
          code: "..."
        },
        {
          href: "",
          img: "images/icons/pasta.png",
          title: "YouTube Pasta",
          desc: "Coming soon...",
          code: "..."
        }
      ]
    }
);

const projects = ref({
  links: [
    {
      href: "https://github.com/lonelynerd/Frisk",
      img: "images/icons/frisk.png",
      title: "Frisk",
      desc: "A self-hostable online gallery",
      code: "github.com/lonelynerd/Frisk"
    },
    {
      href: "https://github.com/lonelynerd/Talisman",
      img: "images/icons/talisman.png",
      title: "Talisman",
      desc: "A YuGiOh! companion app",
      code: "github.com/lonelynerd/Talisman"
    },
    {
      href: "https://github.com/lonelynerd/DeathCount",
      img: "images/icons/deathcount.png",
      title: "DeathCount",
      desc: "A Discord counting bot with added vicious features",
      code: "github.com/lonelynerd/DeathCount"
    },
    {
      href: "http://github.com/LunarRat-Dev-Team",
      img: "images/icons/lunarrat.png",
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
      img: "images/icons/oxygen.png",
      title: "Oxygen²",
      desc: "Working on it...",
      code: "invent.kde.org/pinheiro/oxygen2"
    },
    {
      href: "https://blahaj.land",
      img: "images/icons/blahaj.png",
      title: "Blahaj Land",
      desc: "I made this website !",
      code: "blahaj.land"
    },
    {
      href: "https://getcryst.al",
      img: "images/icons/crystal.png",
      title: "Crystal Linux",
      desc: "I made some wallpapers !",
      code: "getcryst.al"
    }
  ]
});

const contact = ref(
    {
      links: [
        {
          onclick: function () {
            copyText('imalonelynerd')
          },
          img: "images/icons/discord.png",
          title: "imalonelynerd",
          span: "#0"
        },
        {
          href: "mailto:imalonelynerd@gmail.com",
          img: "images/icons/mail.png",
          title: "imalonelynerd",
          span: "@gmail.com"
        },
        {
          href: "https://github.com/lonelynerd/",
          img: "images/icons/github.png",
          title: "lonelynerd",
          span: ".github.io"
        },
        {
          href: "https://mastodon.social/@imalonelynerd/",
          img: "images/icons/mastodon.png",
          title: "@imalonelynerd",
          span: "@mastodon.social"
        },
        {
          onclick: function () {
            copyText('@imalonelynerd:matrix.org')
          },
          img: "images/icons/matrix.png",
          title: "@imalonelynerd",
          span: ":matrix.org"
        }
      ]
    }
)

const misc = ref(
    {
      links: [
        {
          href: "https://imalonelynerd.fr/yunohost",
          img: "images/icons/yuno.png",
          title: "Yunohost page",
          span: ""
        },
        {
          href: "https://sean.imalonelynerd.fr/",
          img: "images/icons/misc.png",
          title: "hehe...",
          span: ""
        }
      ]
    }
);


</script>

<template>
  <Navbar alignRight="true"/>
  <MobileNavbar/>
  <Title/>
  <CellCluster shownTitle="Nextcloud apps" listType="SmallList" :cellList="nextcloud" id="next"/>
  <CellCluster shownTitle="YunoHost apps" id="yuno" listType="BigList" :cellList="yuno"/>
  <CellCluster shownTitle="Webapps" id="webapps" listType="BigList" :cellList="webapps"/>
  <CellCluster shownTitle="Projects" id="projects" listType="BigList" :cellList="projects"/>
  <CellCluster shownTitle="Contributions" listType="BigList" :cellList="contrib"/>
  <CellCluster shownTitle="Let's get in touch !" id="contact" listType="SmallList" :cellList="contact"/>
  <CellCluster shownTitle="Miscellaneous" id="misc" listType="SmallList" :cellList="misc"/>
  <CustomFooter/>
</template>

<style scoped>
</style>

