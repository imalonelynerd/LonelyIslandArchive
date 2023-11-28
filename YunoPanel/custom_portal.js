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
    "EventHorizon": "https://www.imalonelynerd.fr/icons/calendar.webp",
    "LibreSpeed": "https://www.imalonelynerd.fr/icons/speed.webp",
    "LinuxDash": "https://www.imalonelynerd.fr/icons/dash.webp",
    "LonelyIsland": "https://www.imalonelynerd.fr/icons/landing.webp",
    "Nextcloud": "https://www.imalonelynerd.fr/icons/nextcloud.webp",
    "PrettyHeroes": "https://www.imalonelynerd.fr/icons/prettyheroes.webp",
    "Roundcube": "https://www.imalonelynerd.fr/icons/mail.webp",
    "Send": "https://www.imalonelynerd.fr/icons/send.webp",
    "Talisman": "https://www.imalonelynerd.fr/icons/talisman.webp"
}

let theme;

function setThemeAccordingToTime() {
    let time = new Date().getHours();
    let portal = document.getElementsByClassName("ynh-user-portal")[0];
    if (time > 0 && time <= 7) {
        document.querySelector('html').dataset.theme = `theme-comet`;
        theme = 3;
    } else if (time > 7 && time <= 12) {
        document.querySelector('html').dataset.theme = `theme-day`;
        theme = 0;
    } else if (time > 12 && time <= 17) {
        document.querySelector('html').dataset.theme = `theme-dawn`;
        theme = 1;
    } else {
        document.querySelector('html').dataset.theme = `theme-night`;
        theme = 2;
    }
}

function switchTheme() {
    theme = (theme + 1) % 4;
    let img = document.getElementById("theme-sw");
    switch (theme) {
        case 0:
            document.querySelector('html').dataset.theme = `theme-day`;
            img.src = "https://www.imalonelynerd.fr/icons/theme/dawn.webp"
            break;
        case 1:
            document.querySelector('html').dataset.theme = `theme-dawn`;
            img.src = "https://www.imalonelynerd.fr/icons/theme/night.webp"
            break;
        case 2:
            document.querySelector('html').dataset.theme = `theme-night`;
            img.src = "https://www.imalonelynerd.fr/icons/theme/comet.webp"
            break;
        default:
            document.querySelector('html').dataset.theme = `theme-comet`;
            img.src = "https://www.imalonelynerd.fr/icons/theme/day.webp"
            break;
    }
}

function setImagesForApps() {
    let elem = document.getElementsByClassName("listing-apps")[0];
    let elems = elem.children;
    for (let e = 0; e < elems.length; e += 1) {
        if (elems[e] !== undefined) {
            let el = elems[e].children[0];
            el.getElementsByClassName("first-letter")[0].remove();
            let img = new Image();
            img.src = apps[el.attributes["data-appname"].nodeValue];
            img.classList.add("app-image");
            el.prepend(img);
        }
    }
    let themebtn = document.createElement("li");
    themebtn.innerHTML = `<a class="app-tile" onclick="switchTheme()" data-appname="Theme"><img src="https://www.imalonelynerd.fr/icons/theme.webp" class="app-image" id="theme-sw"><span class="name">Switch theme</span></a>`
    elem.appendChild(themebtn)
}


