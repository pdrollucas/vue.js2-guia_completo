function area(largura, altura){
    const area = largura * altura
    if(area > 20){
        console.log(`Valor acima do permitido: ${area}m2`)
    } else {
        return area
    }
}

console.log(area(2, 2)) // vai retornar 4
console.log(area(2)) // vai retornar NaN
console.log(area()) // vai retornar NaN
console.log(area(2, 3, 17, 22, 44)) // vai retornar 6 (pega os dois primeiros números e ignora o resto)
console.log(area(5, 5)) // vai retornar "valor acima do permitido" e depois 'undefined'
