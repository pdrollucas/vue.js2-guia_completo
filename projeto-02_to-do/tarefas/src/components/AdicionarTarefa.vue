<template>
    <div class="campo">
        <input v-model="nome" @keydown.enter="add" type="text" placeholder="Nova tarefa?">
        <button @click="add">+</button>
    </div>
</template>

<script>
    export default {
        data(){
            return{
                nome: ''
            }
        },
        methods: {
            add(){
                this.$emit('tarefaAdicionada', {nome: this.nome})
                this.nome = ''
            }
        }
    }
</script>

<style scoped>
    .campo{
        display: flex;
        align-items: center;
        height: 6vh;
        border: 1px solid gray;
        border-radius: 4px;
    }

    input{
        height: 6vh;
        padding: 0.5vw;
        border: none;
        font-size: 1.1rem;
        outline: none;
    }

    button{
        height: 6vh;
        padding: 0.5vw;
        border: none;
        border-left: 2px solid gray;
        background-color:cornflowerblue;
        font-size: 1.2rem;
        color: white;
        outline: none;
    }
</style>