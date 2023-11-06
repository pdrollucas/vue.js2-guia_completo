<template>
    <div class="menu">
        <ul>
            <router-link :to="{name: 'inicio'}" tag="li" active-class="active" exact><a>Início</a></router-link>
            <!-- exact serve para informar que a active class só vai funcionar quando for exatamente 
                o caminho correto. Sem o exact o início também ficava como ativo mesmo quando era 
                clicado no usuario por conta que o caminho do usuario tem uma "/" -->
            <router-link to="/usuario" tag="li" active-class="active"><a>Usuários</a></router-link>
        </ul>
    </div>
</template>

<script>

</script>

<style>
 
</style>