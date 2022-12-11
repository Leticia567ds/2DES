var inpSenha = document.querySelector('#inpSenha')
var inpEmail = document.querySelector('#inpEmail')
const uriLogin = 'http://localhost:3000/usuarios/login'


const login = () => {
    let form = {
        "email": inpEmail.value,
        "senha": inpSenha.value
    }

    var options = {
        'method': 'POST',
        'headers': {
            'Content-Type': 'application/json'
        },
        'body': JSON.stringify(form)
    }
    fetch(uriLogin, options)
        .then(resp => { return resp.json() })
        .then(data => {
            
            if (inpEmail.value.length !== 0 || inpSenha.value.length !== 0)
                if (data != null) {
                    localStorage.setItem("token", data.token)
                    // window.location.href = "../home/index.html"
                } else {
                    alert('Usuário não encontrado')
                }
            else
                alert('Preencha todas as informações')
        })
}
