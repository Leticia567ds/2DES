const clientes = (lista) => {
    //cada elemento da lista removemos os
    // campos telefones e tipos telefones e criamos uma sublista 
    //chamada telefones, acrencentou.
    lista.forEach(e => {
        e.telefones = [];
        let tel = {};
        tel.tipo = e.tipo;
        tel.numero = e.telefone;
        e.telefones.push(tel);
        delete e.tipo;
        delete e.telefone;

    });
    //Criar  uma nova lista sem os dados duplicatas(Comparando o proximo item com o anterior)
    let auxiliar = [];//lista auxiliar
    let lip = 0;//ultimo indice AUXILIAR
     auxiliar.push(lista[lip]);//acrescente o primeiro item da lsita auxiliar
    for (i = 1; i < lista.length; i++) {
    if(lista[i].cod_cli == lista[i-1].cod_cli){
        let tel = {};//Novo objeto telefone
        tel.tipo = lista[i].telefones[0].tipo;
        tel.numero = lista[i].telefones[0].numero;
         auxiliar[lip].telefones.push(tel);//Acrescento somento o novo objeto telefone
    }else{//Senão acresceneto o novo item na lista e incremento o indice
        auxiliar.push(lista[i]);
        lip++;
    }
    }
    return auxiliar;//Retorna a nova lsita sem dupli, mas com os objetos e telefones 
}
module.exports = {
    clientes
}