const read = () => {
    return 'select * from vw_curtidas'
}
const readById = (id) => {
    return `select * from vw_curtidas where id_user = ${id}`
}

const toAscii = (dados) => {
    dados.forEach(d => {
        if (d.foto != null) d.foto = d.foto.toString('ascii');
    });
    return dados;
}

const create = (model) => {
    return `insert into curtidas values(${model.id_user}, ${model.id_post})`
}

const del = (model) => {
return `delete from curtidas where id_user = ${model.id_user} and id_post = ${model.id_post}`
}

module.exports = {
    read,
    readById,
    create,
    toAscii,
    del
}