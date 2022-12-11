const create = (model) => {
    return `insert into sub_comments values(default, ${model.id_comment}, ${model.id_user}, '${model.texto}')`
}

const deletar = (model) => {
    return `delete from sub_comments where id_comment = ${model.id_comment}`
}

const read = (model) => {
    return `select * from sub_comments where id_comment = ${model.id_comment}`
}

module.exports = {
    create,
    deletar,
    read
}