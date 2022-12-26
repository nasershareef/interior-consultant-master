const navListBar = document.querySelector("#nav-bar-list");
const navList = document.querySelector(".item-list");

navListBar.addEventListener("click", function(e){
    navList.classList.toggle("hide")
    console.log(e)
})