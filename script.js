let htmltag = document.querySelector("#htmltag");
let filterSVG = document.querySelector("#filter-SVG");

function check(){
    htmltag.classList.toggle("light");
    filterSVG.classList.toggle("light");
    htmltag.setAttribute("data-theme", htmltag.classList.contains("light") ? "emerald" : "business");
    filterSVG.setAttribute("src", htmltag.classList.contains("light") ? "assets/filter-black.svg" : "assets/filter-white.svg");
}