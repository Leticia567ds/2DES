const container = document.querySelector(".container")
nav = container.querySelector(".nav")
toggle = container.querySelector(".toggle")

toggle.addEventListener("click",() =>{
    nav.classList.toggle("close")
})