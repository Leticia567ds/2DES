const create = (model) => {
    return `INSERT INTO usuario VALUES(DEFAULT,'${model.nome}','${model.email}','${model.senha}')`;
}

const update = (model) => {
    return `UPDATE  usuario set nome = '${model.nome}', email = '${model.email}', senha = '${model.senha}' where id =${model.id}`;
}

module.exports = {
    create,
    update
}