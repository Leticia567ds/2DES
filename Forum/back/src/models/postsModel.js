const toCreate = (dados, file) => {
    if (file != null) {
        dados.content_image = file.buffer.toString('base64');
        return `insert into posts values (${dados.id_user}, default,"${dados.categoria}",curdate(),'${dados.conteudo}','${dados.content_image}')`;
    } else
        return `insert into posts values (${dados.id_user}, default,"${dados.categoria}",curdate(),'${dados.conteudo}', null)`;
}

const deletar = (model) => {
    return `delete from posts where id_post = ${model.id_post}`
}

const ler = () => {
    return 'select * from posts'
}

const toAscii = (dados) => {
    dados.forEach(d => {
        if (d.foto != null) d.foto = d.foto.toString('ascii');
    });
    return dados;
}

module.exports = {
    toCreate,
    deletar,
    ler,
    toAscii
}