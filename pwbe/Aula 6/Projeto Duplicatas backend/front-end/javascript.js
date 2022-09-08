var niceCliente = `http://localhost:3000/duplicatas/clientes`;
// var clientes = [];

function showTable_Clinte() {
  fetch(niceCliente)
    .then((response) => {
      return response.json();
    })
    .then((clientes) => {
      clientes.forEach((cli_entes) => {
        // showtell();
        let newCliente = document.querySelector(".cli").cloneNode(true);

        newCliente.querySelector("#cod_cli").value = cli_entes.cod_cli;
        newCliente.querySelector("#nome").value = cli_entes.nome;
        newCliente.querySelector("#bairro").value = cli_entes.bairro;
        newCliente.querySelector("#endereco").value = cli_entes.endereco;
        newCliente.querySelector("#uf").value = cli_entes.uf;

        document.querySelector(".main").appendChild(newCliente);
      });
    });
}

// function telefones() {
//   fetch(niceCliente)
//     .then((response) => {
//       return response.json();
//     })
//     .then((telee) => {

//       telee.forEach((tel) => {
//         let newTel = document.querySelector(".telefone").cloneNode(true);
//         document.querySelector(".main").append(newTel);
//         showModal();
//         showtell();
//       });
//     });
// }

function showModal() {
  // showtell();
  let  modal = document.querySelector(".telefones")
  modal.classList.toggle("model");

  fetch(niceCliente)
    .then((response) => {
      return response.json();
    })
    .then((telef) => {
      // showModal();
      telef.forEach((puxar) => {
        puxar.telefones.forEach((e) => {
          let cli = document.querySelector(".tele").cloneNode(true);

          cli.querySelector("#tipo").value = e.tipo;
          cli.querySelector("#tele").value = e.numero;

          document.querySelector(".main").appendChild(cli);
        });
      });
    });
}

function showtell() {
  showModal();
}
