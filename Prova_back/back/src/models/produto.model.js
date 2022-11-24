const readAll = () => {
    return `SELECT * FROM produtos`;
}
const readNome = (model) => {
    return `SELECT * FROM produtos WHERE id=${model.id}`;
}

module.exports = {
    readAll,
    readNome
}