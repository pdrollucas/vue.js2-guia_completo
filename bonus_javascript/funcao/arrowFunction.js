let dobro = function(a){
    return 2 * a
}

dobro = (a) => {
    return 2 * a
}

dobro = a => 2 * a // return implicito


let ola = function(){
    return 'Olá'
}

ola = () => 'Olá'

////////

function Animal(){
    this.idade = 0

    setInterval(() => {
        this.idade++
        console.log(this.idade)
    }, 1000) // por ser arrowFunction aqui o this irá funcionar normalmente sem o uso do bind
}

new Animal

////////

