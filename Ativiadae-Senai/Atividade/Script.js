//input
var busca = document.querySelector("#busca")
//botão buscar
var btBuscar = document.querySelector('#btn')
var tr = document.querySelector("#placaRes")


btBuscar.addEventListener("click",validarPlaca)

  function validarPlaca(placa){
   const regexPlacaAntiga = /^[a-zA-Z]{3}[0-9]{4}$/
   const regexPlacaCarro = /^[a-zA-Z]{3}[0-9]{1}[a-zA-Z]{1}[0-9]{2}$/
   const regexPlacaMoto = /^[a-zA-Z]{3}[0-9]{2}[a-zA-Z]{1}[0-9]{1}$/;

   //iput(busca) e value é o valor dentro
   if(regexPlacaAntiga.test(busca.value)){
    tr.style.color= 'green'
    return tr.innerHTML = "Placa válida"

   }else if(regexPlacaCarro.test(busca.value)){
    tr.style.color= 'green'
    return tr.innerHTML= "Placa válida"
   }else if(regexPlacaMoto.test(busca.value)){
    tr.style.color= 'green'
    return tr.innerHTML= "Placa válida"  
   }else{
    tr.style.color= 'red'
    return tr.innerHTML = "Placa inválida"
   
   }
  }

//cpf
var buscar = document.querySelector("#buscar");
var btBuscar = document.querySelector("#btn2");
btBuscar.addEventListener("click", validaCPF);


function validaCPF(cpf) {
  var Cpf = document.getElementById("cpfRes");
  cpf = buscar.value;

  cpf = cpf.replace(".", "");

  cpf = cpf.replace(".", "");

  cpf = cpf.replace("-", "");

  cpf = cpf.replace("/", "");

  if (
    cpf.lenght == 0 ||
    cpf == "00000000000" ||
    cpf == "11111111111" ||
    cpf == "22222222222" ||
    cpf == "33333333333" ||
    cpf == "44444444444" ||
    cpf == "55555555555" ||
    cpf == "66666666666" ||
    cpf == "77777777777" ||
    cpf == "88888888888" ||
    cpf == "99999999999"
  ) {
    cpfRes.style.color= 'purple'
    return (cpfRes.innerHTML = "inválido");
  } else {
    var soma = 0;
    soma = soma + parseInt(cpf.substring(0, 1)) * 10;
    soma = soma + parseInt(cpf.substring(1, 2)) * 9;
    soma = soma + parseInt(cpf.substring(2, 3)) * 8;
    soma = soma + parseInt(cpf.substring(3, 4)) * 7;
    soma = soma + parseInt(cpf.substring(4, 5)) * 6;
    soma = soma + parseInt(cpf.substring(5, 6)) * 5;
    soma = soma + parseInt(cpf.substring(6, 7)) * 4;
    soma = soma + parseInt(cpf.substring(7, 8)) * 3;
    soma = soma + parseInt(cpf.substring(8, 9)) * 2;
  }
  var resto = (soma * 10) % 11;
  if (resto == 10 || resto == 11) {
    resto = 0;
  }
  var soma = 0;

  soma = soma + parseInt(cpf.substring(0, 1)) * 11;
  soma = soma + parseInt(cpf.substring(1, 2)) * 10;
  soma = soma + parseInt(cpf.substring(2, 3)) * 9;
  soma = soma + parseInt(cpf.substring(3, 4)) * 8;
  soma = soma + parseInt(cpf.substring(4, 5)) * 7;

  soma = soma + parseInt(cpf.substring(5, 6)) * 6;
  soma = soma + parseInt(cpf.substring(6, 7)) * 5;
  soma = soma + parseInt(cpf.substring(7, 8)) * 4;
  soma = soma + parseInt(cpf.substring(8, 9)) * 3;
  soma = soma + parseInt(cpf.substring(9, 10)) * 2;

  var resto2 = (soma * 10) % 11;

  if (resto2 == 10 || resto2 == 11) {
    resto2 = 0;
  }
  if (
    resto == parseInt(cpf.substring(9, 10)) &&
    resto2 == parseInt(cpf.substring(10, 11))
  ) {
    cpfRes.style.color= 'green'
    return (cpfRes.innerHTML = "CPF válido");
  } else {
    cpfRes.style.color= 'red'
    return (cpfRes.innerHTML = "CPF inválido");
  }
}

//telefone
var tel = document.querySelector("#tel");
var btTel = document.querySelector("#btn3");
btTel.addEventListener("click", telefone);

function telefone(qtd) {
  qtd = tel.value;
  var vlt = document.getElementById("vtl");
  var ddd = 19;
  var d = 99;
  for (var j = 0; j < qtd; j++) {
    var telefone = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
    var telefone1 = Math.floor(Math.random() * (9999 - 1000 + 1)) + 1000;
 
    vtl.innerHTML += `(${ddd})${d}${telefone}-${telefone1}                                                                       `

  }
}

//aleátorio cpf
var alcpf = document.querySelector("#alcpf");
var btAlcpf = document.querySelector("#btn4");
btAlcpf.addEventListener("click", aleatorioCpf);


function aleatorioCpf(qtd1) {

  qtd1 = alcpf.value;
  var cpfs = document.getElementById("cpfs");
  for (var i = 0; i < qtd1; i++) {
    var cpf = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    var cpf1 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    var cpf2 = Math.floor(Math.random() * (999 - 100 + 1)) + 100;
    var cpf3 = Math.floor(Math.random() * (99 - 10 + 1)) + 10;
   cpfs.innerHTML += `${cpf}.${cpf1}.${cpf2}-${cpf3}                                                                                      `;

  }
  
}
function limpar(){
  var solta = document.getElementById('solta')
  if (alcpf.value != ''){

    alcpf.value = ''

    alcpf.focus()

    cpfs.value = null

}
}