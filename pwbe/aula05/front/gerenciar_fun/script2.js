const listafuncionarios = document.querySelector("#lista-funcionarios")
const linhamodelo = document.querySelector(".linhamodelo");
const modalExcluir = document.querySelector(".excluir");
const modalEditar = document.querySelector(".editar");

const inputId = document.querySelector("#id");
const inputNome = document.querySelector("#nome");
const inputMatricula = document.querySelector("#matricula");
const inputValor = document.querySelector("#valor");
const inputCPF = document.querySelector("#cpf");
const btCadetid = document.querySelector(".btCadetid");

fetch("http://localhost:3000/funcionarios")
.then(res => { return res.json() })
.then(funcionarios => {
    funcionarios.forEach(funcionario => {
        let linha = linhamodelo.cloneNode(true);
        linha.classList.remove("model");

        let colunas = linha.querySelectorAll("td");
        colunas[0].innerHTML = funcionario.id;
        colunas[1].innerHTML = funcionario.matricula;
        colunas[2].innerHTML = funcionario.nome;
        colunas[3].innerHTML = funcionario.cargo;
        colunas[4].innerHTML = "R$ " + funcionario.valor;
        colunas[5].innerHTML = funcionario.cpf;

        linha.querySelector("#exclui").addEventListener("click", () => {
            modalExcluir.classList.remove("model");
            modalExcluir.querySelector("#id").innerHTML = funcionario.id;
        })

        linha.querySelector("#edita").addEventListener("click", () => {
            modalEditar.classList.remove("model"); 
            inputId.value = funcionario.id;
            inputMatricula.value = funcionario.matricula;
            inputNome.value = funcionario.nome;
            inputValor.value = funcionario.valor;
            inputCPF.value = funcionario.cpf;
        })

        listafuncionarios.appendChild(linha);
    });
});

function fecharModalExcluir() {
    modalExcluir.classList.add("model");
}

function fecharModalEditar() {
    modalEditar.classList.add("model");
}

function editar() {
    let funcionario = {
        "id":inputId.value,
        "matricula":inputMatricula.value,
        "nome":inputNome.value,
        "valor":inputValor.value,
        "cpf":inputCPF.value
    }

    fetch("http://localhost:3000/funcionarios", {
        "method":"PUT",
        "headers": {
            "Content-Type":"application/json"
        },
        "body":JSON.stringify(funcionario)
    })
    .then(res => { return res.json() })
    .then(resp => {
        if(resp.cod !== undefined) {
            alert("funcionario Alterado com Sucesso !");
            window.location.reload();
        }else {
            alert("Falha ao salvar alterações !");
        }
    })
}

function excluir() {
    let data = {
        "id":document.querySelector("#id").innerHTML
    }

    fetch("http://localhost:3000/funcionarios", {
        "method":"DELETE",
        "headers":{
            "Content-Type": "application/json"
        },
        "body":JSON.stringify(data)
    })
    .then(res => { return res.json() })
    .then(resp => {
        if(resp.cod !== undefined) {
            alert("funcionario Excluido Com Sucesso!");
            window.location.reload();
        }else {
            alert("Falha ao excluir funcionario !");
        }
    })
}

