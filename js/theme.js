const html = document.querySelector('html');
html.dataset.theme = `theme-dark`;

function themeSwitch() {
    let opptheme = html.dataset.theme === "theme-light"?"dark":"light"
    html.dataset.theme = `theme-${opptheme}`;
}