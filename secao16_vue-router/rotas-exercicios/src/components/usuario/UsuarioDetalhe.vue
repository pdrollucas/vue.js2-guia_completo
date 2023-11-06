<template>
    <div class="usuario-detalhe">
        <h3>Usuário detalhe</h3>
        <hr>
        <p><strong>Código: </strong> {{ id }} </p>
        <router-link tag="button" primario :to="{name: 'editarUsuario', params: {id}, query: {completo: false, lingua: 'en'}, hash: '#rodape'}">Editar</router-link>
    </div>
</template>

<script>
    export default{
        props: ['id'],
        beforeRouteEnter(to, from, next){ // usado para fazer verificações do usuario, se nao for valido não entra no componente por exemplo.
            console.log("antes de entrar dentro do componente detalhe")
            next()
        }
    }
</script>

<style>

</style>