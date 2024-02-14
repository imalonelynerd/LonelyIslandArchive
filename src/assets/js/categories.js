import {changeLoc, copyText, mailTo} from "@/assets/js/menuUtils";
import nestedPath from "@/assets/json/nestedPath.json";

//Links
export const contact = [
    {
        onc: function () {
            copyText('imalonelynerd')
        },
        img: `${nestedPath.path}icons/socials/discord.png`,
        title: "Discord",
        span: "imalonelynerd",
        style: "#5D76FF"
    },
    {
        onc: function () {
            mailTo("mailto:imalonelynerd@gmail.com");
        },
        img: `${nestedPath.path}icons/mail.png`,
        title: "Mail",
        span: "imalonelynerd@gmail.com",
    },
    {
        onc: function () {
            changeLoc("https://github.com/imalonelynerd/");
        },
        img: `${nestedPath.path}icons/socials/github.png`,
        title: "GitHub",
        span: "imalonelynerd",
        style: "#202020"
    },
    {
        onc: function () {
            changeLoc("https://mastodon.social/@imalonelynerd/");
        },
        img: `${nestedPath.path}icons/socials/mastodon.png`,
        title: "Mastodon",
        span: "@imalonelynerd@mastodon.social",
        style: "#6364FF"
    },
    {
        onc: function () {
            changeLoc("https://reddit.com/u/smpl_deb");
        },
        img: `${nestedPath.path}icons/socials/reddit.png`,
        title: "Reddit",
        span: "u/smpl_deb",
        style: "#FF5709"
    },
    {
        onc: function () {
            changeLoc("https://www.figma.com/@imalonelynerd");
        },
        img: `${nestedPath.path}icons/socials/figma.png`,
        title: "Figma",
        span: "@imalonelynerd",
        style: "#202020"
    },
    {
        onc: function () {
            changeLoc("https://flickr.com/photos/199989098@N04");
        },
        img: `${nestedPath.path}icons/socials/flickr.png`,
        title: "Flickr",
        span: "imalonelynerd",
        style: "#202023"
    },
    {
        onc: function () {
            changeLoc("https://www.tumblr.com/imalonelynerd");
        },
        img: `${nestedPath.path}icons/socials/tumblr.png`,
        title: "Tumblr",
        span: "imalonelynerd",
        style: "#266CBE"
    },
    {
        onc: function () {
            changeLoc("https://twitter.com/wormdramaVEVO");
        },
        img: `${nestedPath.path}icons/socials/twitter.png`,
        title: "Twitter",
        span: "@wormdramaVEVO",
        style: "#24A3F1"
    },
    {
        onc: function () {
            changeLoc("https://heroes.imalonelynerd.fr/imalonelynerd");
        },
        img: `${nestedPath.path}icons/prettyheroes.png`,
        title: "PrettyHeroes",
        span: "imalonelynerd",
        style: "#FF5263"
    }
];

//Credits
export const wallpyli = [
    {
        img: `${nestedPath.path}images/day.png`,
        title: "Day, by Nerd",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/LonelyIsland/Backgrounds/day.jpg")
        }
    },
    {
        img: `${nestedPath.path}images/twilight.png`,
        title: "Twilight, by Nerd",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/LonelyIsland/Backgrounds/twilight.jpg")
        }
    },
    {
        img: `${nestedPath.path}images/night.png`,
        title: "Night, by Nerd",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/LonelyIsland/Backgrounds/noght.jpg")
        }
    },
    {
        img: `${nestedPath.path}images/comet.png`,
        title: "Comet, by Nerd",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/LonelyIsland/Backgrounds/comet.jpg")
        }
    },
];

