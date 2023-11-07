import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

/*
    o Vuex funciona como um componente que é capaz de se comunicar com qualquer outro de forma direta,
evitando assim conversas paralelas, por exemplo: sem o vuex para fazer a comunicação para um neto era preciso primeiro passar pelo pai, depois para o filho e só depois para o neto

*/

export default new Vuex.Store({
    state: { // state representa o estado compartilhado da aplicação
        produtos: []
    },
    getters: { // getters são funções que vão ler o estado e processar
        valorTotal(state){
            return state.produtos.map(p => p.quantidade * p.preco)
                .reduce((total, atual) => total + atual, 0)
        }
    },
    mutations: { // ou setters, feito para poder modificar o estado compartilhado
        adicionarProduto(state, produto){
            state.produtos.push(produto)
        }
    },
    actions: { // actions serve para colocar as requisções com servidores ou outras funções assíncronas
        adicionarProduto({commit}, produto){
            setTimeout(() => {
                commit('adicionarProduto', produto)
            }, 1000)
        }
    }
})