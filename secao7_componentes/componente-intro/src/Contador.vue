<template>
    <div class="contador">
        <span>{{ contador }}</span>
        <button @click="adicionar">+</button>
        <button @click="subtrair">-</button>
    </div>
</template>

<script>
    export default{
        data(){
            return {
                contador: 0
            }
        },
        methods: {
            adicionar(){
                this.contador++
            },
            subtrair(){
                this.contador--
            }
        }
    }
</script>

<style scoped>

    .contador{
        display: flex;
        align-items: center;
        justify-content: center;
        gap: 1vw;
    }

    .contador span{
        border-bottom: 1px solid gray;
    }

    .contador button{
        height: 20px;
        width: 20px;
        padding: 20px;
        border-radius: 100%;
        background-color: tomato;
        color: white;
        outline: none;
        border: none;
        margin-bottom: 1vw;
        display: flex;
        justify-content: center;
        align-items: center;
    }
</style>