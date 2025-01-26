function load() {
    updateHeight();
}
function updateHeight() {
    for (const placehold of document.getElementsByClassName('headerPlaceholder')) {
        placehold.style.height = document.getElementsByClassName('header')[0].clientHeight + "px";
    }
}

/*function setcolor(input) {
    //console.log("Changed color to -> " + input);
    document.body.style.backgroundColor = input;
}*/

window.addEventListener("load", load, false);
document.addEventListener('DOMContentLoaded', updateHeight); 
window.addEventListener('resize', updateHeight);