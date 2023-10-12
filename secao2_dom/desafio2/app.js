new Vue({
    el: '#desafio',
    data: {
        valor: ''
    },
    methods: {
        exibirAlerta(){
            alert("Botao clicado")
        },
        armazene(e){
            this.valor = e.target.value
        }
    }
})