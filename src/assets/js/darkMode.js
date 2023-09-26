export function switchTheme(theme) {
    if (theme === "system") {
        const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        switchTheme(isOsDark ? "night" : "day");
        return;
    }
    document.querySelector('html').dataset.theme = `theme-${theme}`;
    /*document.getElementById("bg")
        .setAttribute(
            "style",
            `background : linear-gradient(180deg,#0000,var(--bg)),url('/images/${theme}.jpg') center center no-repeat`);*/
    document.getElementById("theme").style.display = "none";
}