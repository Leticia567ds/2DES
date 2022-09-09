const linha = document.querySelector(".coluninhas");
const modal = document.querySelector(".modal");
const produto = document.querySelector(".main");

function ll() {
  fetch("http://localhost:3000/lancamento")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((dividas) => {
        if (dividas.tipo == "D" || dividas.tipo == "d") {
          var p = document.querySelector("#debito");
          var co = document.querySelector(".coluninhas").cloneNode(true);
          co.classList.remove("model");
          debito.innerHTML = "Débito";

          co.querySelector("#numero").innerHTML = dividas.n_lancamento;
          co.querySelector("#data").innerHTML = dividas.data;
          co.querySelector("#descricao").innerHTML = dividas.descricao;
          co.querySelector("#valor").innerHTML = dividas.valor;
          co.querySelector("#tipo").innerHTML = dividas.tipo;

          document.querySelector("#corpo").appendChild(co);
        } else {
          // var p1 = document.querySelector('#credito')
          var colu = document.querySelector(".coluninhas1").cloneNode(true);
          colu.classList.remove("model");
          credido.innerHTML = "Crédito";
          colu.querySelector("#nu").innerHTML = dividas.n_lancamento;
          colu.querySelector("#da").innerHTML = dividas.data;
          colu.querySelector("#des").innerHTML = dividas.descricao;
          colu.querySelector("#val").innerHTML = dividas.valor;
          colu.querySelector("#ti").innerHTML = dividas.tipo;

          document.querySelector("#corpinho").appendChild(colu);
        }
      });
    });
}

function showModal() {
  // showtell();
  let modal = document.querySelector(".main");
  modal.classList.toggle("model");

  fetch("http://localhost:3000/lancamento")
    .then((response) => {
      return response.json();
    })
    .then((dados) => {
      dados.forEach((dados) => {
        // showModal();

        let dados = document.querySelector(".dados").cloneNode(true);

        cli.querySelector("#descricao").value = dados.tipo;
        cli.querySelector("#valor").value = dados.valor;
        cli.querySelector("#tipo").value = dados.tipo;

        document.querySelector(".main").appendChild(cli);
      });
    });
}
