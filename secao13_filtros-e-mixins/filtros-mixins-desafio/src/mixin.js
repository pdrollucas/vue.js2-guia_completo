export default{
    computed: {
		fraseComVirgula(){
			return this.texto.replace(/ /g, ',')
		},
		contarLetras(){
			return this.texto.split(' ').map(palavra => `${palavra} (${palavra.length})`).join('')
		}
	}
}