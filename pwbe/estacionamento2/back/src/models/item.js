const toCreateClientes = (model) => {
    return `INSERT INTO clientes VALUES (DEFAULT,'${model.nome_cliente}','${model.endereco}','${model.telefone}')`;
}
const toCreateVeiculos = (model) => {
    return `INSERT INTO veiculos VALUES (DEFAULT,DEFAULT,'${model.placa}','${model.tipo}')`;
}

const toCreateEntradas = (model) => {
    return `INSERT INTO entrada VALUES (DEFAULT,DEFAULT, curdate(),curtime(), '${model.valor}')`;
}

const toReadAllClientes = () => {
    return "SELECT * FROM clientes";
}

const toReadAllCli = () => {
    return "SELECT * FROM vw_client";
}

const toUpdateClientes = (model) => {
    return `UPDATE clientes SET 
                nome_cliente = '${model.nome_cliente}',
                endereco = '${model.endereco}',
                telefone = '${model.telefone}'
                WHERE id = ${model.id}`;
}

const toDeleteClientes = (model) => {
    return `DELETE FROM clientes WHERE id_cliente=${model.id_cliente}`;
}



const toReadAllVeiculos = () => {
    return "SELECT * FROM veiculos";
}

const toUpdateVeiculos = (model) => {
    return `UPDATE veiculos SET 
                placa = '${model.placa}',
                tipo = '${model.tipo}'
                WHERE id = ${model.id}`;
}

// const toDeleteVeiculos = (model) => {
//     return ``;
// }

const toCreateVagas = (model) => {
    return `INSERT INTO vagas VALUES ('${model.id}','${model.disponivel}')`;
}

const toReadAllVagas = () => {
    return "SELECT * FROM vagas";
}

const toUpdateVagas = (model) => {
    return `UPDATE vagas SET 
                disponivel = '${model.disponivel}'
                WHERE id = '${model.id}'`;
}

const toDeleteVagas = (model) => {
    return `DELETE FROM vagas WHERE id=${model.id}`;
}


const toReadAllEntradas = () => {
    return "SELECT * FROM entrada";
}
const toReadAl = () => {
    return "SELECT * FROM vw_entrada";
}

const toUpdateEntradas = (model) => {
    return `UPDATE entrada SET 
                data_entrada = '${model.hora_entrada}',
                data_saida = '${model.hora_saida}',
                valor = ${model.valor}
                WHERE id = ${model.id}`;
}


module.exports = {
    toCreateClientes,
    toReadAllClientes,
    toReadAllCli,
    toUpdateClientes,
    toDeleteClientes,
    toCreateVeiculos,
    toReadAllVeiculos,
    toUpdateVeiculos,
    toCreateVagas,
    toReadAllVagas,
    toUpdateVagas,
    toDeleteVagas,
    toCreateEntradas,
    toReadAllEntradas,
    toUpdateEntradas,
    toReadAl
}