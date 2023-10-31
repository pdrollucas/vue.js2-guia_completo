<!-- https://v2.vuejs.org/v2/guide/custom-directive -->
<!-- https://vuejs.org/guide/reusability/custom-directives.html -->

<!-- No vue.js 2

	Funções hooks de uma diretiva:

	1- bind: é chamado apenas uma vez quando a diretiva é interligada ao elemento.
	2- inserted: elemento inserido no nó pai
	3- update: quando o componente é atualizado (não garante que ele seja chamado antes de todas as atualizações dos elementos filhos)
	4- componentUpdated: quando o componente é atualizado (todos os filhos já foram atualizados)
	5- unbind: quando a diretiva é desvinculada do elemento

	Argumentos passados (apenas o el pode ser mexido, o resto deve ser tratado como apenas leitura):

	1- el - o unico a ser mexido
	2- binding
	3- vnode - nó virtual
	4- oldVnode

	A anatomia de uma diretiva:

		v-exemplo:argumento.modificador1.modificador2.modificador3="'valor'"

-->

<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'abelhaa'"></p>
		<p v-html="'<strong>abelha</strong>'"></p>
		<hr> <!-- as diretivas estão no main.js -->
		<p v-destaque>1 - Usando diretiva personalizada</p> 
		<p v-destaque2="'tomato'">2 - Usando diretiva personalizada</p> 
		<p v-destaque2="cor">3 - Usando diretiva personalizada</p>
		<hr>
		<p v-destaque3:fundo="'yellow'">4 - Usando diretiva personalizada com argumento</p>
		<p v-destaque3="'orange'">4 - Usando diretiva personalizada com argumento</p>
		<hr>
		<p v-destaque4:fundo.atrasar="'lightgray'">5 - Usando diretiva personalizada com argumento e modificador</p>
		<p v-destaque4.atrasar="'blue'">5 - Usando diretiva personalizada sem argumento e com modificador</p>
		<hr>
		<p v-destaque-local:fundo.atrasar="'pink'">6 - Usando diretiva localmente com argumento e modificador</p>
		<p v-destaque-local.atrasar="'purple'">6 - Usando diretiva localmente sem argumento e com modificador</p>
		<hr>
		<p v-destaques-locais:fundo.atrasar.alternar="'pink'">7 - Usando diretiva localmente com argumento e dois modificadores</p>
		<p v-destaques-locais2:fundo.atrasar.alternar="{cor1: 'blue', cor2: 'green', atraso: 9000, intervalo: 3000}">7 - Usando diretiva localmente com argumento e dois modificadores (forma diferente)</p>
	</div>
</template>

<script>
export default {
	directives: {
		'destaque-local': {
			bind(el, binding, vnode){

			let atraso = 0
			if(binding.modifiers['atrasar']) atraso = 6000

			setTimeout(() => {
				if(binding.arg === 'fundo'){
					el.style.backgroundColor = binding.value
				} else {
					el.style.color = binding.value
				}
			}, atraso)
			}
		},

		'destaques-locais': {
			bind(el, binding, vnode){
				const aplicarCor = cor => {
					if(binding.arg === 'fundo'){
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let atraso = binding.value
				if(binding.modifiers['atrasar']) atraso

				let cor1 = binding.value
				let cor2 = 'brown'
				let corAtual = cor1

				setTimeout(() => {
					setInterval(() => {
						if(binding.modifiers['alternar']){
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						} else {
							aplicarCor(binding.value)
						}		
					}, 4000)
				}, atraso)
			}	
		},
		'destaques-locais2': {
			bind(el, binding, vnode){
				const aplicarCor = cor => {
					if(binding.arg === 'fundo'){
						el.style.backgroundColor = cor
					} else {
						el.style.color = cor
					}
				}

				let atraso = 0
				if(binding.modifiers['atrasar']) binding.value.atraso

				let cor1 = binding.value.cor1
				let cor2 = binding.value.cor2
				let corAtual = cor1

				setTimeout(() => {
					setInterval(() => {
						if(binding.modifiers['alternar']){
							corAtual = corAtual === cor1 ? cor2 : cor1
							aplicarCor(corAtual)
						} else {
							aplicarCor(binding.value.cor1)
						}		
					}, binding.value.intervalo)
				}, atraso)
			}	
		}
	},

	data(){
		return{
			cor: 'lightblue'
		}
	}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	text-align: center;
	color: #2c3e50;
	margin-top: 60px;
	font-size: 2.5rem;
}
</style>
