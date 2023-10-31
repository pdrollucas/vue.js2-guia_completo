<!--
	Filtros são transformações que você pode fazer em cima dos valores, 
	assim como as propriedades computadas. É mais simples, mas nem sempre tão performático.

	O filtro é ideal para transformações simples, tais como o filtroCPF feito no projeto


	Mixins são formas de reuso baseadas em composição. Feito para reduzir duplicações de código.
	O que está dentro do componente tem mais peso do que o que está dentro do mixin
	Mixin global não é muito usado pq ele é aplicado em todos os componentes da aplicação
-->

<template>
	<div id="app">
		<h1>Filtros & Mixins</h1>
		<hr>
		<p>{{ cpf | filtroCPF | inverter}}</p> <!-- 'filtroCPF' foi feito localmente e 'inverter' foi globalmente-->
		<input type="text" :value="cpf | filtroCPF ">
		<hr>
		<Frutas/>
		<hr>
		<div>
        <ul>
            <li v-for="fruta in frutas" :key="fruta">
                {{ fruta }}
            </li>
        </ul>
        <input type="text" v-model="fruta" @keydown.enter="add">
    </div>
	</div>
</template>

<script>
import Frutas from './Frutas.vue'
import frutasMixin from './frutasMixin'

export default { 
	components: {Frutas},
	mixins: [frutasMixin],
	data() {
		return{
			cpf: '00602201213'
		}
	},

	filters: {
		filtroCPF(cpf){
			const arr = cpf.split('')
			arr.splice(3, 0, '.')
			arr.splice(7, 0, '.')
			arr.splice(11, 0, '-')
			return arr.join('')
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
