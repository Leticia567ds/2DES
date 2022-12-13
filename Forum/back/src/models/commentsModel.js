const create = (model) => {
    return `insert into comentarios values(default, ${model.id_post}, ${model.id_user}, '${model.texto}')`
}

const deletar = (model) => {
    return `delete from comentarios where id_comment = ${model.id_comment}`
}

const ler = (model) => {
    return `select * from comentarios where id_post = ${model.id_post}`
}
const lerV = (model) => {
    return `select * from vw_comentarios where id_post = ${model.id_post}`
}
const lerF = (model) => {
    return `select * from vw_vw_sub_Comen where id_comment = ${model.id_comment}`
}

module.exports = {
    create,
    deletar,
    ler,
    lerV,
    lerF
}