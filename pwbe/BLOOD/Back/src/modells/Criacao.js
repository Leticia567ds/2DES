const create = (dados) => {
    return `insert into clientes values ('${dados.login}','${dados.nome}','${dados.nascimento}','${dados.telefone}','${dados.avatar}')`;
}

const read = (login) => {
    return `select * from clientes where login = '${login}'`;
}

const readAll = () => {
    return "select * from clientes";
}

const update = (dados) => {
    return `update clientes set nome = '${dados.nome}', nascimento = '${dados.nascimento}', telefone = '${dados.telefone}', avatar = '${dados.avatar}' where login ='${dados.login}'`;
}

const del = (login) => {
    return `delete from clientes where login = '${login}'`
}

const blobToAscii = (dados) => {
    dados.forEach(e => {
        if (e.avatar != null) e.avatar = e.avatar.toString('ascii');
    });
    return dados;
}

module.exports = {
    create,
    readAll,
    read,
    update,
    del,
    blobToAscii
}