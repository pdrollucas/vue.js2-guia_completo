import Vue from 'vue'
import Router from 'vue-router'
import Inicio from './components/Inicio.vue'

//import Usuario from './components/usuario/Usuario.vue'
//import UsuarioLista from './components/usuario/UsuarioLista'
//import UsuarioDetalhe from './components/usuario/UsuarioDetalhe'
//import UsuarioEditar from './components/usuario/UsuarioEditar'

Vue.use(Router)

//Forma de carregar rotas tardiamente/sob demanda, evitando carregamento desnecessário (importante em aplicações que são grandes)
const Usuario = () => import(/* webpackChunkName: 'usuario' */"./components/usuario/Usuario") // webpackChunkName serve para nomear como o arquivo vai ficar no console
const UsuarioLista = () => import(/* webpackChunkName: 'usuarioLista' */ "./components/usuario/UsuarioLista")
const UsuarioDetalhe = () => import(/* webpackChunkName: 'usuarioDetalhe' */'./components/usuario/UsuarioDetalhe')
const UsuarioEditar = () => import(/* webpackChunkName: 'usuarioEditar' */ './components/usuario/UsuarioEditar')

const router = new Router({
    mode: 'history',
    scrollBehavior(to, from, savedPosition){ 
        if(savedPosition){
            return savedPosition
        } else if(to.hash){ // scrollar para o id/hash determinado no router-link através do parametro "hash"
            return {selector: to.hash}
        } else{
            return {x: 0, y: 0}
        }
    },
    routes: [
        {path: '/', component: Inicio, name: 'inicio'},
        {path: '/usuario', component: Usuario, props: true, children: [
            {path: '', component: UsuarioLista},
            {path: ':id', component: UsuarioDetalhe, props: true, beforeEnter: (to, from, next) => {
                console.log('antes da rota -> usuario detalhe') // beforeEnter mesma função que o beforeEach só que para um destino específico
                next()
            }},
            {path: ':id/editar', component: UsuarioEditar, props: true, name: 'editarUsuario'}
        ]},
        {path: '*', redirect: '/'} // se o usuário digitar uma rota não identificada, irá ser levado para a página inicial
        // Por conta do "props: true" todos os parametros dessa rota serão passados como propriedade
        // children cria rotas aninhadas para o componente usuário
    ]
})

// antes de cada navegação vai chamar essa função
router.beforeEach((to, from, next) => {
    console.log("antes das rotas -> forma global de fazer")
    next()
})

export default router

/*
    Diferentes modos de rotas:

        hash -> 
            localhost:8080/#/restoDaURL
            a requisição é feita na raiz do projeto, buildando tudo e depois é carregada
            o hash pode ser útil para navegar por dentro do site através de ids

        history -> 
            localhost:8080/restoDaURL
            a requisição é feita no caminho indicado. caso o caminho não exista, nada será carregado.
*/