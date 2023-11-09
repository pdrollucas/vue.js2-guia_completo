export default{
    state: {
        funds: 10000, // saldo em conta
        stocks: []
    },
    mutations: {
        buyStock(state, {stockId, quantity, stockPrice}){ // (estado, {objeto que representa uma compra})
            const record = state.stocks.find(element => element.id == stockId) // procurar uma ação, se element.id for igual a stockId significa que já existe uma ação do mesmo tipo
            if(record){ // Se já tiver uma ação com o mesmo ID vai apenas adicionar quantidade
                record.quantity += quantity
            } else{ // adicionar uma nova ação
                state.stocks.push({
                    id: stockId,
                    quantity: quantity
                })
            }
            state.funds -= stockPrice * quantity // ajustar o saldo pra refletir a compra
        },
        sellStock(state, {stockId, quantity, stockPrice}){ // (estado, {ordem de venda})
            const record = state.stocks.find(element => element.id == stockId)
            if(record.quantity > quantity){ // a quantidade de ações que eu tenho é maior que a quantidade de ações que quero vender?
                record.quantity -= quantity
            } else {
                state.stocks.splice(state.stocks.indexOf(record), 1) // vender tudo (removendo um elemento do array)
            }
            state.funds += stockPrice * quantity // ajustar o saldo para refletir a venda
        },
        setPortfolio(state, portfolio){
            state.funds = portfolio.funds
            state.stocks = portfolio.stockPortfolio ? portfolio.stockPortfolio : []
        }
    },
    actions: {
        sellStock({commit}, order){
            commit('sellStock', order) // chamando a mutation
        },
    },
    getters: {
        stockPortfolio(state, getters){ // vai retornar todas as ações que tenho
            return state.stocks.map(stock => {
                const record = getters.stocks.find(element => element.id == stock.id) // precisa usar o getters para pegar do stocks/modules (é ele que tem todas as informações de uma ação)
                return { // ajustado para exibir todas as características de uma ação e não só o Id e a quantidade
                    id: stock.id,
                    quantity: stock.quantity,
                    name: record.name, // nova informação
                    price: record.price // nova informação
                }
            })
        },
        funds(state){ // obter o estado do saldo, o valor que o usuário possui
            return state.funds
        }
    }
}