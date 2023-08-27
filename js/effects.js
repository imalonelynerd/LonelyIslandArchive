/*function showText() {
    $(this).find("p").show();
    return true;
}

function hideText() {
    $(this).find("p").hide();
    return true;
}

function hideShowText(id) {
    $("#" + id).hover(showText, hideText);
}

hideShowText("discord");
hideShowText("open");
hideShowText("theme"); */

function showTheme() {
    $(".menu#m1").show().fadeIn(250);
}

function showLinks() {
    $(".menu#m2").show().fadeIn(250);
}

$(".menu").on("click", function () {
    $(this).fadeOut(250).hide();
    return true;
});

function copyText(text){
    navigator.clipboard.writeText(text);
    return true;
}