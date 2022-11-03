const pswe = document.querySelector("#psw");
const email = document.querySelector("#email");


function login(){
    let info = {
        "username": email.value,
        "password": pswe.value
    }

   

//O caminho
fetch("http://localhost:3000/patrimonio/login",
{
    "method":"POST",
        "headers": {
            "Content-Type":"application/json"
        },
        "body": JSON.stringify(info)
    })
    .then(res => {return res.json() })
    .then(data => {
        if(data.erro === undefined){
            localStorage.setItem("info", JSON.stringify({"username":data.username, "img":data.img}));

            window.location.href = "../home/";
        }
    })

}

