const nomeEmpresa = 'Omma'


const listaReceitas = []

const cadastrarReceita = (id,titulo,dificuldade,ingredientes,preparo,link,vegano) => {
    const novaReceita = {
        id,
        titulo,
        dificuldade,
        ingredientes,
        preparo,
        link,
        vegano,
    }

    listaReceitas.push(novaReceita)
    console.log(`Receita ${titulo} cadastrada com sucesso`)
}

cadastrarReceita(1,'feijao','fácil','ingredientes','preparo','link',true) 
cadastrarReceita(2,'arroz','fácil','ingredientes','preparo','link',true) 
cadastrarReceita(3,'macarrão','dificil','ingredientes','preparo','link',true) 

const exibirReceitas = () => 
listaReceitas.forEach(receita => {
    console.log(`Título:${receita.titulo}`)
    console.log(`Ingredientes:${receita.ingredientes}`) 
    console.log(`Vegano:${receita.vegano}`)
    console.log('---------')
});


function removeItem(listaReceitas, prop, value) { // nome do array, propriedade do objeto , valor da propriedade
console.log(listaReceitas.filter(function(i){return i[prop] !== value; }))
}

function pesquisar(value){
    for (let receita of listaReceitas){
        if (receita.titulo.includes(value) == true) {
            console.log(receita)
            break
        } if (receita.dificuldade.includes(value) == true){
            console.log(receita) //
            break
          } else {
            console.log('Não encontramos nada :c')
            break 
            }
    }
}

function atualizarId(id,value){
    let achou = false
    for (let receita of listaReceitas){
        if (receita.id === id){
            achou = true
            console.log(receita);
            receita.id = value 
            console.log('o ID foi atualizado')     
        }            
    }
    
    if (achou == false){
        console.log('Não foi possível encontrar a receita') 
    }  
}


