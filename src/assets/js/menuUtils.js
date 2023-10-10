export function showMenuUnusual(id) {
    let elem = document.getElementById(id);
    if (elem === null) {
        return false;
    }
    elem.style.display = "block";
}