var usuarios = [

    { "nome": "marcos", "senha": "melao" },
    { "nome": "julia", "senha": "uva" },

];

function Login() {

    var usuario = document.getElementsByName('username')[0].value;
    usuario = usuario.toLowerCase();
    var senha = document.getElementsByName('senha')[0].value;
    senha = senha.toLowerCase();


    if (usuario == usuarios.nome && senha == usuarios.senha) {
        alert("okay");
        window.location.href = "./loja/loja.html";
    } else {
        alert("oi")

    }
}





