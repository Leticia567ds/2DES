const create = (model)=>{
return `INSERT INTO Departamentos VALUES(${model.cod_depto}, '${model.nome_depto}')`;
}

const del = (model)=>{
    return `DELETE FROM departamentos WHERE cod_depto = '${model.cod_depto}'`;
}
const readAll = () =>{
    return `Select * from Desenvolvimento`;
}
module.exports={
    create,
    del,
    readAll
}