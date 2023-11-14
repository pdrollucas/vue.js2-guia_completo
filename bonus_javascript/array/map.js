// map é um for com um propósito
// mapeia cada elemento
// ele não transforma o array, ele gera um novo array


const nums = [1, 2, 5, 8, 3, 2]

let resultado = nums.map(function(e){
    return e * 2
})

console.log(resultado)

const soma10 = e => e + 10
const triplo = e => e * 3
const paraDinheiro = e => `R$ ${parseFloat(e).toFixed(2).replace('.', ',')}`

resultado = nums.map(soma10).map(triplo).map(paraDinheiro)
console.log(resultado)

//////

const carrinho = [
    '{ "nome": "Borracha", "preco": 3.45 }',
    '{ "nome": "Caderno", "preco": 12.50 }',
    '{ "nome": "Lapis", "preco": 4.25 }',
    '{ "nome": "Caneta", "preco": 5.25 }'
]

let carrinhoPrecos = carrinho.map(item => JSON.parse(item).preco * 2)
console.log(carrinhoPrecos)

////// como é o funcionamento do map

Array.prototype.map2 = function(callback){
    const newArray = []
    for(let i = 0; i < this.length; i++){
        newArray.push(callback(this[i], i, this))
    }
    return newArray
}

