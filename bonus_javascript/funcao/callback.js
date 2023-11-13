// callback é uma função que será chamada a cada vez que um evento acontecer

const fabricantes = ['Nike', 'Adidas', 'Converse']

function imprimir(nome, indice){
    console.log(`${indice + 1} - ${nome}`)
}

fabricantes.forEach(imprimir) // função callback - a função é "chamada de volta" a cada elemento

fabricantes.forEach(function(fabricante){ // igual ao resultado de cima
    console.log(fabricante)
})

fabricantes.forEach(fabricante => console.log(fabricante)) // igual ao resultado de cima

////////

const notas = [7.7, 8, 6.5, 5.7, 3.6, 8.9, 2.3, 9.2]

// sem callback

const notasBaixas = []
for(let i in notas){
    if(notas[i] < 7){
        notasBaixas.push(notas[i])
    }
}
console.log(notasBaixas)

// com callback

const notasBaixas2 = notas.filter(function(nota){
    return nota < 7
})
console.log(notasBaixas2)

// com arrow e callback

const notasBaixas3 = notas.filter(nota => nota < 7)
console.log(notasBaixas3)