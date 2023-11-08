import Vue from 'vue'
import Vuex from 'vuex'

import carrinho from './modules/carrinho'
import parametros from './modules/parametros'

Vue.use(Vuex)

/*
    o Vuex funciona como um componente que é capaz de se comunicar com qualquer outro de forma direta,
evitando assim conversas paralelas, por exemplo: sem o vuex para fazer a comunicação para um neto era preciso primeiro passar pelo pai, depois para o filho e só depois para o neto

*/

export default new Vuex.Store({
    modules: {carrinho, parametros}
})