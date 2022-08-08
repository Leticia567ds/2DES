

var inputNome = document.querySelector("#nome");
var cargo = document.querySelector("#cargo");
var salario = document.querySelector("#salario");

var tbody = document.querySelector("#table-body");

function cadastrar() {
let tr = document.createElement("tr");

let tdNome = document.createElement("td");
tdNome.innerHTML = inputNome.value;

let tdCargo = document.createElement("td");
tdCargo.innerHTML = cargo.value;

let tdSalario = document.createElement("td");
tdSalario.innerHTML = salario.value;

tr.appendChild(tdNome);
tr.appendChild(tdCargo);
tr.appendChild(tdSalario);

tbody.appendChild(tr);

}