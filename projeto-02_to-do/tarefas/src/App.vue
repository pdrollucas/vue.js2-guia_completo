<template>
	<div id="app">
		<h1>Tarefas</h1>
		<barra :progress="progress"></barra>
		<adicionarTarefa @tarefaAdicionada="addTarefa"></adicionarTarefa>
		<tarefas :tasks="tasks" @taskDeleted="deleteTask" @taskStateChanged="toggleTaskState"></tarefas>
	</div>
</template>

<script>
import BarraDeProgresso from './components/BarraDeProgresso..vue'
import AdicionarTarefa from './components/AdicionarTarefa.vue'
import BoxDeTarefas from './components/BoxDeTarefas.vue'

export default {
	components: {
		barra: BarraDeProgresso,
		adicionarTarefa: AdicionarTarefa,
		tarefas: BoxDeTarefas
	},
	data(){
		return{
			tasks: []
		}
	},
	computed: {
		progress(){
			const total = this.tasks.length
			const done = this.tasks.filter(t => !t.pending).length
			return Math.round(done / total * 100) || 0
		}
	},
	watch: {
		/* Forma padrão
		tasks(){
			localStorage.setItem('tasks', JSON.stringify(this.tasks))
		}
		*/
		tasks: { // forma para monitorar profundamente, tanto a adição/subtração de tarefas, como também a conclusão ou não delas
			deep: true,
			handler(){
				localStorage.setItem('tasks', JSON.stringify(this.tasks))
			}
		}
	},
	methods: {
		addTarefa(task){
			//validação para não adicionar duas tarefas iguais
			const mesmoNome = t => t.nome === task.nome
			const novoNome = this.tasks.filter(mesmoNome).length == 0
			//
			if(novoNome){
				this.tasks.push({
					nome: task.nome,
					pending: task.pending || true
				})
			}
		},
		deleteTask(i){
			this.tasks.splice(i, 1)
		},
		toggleTaskState(i){
			this.tasks[i].pending = !this.tasks[i].pending
		}
	},
	
	created(){
			const json = localStorage.getItem('tasks')
			const array = JSON.parse(json)
			this.tasks = Array.isArray(array) ? array : []
	}
}
</script>

<style>
	*{
        box-sizing: border-box;
        margin: 0;
    }

	body {
		font-family: 'Lato', sans-serif;
		background: linear-gradient(to right, rgb(22, 34, 42), rgb(58, 96, 115));
		color: #FFF;
	}

	#app {
		display: flex;
		flex: 1;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		height: 100vh;
		gap: 3vh;
	}

	#app h1 {
		margin-bottom: 5px;
		font-weight: 300;
		font-size: 3rem;
	}
</style>
