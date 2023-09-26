export function currentPage(route) {
    let path = route.path;
    if (path.endsWith('/')) {
        return "HOME";
    }
    if (path.endsWith("/private")) {
        return "PRIVATE";
    }
    return "WHAT";
}
