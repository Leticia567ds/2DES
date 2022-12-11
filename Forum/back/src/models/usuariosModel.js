const toCreate = (dados, file) => {
    if (file != null) {
        dados.foto = file.buffer.toString('base64');
        return `insert into usuarios values (default,'${dados.nome}','${dados.email}','${dados.senha}','${dados.role}','${dados.foto}')`;
    } else
        return `insert into usuarios values (default,'${dados.nome}','${dados.email}','${dados.senha}', '${dados.role}', null)`;
}

const toAscii = (dados) => {
    dados.forEach(d => {
        if (d.foto != null) d.foto = d.foto.toString('ascii');
    });
    return dados;
}

const toReadAll = () => {
    return 'select * from usuarios'
}

const login = (model) => {
    return `select * from usuarios where email = '${model.email}' AND senha = '${model.senha}'`
}

module.exports = {
    toCreate,
    toAscii,
    toReadAll,
    login
}