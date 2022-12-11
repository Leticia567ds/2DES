const read = () => {
    return 'select * from categorias'
}

const create = (model) => {
    return `insert into categorias values(default, "${model.cat_name}", "${model.cat_description}")`
}

module.exports = {
    read,
    create
}