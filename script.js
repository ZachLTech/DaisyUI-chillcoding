let lightdark = document.querySelector("#LightDark");
let htmltag = document.querySelector("#htmltag");

function check(){
    htmltag.classList.toggle("light");
    htmltag.setAttribute("data-theme", htmltag.classList.contains("light") ? "emerald" : "business");
}

