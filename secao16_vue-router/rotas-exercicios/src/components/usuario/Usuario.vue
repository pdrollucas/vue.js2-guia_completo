<template>
    <div class="usuario">
        <h1>Usuario</h1>
        <hr>
        <router-view></router-view>
        <button sucesso @click="irParaInicio">Voltar</button>
    </div>
</template>

<script>
    export default{
        // Estratégia recente - é preciso colocar o "props: true" na configuração da rota
        //props: ['id'],

        /* Estratégia um pouco mais antiga

        data(){
            return{
                id: this.$route.params.id
            }
        },

        // para monitorar as mudanças dos ids, sendo elas parte do mesmo componente
        watch: {
            $route(to, from){
                this.id = to.params.id
            }
        },
        */

        methods: {
            irParaInicio(){
                //this.$router.push('/')
                //this.$router.push({ path: '/' })
                this.$router.push({name: 'inicio'})
            }
        }
    }
</script>

<style>

</style>