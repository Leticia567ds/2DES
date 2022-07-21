// var texto = document.getElementsByTagName("h1");
// //console.log(texto);

// var Titulo = document.getElementById("Titulo");

//  var aluno = {
//     nome: "Eu",
//     matricula:324535
//  };

//  Titulo.innerHTML = `Nome : ${aluno.nome} </br> Matricula : ${aluno.matricula}`;

//   Titulo.style.color = "green";
// //  Titulo.style.margin = "20px";

// //Substituir
// //Retorna vetor
// var mensagem = document.getElementById("mensagem");
// mensagem.style.display = "block";
// //Ppr esse
// document.querySelector();
// document.querySelectotAll();

// //Retorna um elemento
// var Titulo2 = document.querySelector("#Titulo");
// var div = document.querySelectorAll(".divisao");//pega todos os elementos
// var msg = document.querySelector("h1");
// //Retorna o elemento no console
// console.log(div);

var busca = document.querySelector("#busca");
var linhas = document.querySelectorAll("tr");

var btBusca =  document.querySelector("button");

btBusca.addEventListener("click", buscarNome);
busca.addEventListener("keyup", buscarNome);
// var linhas = document.querySelectorAll("tr");  
function buscarNome(){

    console.log(busca.value);
    let encontrei = false;

    linhas.forEach((linha) => {
        let temp = linha.querySelector("td");
        if(temp != null){
            // if(temp.innerHTML.toLocaleLowerCase() == busca.value.toLocaleLowerCase()) {
            //     alert("encontrei");
            //     encontrei = true;

            //     linha.style.fontWeight = "bold";
            //     linha.style.color = "purple";
            // }
            if(temp.innerHTML.toLocaleLowerCase().includes(busca.value.toLocaleLowerCase())){
                linha.style.display = "table-row";
            }else{
            linha.style.display = "none";
        }
        }
        //----------------------------------
        
    });
}

//     if(encontrei == false) alert("Não encontrei");
// }

// //percorrer vetor


// let v1 = 1;
// let v2 = "1";

// if(v1 !== v2){
//     console.log("Não somos iguais");
// }
