export function currentPage(route) {
    let path = route.path;
    if (path.endsWith("private")) {
        return "PRIVATE";
    }
    return "HOME";
}

export function getURLValues() {

    let search = window.location.search.replace(/^\?/, '').replace(/\+/g, ' ');
    let values = {};

    if (search.length) {
        let part, parts = search.split('&');

        for (let i = 0, iLen = parts.length; i < iLen; i++) {
            part = parts[i].split('=');
            values[part[0]] = window.decodeURIComponent(part[1]);
        }
    }
    return values;
}