function switchTheme(theme) {
    if (theme === "system") {
        const isOsDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
        switchTheme(isOsDark ? "dark" : "light");
    } else {
        $("#icon").attr("src", `img/icon-${theme}.png`);
        document.querySelector('html').dataset.theme = `theme-${theme}`;
        document.cookie = `theme=${theme}`;
    }
    $(".menu#m1").hide();
    return true;
}

/*function switchThemeAlt() {
    if (document.cookie === "theme=dark") {
        switchTheme("light");
    } else {
        switchTheme("dark");
    }
}*/

switch (document.cookie) {
    case "theme=light":
        switchTheme("light");
        break;
    default:
        switchTheme("dark");
        break;
}