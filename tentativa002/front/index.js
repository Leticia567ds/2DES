const container = document.querySelector(".container")
nav = container.querySelector(".nav")
toggle = container.querySelector(".toggle")
sub_menu = container.querySelector(".sub-menu")
dropdow = container.querySelector(".dropdow")

toggle.addEventListener("click",() =>{
    nav.classList.toggle("close")
})

dropdow.addEventListener("click",() =>{
    sub_menu.classList.toggle("model")
})