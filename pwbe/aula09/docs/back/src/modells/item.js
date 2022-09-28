const toReadAll =()=>{
    return "SELECT * FROM itens";
}
const toRead =()=>{
    return `Select * from itens WHERE ni=$(model.ni)`;
}
const toCreate =(model)=>{
    return `INSERT INTO itens VALUES($(moeel.ni),'$(model.aquisicao)',$(model.valor),'$(model.img)')`;
}
const toDelete =()=>{
  return  ` DELETE FROM itens WHERE ni=$(model.ni)`;
}

moules.export = {
    toReadAll, 
    toCreate,
    toDelete
}