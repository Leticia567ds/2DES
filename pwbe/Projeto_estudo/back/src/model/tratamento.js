class Tratamento {
    constructor(data){
        this.id_tratamento = data.id_tratamento;
        this.id_consulta = data.id_consulta
        this.tratamento = data.tratamento
        this.valor = data.valor
    }
     static toreadAll = () => {
        return 'SELECT * FROM tratamentos'
       }

       static toCreate = (model) =>{
        return `INSERT INTO tratamentos VALUES (default, ${model.id_consulta}, '${model.tratamento}', ${model.valor})`
       }

       static update = (model) => {
        return `UPDATE tratamentos SET id_consulta = ${model.id_consulta}, tratamento = '${model.tratamento}', valor = ${model.valor}`;
    }

       static delete = (model) =>{
        return `DELETE tratamentos WHERE id_tratamento = ${model.id_tratamento}`
       }


}


module.exports = Tratamento;
    
