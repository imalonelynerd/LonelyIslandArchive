import {getCookie, setCookie} from "@/assets/js/cookieUtils.js";

export function switchTheme(theme) {
    if (theme === "system") {
        const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        switchTheme(isOsDark ? "day" : "night");
        setCookie('theme', 'system');
        return;
    }
    if (theme === "time") {
        timeTheme();
        setCookie('theme', 'time');
        return;
    }
    if (theme === "random") {
        let th;
        do {
            th = ["day", "twilight", "night", "comet"][getRandomIntInclusive(0, 3)];
        } while (th === document.querySelector('html').dataset.theme);
        switchTheme(th);
        return;
    }
    document.querySelector('html').dataset.theme = theme;
    setCookie('theme', theme);
}

export function getTheme() {
    return getCookie("theme");
}

export function setThemeFromCookie() {
    let cookie = getCookie("theme");
    if (cookie === "") {
        switchTheme("time");
    } else {
        switchTheme(cookie);
    }
}

function timeTheme() {
    let time = new Date().getHours();
    if (time > 0 && time <= 7) {
        switchTheme(`comet`);
    } else if (time > 7 && time <= 12) {
        switchTheme(`day`);
    } else if (time > 12 && time <= 17) {
        switchTheme(`twilight`);
    } else {
        switchTheme(`night`);
    }
}

function getRandomIntInclusive(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}
