
const pswe = document.querySelector("#psw");
const email = pswe.querySelector("#nome");


function login(){
    let info ={
        "username": nome.value,
        "password": pswe.value
    }

    fetch('http://10.87.207.2:3000/login',{
    "method": "POST",
     "headers":{'Content-Type': 'application/json'
    },
      "body": JSON.stringify(info)
     
    })
    .then(res => {return res.json() })
    .then(data => {
        if(data[0] != undefined){
            alert(" Sucesso !");
            localStorage.setItem("info",JSON.stringify(info));
            window.location.href = "../home/index.html";
     }else{
      alert('erro')
     }
     })
    }

