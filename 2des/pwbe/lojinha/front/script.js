function ler() {
    fetch('http://localhost:3000/lojinhajapa/lancamento')
        .then(res => { return res.json() })
        .then(lojinhajapa => {
            lojinhajapa.forEach(dividas => {

            
                    var co = document.querySelector('.coluna').cloneNode(true)
                    co.classList.remove('model')
                    //  p.innerHTML = 'Débito'
        
                     co.querySelector('#numero').innerHTML = dividas.n_lancamento
                     co.querySelector('#data').innerHTML = dividas.data
                     co.querySelector('#descricao').innerHTML = dividas.descricao
                     co.querySelector('#valor').innerHTML = dividas.valor
                     co.querySelector('#tipo').innerHTML = dividas.tipo

                     document.querySelector('#corpo').appendChild(co)

                     //  p.innerHTML = 'Débito'
         
                     var co2 = document.querySelector('.coluna').cloneNode(true)
                     co2.classList.remove('model') 

                      co2.querySelector('#numero').innerHTML = dividas.n_lancamento
                      co2.querySelector('#data').innerHTML = dividas.data
                      co2.querySelector('#descricao').innerHTML = dividas.descricao
                      co2.querySelector('#valor').innerHTML = dividas.valor
                      co2.querySelector('#tipo').innerHTML = dividas.tipo
                     
                      document.querySelector('#corpo2').appendChild(co2)
                
                //     var p1 = document.querySelector('#credito')
                //     var colu = document.querySelector('.coluninhas1').cloneNode(true)
                //     colu.classList.remove('modal')
                //     p1.innerHTML = 'Crédito'
                //      colu.querySelector('#nu').innerHTML = dividas.n_lancamento
                //      colu.querySelector('#da').innerHTML = dividas.datas
                //      colu.querySelector('#des').innerHTML = dividas.descricao
                //      colu.querySelector('#val').innerHTML = dividas.valor
                //      colu.querySelector('#ti').innerHTML = dividas.tipo
    
                //      document.querySelector('#corpinho').appendChild(colu)
                // }

                
               
            })
        })
}

