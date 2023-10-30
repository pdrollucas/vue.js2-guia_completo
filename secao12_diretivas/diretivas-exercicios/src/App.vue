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

-->

<template>
	<div id="app">
		<h1>Diretivas</h1>
		<hr>
		<p v-text="'abelhaa'"></p>
		<p v-html="'<strong>abelha</strong>'"></p>
	</div>
</template>

<script>
export default {
	
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
