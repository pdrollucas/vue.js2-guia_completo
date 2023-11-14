function falarDepoisDe(segundos, frase){
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            resolve(frase, 'abc')
        }, segundos * 1000)
    })
}

falarDepoisDe(3, 'Que Legal!')
    .then(frase => frase.concat('heheh'))
    .then(outraFrase => console.log(outraFrase))
    .catch(e => console.log(e))