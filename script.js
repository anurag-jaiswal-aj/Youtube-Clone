var menuIcon = document.querySelector(".menuIcon")
var sideBar = document.querySelector(".sideBar")
var container = document.querySelector(".container")

menuIcon.onclick = function(){
    sideBar.classList.toggle("small-sideBar");
    container.classList.toggle("largeContainer")
}