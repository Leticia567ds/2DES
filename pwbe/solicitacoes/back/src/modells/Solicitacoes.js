const toCreate = (model) => {
    return `call solicita_um_item(${model.Num_Sol },${model.Cod_Depto },${model.Cod_Func},${model.Cod_Produto },${model.Qtde},${model.valor})`;
}

const toReadAll = () => {
    return "SELECT * FROM  vw_solicitacoes;";
}

module.exports = {
    toCreate,
    toReadAll
}