const linha = document.querySelector(".coluninhas");
const modal = document.querySelector(".modal");
const produto = document.querySelector(".main");
var des = document.querySelector('#descricao')
var val = document.querySelector('#valor')
var tip = document.querySelector('#tipo')


const btCadedit = document.querySelector("#cadastro");
var editar = document.querySelector('.editar')

function ll() {

  fetch("http://localhost:3000/lancamento")
    .then((res) => {
      return res.json();
    })
    .then((data) => {
      data.forEach((dividas) => {
        if (dividas.tipo == "D" || dividas.tipo == "d") {
          var co = document.querySelector(".coluninhas").cloneNode(true);
          co.classList.remove("model");
          debito.innerHTML = "Débito";

          co.querySelector("#numero").innerHTML = dividas.n_lancamento;
          co.querySelector("#data").innerHTML = dividas.data;
          co.querySelector("#descricao").innerHTML = dividas.descricao;
          co.querySelector("#valor").innerHTML = dividas.valor;
          co.querySelector("#tipo").innerHTML = dividas.tipo;
          // co.querySelector("#tipo").innerHTML ='saida';
          var valores = co.querySelector("#valor").innerHTML = dividas.valor
        
          document.querySelector("#corpo").appendChild(co);
          

        } else {
          // var p1 = document.querySelector('#credito')
          var colu = document.querySelector(".coluninhas1").cloneNode(true);
          colu.classList.remove("model");
          credido.innerHTML = "Crédito";
          colu.querySelector("#nu").innerHTML = dividas.n_lancamento;
          colu.querySelector("#da").innerHTML = dividas.data;
          colu.querySelector("#des").innerHTML = dividas.descricao;
          colu.querySelector("#valor").innerHTML = dividas.valor;
          colu.querySelector("#tip").innerHTML = dividas.tipo;

          linha.classList.remove("modelo")

          document.querySelector("#corpinho").appendChild(colu);
          
          
        }
      });
    });

  
 
}




function abrirModalCadastro() {
  btCadedit.onclick = () => { cadastrar(); }
  des.value = "";
  val.value = "";
  tip.value = "";
  editar.classList.remove("model");
}


function fecharModalCadastro(){
  editar.classList.add('model')
}

function cadastrar(){ 
  let lanc = {
      "descricao":des.value,
      "valor":val.value,
      "tipo":tip.value
}
    
 
    fetch('http://localhost:3000/lancamento', {
      "method":"POST",
      "headers": {
          "Content-Type": "application/json"
      },
      "body": JSON.stringify(lanc)
  })
  .then(res => {return res.json()})
  .then(resp => {
      if(resp.descricao !== undefined){
          alert("Lancamentos Cadastrado Com Sucesso !");
          window.location.reload();
      }else {
          alert("Falha ao cadastrar Lancamentos");
      }
   })
  }


