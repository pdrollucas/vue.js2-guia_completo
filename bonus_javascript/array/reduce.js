// reduce

// permite reduzir os elementos de um array em um único elemento

const alunos = [
    {nome: 'Pedro', nota: 7.3, bolsista: false},
    {nome: 'Maria', nota: 8.4, bolsista: true},
    {nome: 'José', nota: 5.4, bolsista: true},
    {nome: 'Joana', nota: 6.4, bolsista: false}
]

const resultado = alunos.map(a => a.nota).reduce(function(acumulador, atual){
    console.log(acumulador, atual)
    return acumulador + atual
})

console.log(resultado)

// todos sao bolsistas?
const todosBolsistas = (resultado, bolsista) => resultado && bolsista
console.log(alunos.map(a => a.bolsista).reduce(todosBolsistas))

// algum aluno é bolsista?
const algumBolsista = (resultado, bolsista) => resultado || bolsista
console.log(alunos.map(a => a.bolsista).reduce(algumBolsista))


/////// como funciona o reduce

Array.prototype.reduce2 = function(callback){
    let acumulador = this[0]
    for(let i = 1; i < this.length; i++){
        acumulador = callback(acumulador, this[i], i, this)
    }
    return acumulador
}

const soma = (total, valor) => total + valor
const nums = [1, 2, 3, 4, 5]
console.log(nums.reduce2(soma))