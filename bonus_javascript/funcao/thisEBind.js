const pessoa = {
    saudacao: 'Bom dia!',
    falar(){
        console.log(this.saudacao) // sem o this não vai funcionar
    }
}

pessoa.falar()

///////
const falar = pessoa.falar
falar() // vai dar undefined, ele não tem saudação dentro dele . conflito entre paradigmas funcional e OO. 

//////
const falarDePessoa = pessoa.falar.bind(pessoa) 
falarDePessoa() // aqui vai funcionar graças ao bind que vai ser responsável por identificar o this


////////////////////////////

function Animal(){
    this.idade = 0

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }, 1000)
    // não vai identificar a idade, porque o this ta fazendo referencia ao setInterval e não a Animal

    setInterval(function(){
        this.idade++
        console.log(this.idade)
    }.bind(this), 1000) // o bind aqui vai amarrar o this do objeto Animal ao seInterval e agora irá funcionar

    const self = this
    setInterval(function(){
        self.idade++
        console.log(self.idade)
    }, 1000) // irá funcionar também


}

new Animal
