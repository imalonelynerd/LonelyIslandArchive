export function switchTheme(theme) {
    if (theme === "system") {
        const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        switchTheme(isOsDark ? "night" : "day");
        return;
    }
    if (theme === "time") {
        timeTheme();
        return;
    }
    document.querySelector('html').dataset.theme = `theme-${theme}`;
}

export function timeTheme() {
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