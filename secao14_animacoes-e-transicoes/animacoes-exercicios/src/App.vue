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
		<br>
		<hr>
		<b-button variant="primary" class="mb-4" @click="exibir2 = !exibir2">Exibir caixa</b-button>
		<!-- Animações em JavaScript -->
		<transition
			:css="false"
			@before-enter="beforeEnter"
			@enter="enter"
			@after-enter="afterEnter"
			@enter-cancelled="enterCancelled"

			@before-leave="beforeLeave"
			@leave="leave"
			@after-leave="afterLeave"
			@leave-cancelled="leaveCancelled"
		> <!-- :css="false" serve para previnir o transition de outros transitions com css -->
			<div class="caixa" v-if="exibir2"></div>
		</transition>
		<br>
		<hr>
		<div class="mb-4">
			<b-button variant="primary" class="mr-3" @click="botaoSelecionado = 'AlertaInfo'">Info</b-button>
			<b-button variant="secondary" @click="botaoSelecionado = 'AlertaAviso'">Aviso</b-button>
		</div>
		<transition name="fade" mode="out-in">
			<component :is="botaoSelecionado"></component>
		</transition>
		<br>
		<hr> <!-- transition-group: transicoes para um grupo de elementos -->
		<b-button variant="primary" @click="adicionarAluno" class="mb-4 mr-3" >Adicionar aluno</b-button>
		<transition-group name="slide" tag="div"> <!-- o atributo tag irá gerar todos os elemtnos do transition como divs -->
			<ul v-for="(aluno, i) in alunos" :key="aluno">
				<li @click="removerAluno(i)">{{ aluno }}</li>
			</ul>
		</transition-group>

	</div>
</template>

<script>
import AlertaInfo from './AlertaInfo.vue'
import AlertaAviso from './AlertaAviso.vue'

export default {
	components: {AlertaInfo, AlertaAviso},
	data(){
		return{
			frase: 'Mensagem a ser exibida',
			exibir: true,
			mostrar: false,
			tipoAnimacao: 'fade',
			exibir2: false,
			larguraBase: 0,
			botaoSelecionado: AlertaInfo,
			alunos: ['Pedro', 'Paulo', 'Ricardo', 'Ana', 'Maria']
		}
	},
	// animação com javascript
	methods: {
		adicionarAluno(){
			const n = Math.random().toString(36).substring(2)
			this.alunos.push(n)
		},
		removerAluno(indice){
			this.alunos.splice(indice, 1)
		},
		animar(el, done, subtrair){
			let rodada = 1
			const temporizador = setInterval(() => {
				const novaLargura = this.larguraBase + 
				(subtrair ? - rodada * 10 : rodada * 10)
				el.style.width = `${novaLargura}px`
				rodada++
				if(rodada > 30){
					clearInterval(temporizador)
					done()
				}
			}, 20)
		},
		beforeEnter(el){
			this.larguraBase = 0
			el.style.width = `${this.larguraBase}px`
		},
		enter(el, done){
			this.animar(el, done, false)
		},
		afterEnter(el){
			console.log("afterEnter")
		},
		enterCancelled(el){
			console.log("enterCancelled")
		},
		beforeLeave(el){
			this.larguraBase = 300
			el.style.width = `${this.larguraBase}px`
		},
		leave(el, done){
			this.animar(el, done, true)
		},
		afterLeave(el){
			console.log("afterLeave")
		},
		leaveCancelled(el){
			console.log("leaveCancelled")
		},
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
	padding-bottom: 2vw;
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
	width: 100%;
	position: absolute;
	animation: slide-out 2s ease;
	transition: opacity 2s;
}

.slide-move{
	transition: transform 1s;
}

.caixa{
	margin: 0 auto;
	height: 100px;
	width: 300px;
	background-color: aquamarine;
}

</style>
