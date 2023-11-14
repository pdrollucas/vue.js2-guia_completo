// filter

// permite selecionar elementos de um array 
// e criar um novo array apenas com esses elementos selecionados

const produtos = [
    {nome: 'Ipad', preco: 5000, fragil: true},
    {nome: 'Note', preco: 6000, fragil: true},
    {nome: 'Copo de plastico', preco: 20, fragil: false}
]

console.log(produtos.filter(function(p){
    return p.fragil == false
}))

// funcionamento do filter

Array.prototype.filter2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        if(callback(this[i], i, this)){
            newArray.push(this[i])
        }
    }
    return newArray
}