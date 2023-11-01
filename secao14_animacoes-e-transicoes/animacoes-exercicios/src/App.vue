<template>
	<div id="app" class="container-fluid">
		<h1>Animações</h1>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir = !exibir">Exibir mensagem</b-button>
		<transition name="fade"> <!-- sem o appear não irá fazer a animação quando a página carregar -->
			<b-alert variant="info" show v-if="exibir">{{ frase }}</b-alert>
		</transition>
		<transition name="slide" appear enter-active-class="animated bounce"> 
			<!-- o appear serve para fazer a animação logo no carregamento da página -->
			<!-- o leave e o enter-active-class="animated bounce" foi importado do animate.css (ta no index.html) -->
			<b-alert variant="info" show v-if="exibir">{{ frase }}</b-alert> <!-- quando tem apenas um elemento, também da para usar o v-show -->
		</transition>
		<br>
		<hr>
		<select v-model="tipoAnimacao" class="mb-4">
			<option value="fade">Fade</option>
			<option value="slide">Slide</option>
		</select>
		<transition :name="tipoAnimacao">
			<b-alert variant="info" show v-if="exibir">{{ frase }}</b-alert>
		</transition>
		<hr>
		<b-button variant="primary" class="mb-4" @click="mostrar = !mostrar">Mostrar mensagem</b-button>

		<transition :name="tipoAnimacao" mode="out-in"> <!-- mode="out-in" - primeiro sai um elemento para depois outro entrar -->
			<b-alert variant="info" show v-if="mostrar" key="info">{{ frase }}</b-alert>
			<b-alert variant="warning" show v-else key="warn">{{ frase }}</b-alert>
		</transition>
	</div>
</template>

<script>

export default {
	data(){
		return{
			frase: 'Mensagem a ser exibida',
			exibir: true,
			mostrar: false,
			tipoAnimacao: 'fade'
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
	font-size: 1.5rem;
}

.fade-enter{
	opacity: 0;
}

.fade-enter-active{
	transition: opacity 2s;
}
/*
.fade-enter-to{
	opacity: 1;
}

.fade-leave{
	opacity: 1;
}
*/
.fade-leave-active{
	transition: opacity 2s;
}

.fade-leave-to{
	opacity: 0;
}

@keyframes slide-in{
	from{transform: translateY(40px);}
	to{transform: translateY(0);}
}

@keyframes slide-out{
	from{transform: translateY(0);}
	to{transform: translateY(40px);}
}

.slide-enter, .slide-leave-to{
	opacity: 0;
}

.slide-enter-active{
	animation: slide-in 2s ease;
	transition: opacity 2s;
}

.slide-leave-active{
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

</style>
