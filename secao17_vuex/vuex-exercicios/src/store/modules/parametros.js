export default {
    state: { // state representa o estado compartilhado da aplicação
        quantidade: 0,
        preco: 0
    },
    mutations: { // ou setters, feito para poder modificar o estado compartilhado
        setQuantidade(state, payload){
            state.quantidade = payload
        },
        setPreco(state, payload){
            state.preco = payload
        }
    }
}