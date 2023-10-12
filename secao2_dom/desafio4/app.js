new Vue({
	el: '#desafio',
	data: {
		classeDestaque: 'destaque',
		classeEncolher: 'encolher',
		classeCSS: '',
		aplicarGirar: '',
		estilo: '',
		progresso: 'progresso',
		width: '0'
	},
	methods: {
		iniciarEfeito() {
			setInterval(() => {
				this.classeDestaque = this.classeDestaque == 'destaque' ? this.classeEncolher : 'destaque'
			}, 1000)
		},

		iniciarProgresso() {
			let valor = 0
			const temporizador = setInterval(() => {
				valor += 10,
				this.width = `${valor}vw`
				if(valor == 100) clearInterval(temporizador)
			}, 1000)
		}
	}
})
