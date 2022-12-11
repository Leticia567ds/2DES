const create = (model) => {
    return `insert into comentarios values(default, ${model.id_post}, ${model.id_user}, '${model.texto}')`
}

const deletar = (model) => {
    return `delete from comentarios where id_comment = ${model.id_comment}`
}

const ler = (model) => {
    return `select * from comentarios where id_post = ${model.id_post}`
}

module.exports = {
    create,
    deletar,
    ler
}