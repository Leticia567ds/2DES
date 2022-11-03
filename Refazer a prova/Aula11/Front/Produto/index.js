const username2 = document.querySelector("#nome")
const imguser = document.querySelector("#perfil")

var userInfo = JSON.parse(localStorage.getItem("info"));
var item

username2.innerHTML = userInfo.username;
imguser.src = "../../docs/assets/avatar.png"

fetch("http://localhost:3000/patrimonio/itens/",{
    
})

