<template>
    <div @click="$emit('taskStateChanged', task)" class="box" :class="stateClass">
        <button @click.stop="$emit('taskDeleted', task)">x</button>
        <h3>{{ task.nome }}</h3>
    </div>    
</template>

<script>
    export default{
        props:{
            task: {type: Object, required: true}
        },
        computed: {
            stateClass(){
                return {
                    pending: this.task.pending,
                    done: !this.task.pending
                }
            }
        }
    }
</script>

<style scoped>
    .box{
        height: 15vh;
        width: 10vw;
        padding: 0.5vw;
        border-radius: 4px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        margin: 1vw;
        cursor: pointer;
        user-select: none;
        position: relative;
    }
    button{
        border-radius: 100%;
        color: white;
        border: none;
        position: absolute;
        top: 10px;
        right: 10px;
        cursor: pointer;
    }

    .pending button{
        background-color: brown;
    }

    .done button{
        background-color: rgb(2, 56, 2);
    }

    h3{
        text-align: center;
        color: white;
    }

    .pending{
        background-color: tomato;
        border-left: 1vw solid brown;
    }

    .done{
        background-color:darkgreen;
        border-left: 1vw solid rgb(2, 56, 2);
    }

    .done h3{
        text-decoration: line-through;
    }
</style>