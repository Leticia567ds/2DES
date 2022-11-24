const create = (model) => {
    return `Select * from usuario nome where email ='${model.email}'`;
}

const update = (model) => {
    return `UPDATE  usuario set nome = '${model.nome}', email = '${model.email}', senha = '${model.senha}' where id =${model.id}`;
}

module.exports = {
    create,
    update
}