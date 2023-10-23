<template>
    <div class="componente">
        <h2>As Informações de Usuário</h2>
        <p>Vários detalhes...</p>
        <p>Nome do usuário: <strong>{{ inverterNome() }}</strong></p>
        <p>Idade é <strong>{{ idade }}</strong></p>
        <button @click="reiniciarNome">Reinicializar nome</button>
        <button @click="reiniciarFn()">Reiniciar nome (callback)</button>
    </div>
</template>

<script>
import barramento from '@/barramento'

export default {
    props: { // fazer dessa forma garante mensagens de erro mais precisas
        nome: {
            type: String,
            //required: true,
            default: 'Anônimo'
        },

        reiniciarFn: {
            type: Function
        },

        idade: {
            type: Number
        }
    },
    methods: {
        inverterNome(){
            return this.nome.split('').reverse().join('')
        },
        reiniciarNome(){
            this.nome="Pedro",
            this.$emit('nomeMudou', this.nome)
        },
    },
    created(){
        barramento.quandoIdadeMudar((idade) => {
            this.idade = idade
        })
    }
}
</script>

<style scoped>
    .componente {
        flex: 1;
        background-color: #ec485f;
        color: #fff;
    }
</style>
