<template>
    <div class="tasks">
        <template v-if="tasks.length">
            <Tarefa v-for="(task, i) in tasks" :key="task.name" :task="task" 
                @taskDeleted="$emit('taskDeleted', i)" @taskStateChanged="$emit('taskStateChanged', i)">
            </Tarefa>
        </template>
        <p v-else class="no-task">Nenhuma tarefa cadastrada :)</p>
    </div>
</template>

<script>
    import Tarefa from './Tarefa.vue'

    export default{
        components:{
            Tarefa
        },

        props: {
            tasks: {
                type: Array,
                required: true
            }
        }
    }
</script>

<style scoped>

    .tasks{
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        width: 70vw;
    }
</style>