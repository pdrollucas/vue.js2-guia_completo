<template>
    <Painel titulo="Loja Virtual" verde>
        <div class="loja">
            <span>Adicionar</span>
            <input type="number" v-model.number="quantidade">
            <span>itens de <strong>R$</strong></span>
            <input type="number" v-model.number="preco">
            <button @click="adicionar">Agora!</button>
        </div>
    </Painel>
</template>

<script>
//import {mapMutations} from 'vuex'
import {mapActions} from 'vuex'

export default {
    data() {
        return {
            sequencia: 1,
        }
    },
    computed: {
        quantidade(){
            return this.$store.state.parametros.quantidade
        },
        preco(){
            return this.$store.state.parametros.preco
        }
    },
    methods: {
        //...mapMutations(['adicionarProduto']), //alterando via método - parte 1
        
        //...mapActions(['adicionarProduto']), -- assim é como fica sem o namespaced
        ...mapActions('carrinho', ['adicionarProduto']), // assim é como fica com namespaced
       
        /* mesma coisa que o de cima ^
        adicionarProduto(produto){
            this.$store.dispatch('adicionarProduto', produto)
        },
        */

        adicionar() {
            const produto = {
                id: this.sequencia,
                nome: `Produto ${this.sequencia}`,
                quantidade: this.quantidade,
                preco: this.preco
            }
            this.sequencia++
            
            // alterando diretamente
            //this.$store.state.produtos.push(produto)

            //alterando via setter
            //this.$store.commit('adicionarProduto', produto)

            //alterando via método - parte 2
            this.adicionarProduto(produto)
            //this.$store.dispatch('adicionarProduto', produto)
        }
    }
}
</script>

<style>
    .loja {
        display: flex;
        justify-content: center;
    }

    .loja > * {
        margin: 0px 10px;
    }

    input {
        font-size: 2rem;
        width: 90px;
    }
</style>