//Projects
export const projects = [
    {
        onc: function () {
            changeLoc("https://github.com/imalonelynerd/TalismanGTK");
        },
        img: `${nestedPath.path}icons/talismangtk.png`,
        title: "Talisman",
        desc: "A YuGiOh! companion app",
        code: "",
        colora: "#f9da6b",
        colorb: "#f59a11"
    },
    {
        onc: function () {
            changeLoc("https://github.com/imalonelynerd/Talisman");
        },
        img: `${nestedPath.path}icons/talisman.png`,
        title: "Talisman Web",
        desc: "The web version of Talisman, made with VueJS",
        code: "",
        colora: "#369EFF",
        colorb: "#1151F5"
    },
    {
        onc: function () {
            changeLoc("https://github.com/imalonelynerd/PrettyHeroes");
        },
        img: `${nestedPath.path}icons/prettyheroes.png`,
        title: "PrettyHeroes",
        desc: "An About Me page generator",
        code: "",
        colora: "#FF5263",
        colorb: "#BA2C3A"
    },
    {
        onc: function () {
            changeLoc("https://github.com/imalonelynerd/EventHorizon");
        },
        img: `${nestedPath.path}icons/calendar.png`,
        title: "EventHorizon",
        desc: "A grid-like timetable, made with VueJS",
        code: "",
        colora: "#957FFF",
        colorb: "#5532FF"
    },
    {
        onc: function () {
            changeLoc("https://github.com/imalonelynerd/DeathCount");
        },
        img: `${nestedPath.path}icons/deathcount.png`,
        title: "DeathCount",
        desc: "A vicious Discord counting bot",
        code: "",
        colora: "#004397",
        colorb: "#003051"
    },
];
export const icons = [
    {
        img: `${nestedPath.path}gallery/icons/tal.png`,
        title: "Talisman icon",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/Icons/Talisman/")
        }
    },
    {
        img: `${nestedPath.path}gallery/icons/anki.png`,
        title: "Anki icons concept",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/Icons/Anki/")
        }
    },
    {
        img: `${nestedPath.path}gallery/icons/val.png`,
        title: "Valent icon concept",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/Icons/Valent/" +
                "")
        }
    },
    {
        img: `${nestedPath.path}gallery/icons/dol.png`,
        title: "KDE icons concept",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/Icons/Breeze%20concept%20icons/")
        }
    },
    {
        img: `${nestedPath.path}gallery/icons/gaia.png`,
        title: "Gaia icon pack",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/Icons/Gaia%20icons/")
        }
    },
    {
        img: `${nestedPath.path}gallery/icons/island.png`,
        title: "LonelyIsland icons",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/LonelyIsland/Icons/")
        }
    },
    {
        img: `${nestedPath.path}gallery/icons/tools.png`,
        title: "Talisman \"tools\" icons",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/Icons/Talisman%20tools/")
        }
    },
    {
        img: `${nestedPath.path}gallery/icons/da.png`,
        title: "DeviantArt icon concept",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/Icons/DeviantArt/")
        }
    }
];
export const wallpy = [
    {
        img: `${nestedPath.path}gallery/wallpapers/clairvoyantw.png`,
        title: "\"Blur\" wallpapers",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/Wallpapers/Blur%20wallpapers/")
        }
    },
    {
        img: `${nestedPath.path}images/day.png`,
        title: "LonelyIsland wallpapers",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/LonelyIsland/Backgrounds/")
        }
    },
    {
        img: `${nestedPath.path}gallery/wallpapers/playground.png`,
        title: "\"Playground\" wallpapers",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/Wallpapers/Playground/")
        }
    }
];
export const concepts = [
    {
        img: `${nestedPath.path}gallery/concepts/desk.png`,
        title: "Desktop concept",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/Concepts/Desktop%20concept/")
        }
    },
    {
        img: `${nestedPath.path}gallery/concepts/tel.png`,
        title: "Phone volume slider concept",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/Concepts/Phone%20concept/")
        }
    },
    {
        img: `${nestedPath.path}gallery/concepts/lock1.png`,
        title: "Desktop lockscreen concept",
        onc: function () {
            changeLoc("https://files.imalonelynerd.fr/Concepts/Lockscreen%20concept/")
        }
    }
];

//SelfHost
export const nextcloud = [
    {
        onc: function () {
            changeLoc("https://cloud.imalonelynerd.fr/apps/files/");
        },
        img: `${nestedPath.path}icons/files.png`,
        title: "Files",
        span: ""
    },
    {
        onc: function () {
            changeLoc("https://cloud.imalonelynerd.fr/apps/calendar/");
        },
        img: `${nestedPath.path}icons/nextcal.png`,
        title: "Calendar",
        span: ""
    },
    {
        onc: function () {
            changeLoc("https://cloud.imalonelynerd.fr/apps/tasks/");
        },
        img: `${nestedPath.path}icons/tasks.png`,
        title: "Tasks",
        span: ""
    }
];
export const yuno = [
    {
        onc: function () {
            changeLoc("https://cloud.imalonelynerd.fr/");
        },
        img: `${nestedPath.path}icons/nextcloud.png`,
        title: "Nextcloud",
        desc: "A small personal cloud <b>(private)</b>",
        code: "cloud.imalonelynerd.fr"
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
        desc: "A (local) email client <b>(private)</b>",
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
];
export const webapps = [
    {
        onc: function () {
            changeLoc("https://talisman.imalonelynerd.fr");
        }, img: `${nestedPath.path}icons/talisman.png`,
        title: "Talisman",
        desc: "<b>New version ! </b>A YuGiOh! companion app",
        code: "talisman.imalonelynerd.fr"
    },
    {
        onc: function () {
            changeLoc("https://horizon.imalonelynerd.fr/");
        }, img: `${nestedPath.path}icons/calendar.png`,
        title: "EventHorizon",
        desc: "A timetable for university",
        code: "horizon.imalonelynerd.fr"
    },
    {
        onc: function () {
            changeLoc("https://heroes.imalonelynerd.fr/");
        }, img: `${nestedPath.path}icons/prettyheroes.png`,
        title: "PrettyHeroes",
        desc: "A simple About Me page generator",
        code: "heroes.imalonelynerd.fr"
    },
    {
        onc: function () {
            changeLoc("https://talisman.imalonelynerd.fr/legacy");
        }, img: `${nestedPath.path}icons/talisman.png`,
        title: "Talisman (legacy)",
        desc: "A YuGiOh! companion app",
        code: "talisman.imalonelynerd.fr/legacy"
    },
];
export const misc = [
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
            changeLoc("https://imalonelynerd.fr/dash/");
        },
        img: `${nestedPath.path}icons/dash.png`,
        title: "LinuxDash",
        span: "(private)"
    }
];
