const toCreate = (dados,file) =>{
    if (file != null){
        dados.foto = file.buffer.toString('base64');
        return `insert into clientes values (default,'${dados.pri_nome}','${dados.login}','${dados.nascimento}','${dados.telefone}','${dados.foto}')`;
    }else
     return `insert into clientes values (default,'${dados.pri_nome}','${dados.login}','${dados.nascimento}','${dados.telefone}',null)`;
}

const toReadAll = ()=>{
    return "select * from clientes order by id desc";
}
const toDel = (dados)=>{
    return `delete from clientes where id = ${dados.id}`
}
const toAscii = (dados)=>{
    dados.forEach(d => {
        if(d.foto != null) d.foto = d.foto.toString('ascii');
    });
    return dados;
}

module.exports={
    toCreate,
    toReadAll,
    toDel,
    toAscii
}