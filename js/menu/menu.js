
let contHeader_blockNav_menu = document.querySelector("#contHeader_blockNav_menu")
let btn = document.querySelector(".hamburger")

btn.addEventListener("click", e =>{
    contHeader_blockNav_menu.classList.toggle("contHeader_blockNav_menu_JS")
})