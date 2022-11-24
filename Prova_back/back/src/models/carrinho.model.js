const listarBuscar = (model) => {
    return `SELECT * FROM vw_produto WHERE id=${model.id}`;
}
const create = (model) => {
    return `INSERT INTO carrinho VALUES(${model.id_usuario},${model.id_produto},${model.quantidade})`;
}

const del = (model) => {
    return `DELETE FROM carrinho WHERE id_produto =${model.id_produto}`;
}

module.exports = {
    listarBuscar,
    create,
    del
}