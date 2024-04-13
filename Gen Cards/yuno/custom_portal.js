/*
===============================================================================
 This JS file may be used to customize the YunoHost user portal *and* also
 will be loaded in all app pages if the app nginx's conf does include the
 appropriate snippet.

 You can monkeypatch init_portal (loading of the user portal) and
 init_portal_button_and_overlay (loading of the button and overlay...) to do
 custom stuff
===============================================================================
*/

/*
 * Monkeypatch init_portal to customize the app tile style
 *
init_portal_original = init_portal;
init_portal = function()
{
    init_portal_original();
    // Some stuff here
}
*/

/*
 * Monkey patching example to do custom stuff when loading inside an app
 *
init_portal_button_and_overlay_original = init_portal_button_and_overlay;
init_portal_button_and_overlay = function()
{
    init_portal_button_and_overlay_original();
    // Custom stuff to do when loading inside an app
}
*/

{
    init_portal_original = init_portal;
    init_portal = function () {
        init_portal_original();
        setThemeAccordingToTime()
        setImagesForApps()
    }
}

let apps = {
    "EventHorizon": "https://www.imalonelynerd.fr/icons/calendar.png",
    "LibreSpeed": "https://www.imalonelynerd.fr/icons/speed.png",
    "LinuxDash": "https://www.imalonelynerd.fr/icons/dash.png",
    "LonelyIsland": "https://www.imalonelynerd.fr/icons/landing.png",
    "Nextcloud": "https://www.imalonelynerd.fr/icons/nextcloud.png",
    "PrettyHeroes": "https://www.imalonelynerd.fr/icons/prettyheroes.png",
    "Roundcube": "https://www.imalonelynerd.fr/icons/mail.png",
    "Send": "https://www.imalonelynerd.fr/icons/send.png",
    "Talisman": "https://www.imalonelynerd.fr/icons/talisman.png",
    "Navidrome": "https://www.imalonelynerd.fr/icons/navidrome.png"
}

let theme;

function setThemeAccordingToTime() {
    let time = new Date().getHours();
    let portal = document.getElementsByClassName("ynh-user-portal")[0];
    if (time > 0 && time <= 7) {
        document.querySelector('html').dataset.theme = `comet`;
        theme = 3;
    } else if (time > 7 && time <= 12) {
        document.querySelector('html').dataset.theme = `day`;
        theme = 0;
    } else if (time > 12 && time <= 17) {
        document.querySelector('html').dataset.theme = `twilight`;
        theme = 1;
    } else {
        document.querySelector('html').dataset.theme = `night`;
        theme = 2;
    }
}

function switchTheme() {
    theme = (theme + 1) % 4;
    let img = document.getElementById("theme-sw");
    switch (theme) {
        case 0:
            document.querySelector('html').dataset.theme = `theme-day`;
            img.src = "https://www.imalonelynerd.fr/icons/theme/twilight.png"
            break;
        case 1:
            document.querySelector('html').dataset.theme = `theme-twilight`;
            img.src = "https://www.imalonelynerd.fr/icons/theme/night.png"
            break;
        case 2:
            document.querySelector('html').dataset.theme = `theme-night`;
            img.src = "https://www.imalonelynerd.fr/icons/theme/comet.png"
            break;
        default:
            document.querySelector('html').dataset.theme = `theme-comet`;
            img.src = "https://www.imalonelynerd.fr/icons/theme/day.png"
            break;
    }
}

function setImagesForApps() {
    let elem = document.getElementsByClassName("listing-apps")[0];
    let elems = elem.children;
    for (let e = 0; e < elems.length; e += 1) {
        if (elems[e] !== undefined) {
            let el = elems[e].children[0];
            if(apps[el.attributes["data-appname"].nodeValue] !== undefined){
                el.getElementsByClassName("first-letter")[0].remove();
                let img = new Image();
                img.src = apps[el.attributes["data-appname"].nodeValue];
                img.classList.add("app-image");
                el.prepend(img);
            }
        }
    }
    let themebtn = document.createElement("li");
    themebtn.innerHTML = `<a class="app-tile" onclick="switchTheme()" data-appname="Theme"><img src="https://www.imalonelynerd.fr/icons/theme.png" class="app-image" id="theme-sw"><span class="name">Switch theme</span></a>`
    elem.appendChild(themebtn)
}


