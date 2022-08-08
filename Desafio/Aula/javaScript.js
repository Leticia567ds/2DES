var modelo = document.querySelector(".modelo");

function duplicar(){
    let novo = modelo.cloneNode(true);

    novo.classList.remove("modelo"); //remove o css perde o vinculo.
    novo.querySelector("#img").src = ".....";

    novo.querySelector("#algum").value = "Oi";

    // novo.querySelector("#btRemove").addEventListener("click",()=>{
    //     novo.remove();
    // })

    document.querySelector("body").appendChild(novo);

}
function remover(element){
 element.parentNode.remove();
}