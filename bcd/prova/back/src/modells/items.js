const toCreateProdutos = (model) => {
    return `INSERT INTO Produtos VALUES (${model.Cod_Produto},'${model.Nome_produto}')`;
}
const toReadAllProd = () => {
    return "SELECT * FROM Produtos";
}
const toRead = (model) => {
    return `SELECT * FROM  vw_produto where Nome_produto like'${model.Nome_produto}'`;
}
const  toCreateDepart = (model) => {
    return `INSERT INTO Departamentos VALUES (${model.Cod_Depto},'${model.Nome_Depto}')`;
}
const toDeleteDep = (model) => {
    return `DELETE FROM Departamentos WHERE Cod_Depto=${model.Cod_Depto}`;    
}

const toCreateSol = (model) => {
    return `call solicita_um_item(${model.Num_Sol },${model.Cod_Depto },${model.Cod_Func},${model.Cod_Produto },${model.Qtde},${model.valor})`;
}

const toReadAllSol = () => {
    return "SELECT * FROM vw_solicitacoes";
}

module.exports = {
    toCreateProdutos,
    toReadAllProd,
    toRead,
    toCreateDepart,
    toDeleteDep,
    toCreateSol,
    toReadAllSol
}