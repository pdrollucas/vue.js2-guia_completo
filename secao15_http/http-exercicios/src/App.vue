<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
		<b-alert show dismissible v-for="mensagem in mensagens" :key="mensagem.texto" :variant="mensagem.tipo">{{ mensagem.texto }}</b-alert>
		<b-card>
			<b-form-group label="Nome: ">
				<b-input type="text" size="lg" v-model="usuario.nome" placeholder="Informe o seu nome">

				</b-input>
			</b-form-group>
			<b-form-group label="Email">
				<b-input type="text" size="lg" v-model="usuario.email" placeholder="Informe o seu email">
				
				</b-input>
			</b-form-group>
			<hr>
			<b-button variant="primary" size="lg" @click="salvar">Salvar</b-button>
			<b-button variant="success" size="lg" @click="obterUsuarios" class="ml-3">Obter usuários</b-button>
		</b-card>
		<hr>
		<b-list-group>
			<b-list-group-item v-for="(usuario, id) in usuarios" :key="id">
				<strong>Nome: </strong> {{ usuario.nome }} <br>
				<strong>Email: </strong> {{ usuario.email }} <br>
				<strong>ID: </strong> {{ id }} <br>
				<div class="mt-2">
					<b-button variant="warning" size="lg" @click="alterar(id)">Alterar</b-button>
					<b-button variant="danger" class="ml-3" size="lg" @click="excluir(id)">Excluir</b-button>
				</div>
			</b-list-group-item>
		</b-list-group>
	</div>
</template>

<script>
export default {
	// created(){
	// 	this.$http.post('usuarios.json', {
	// 		nome: "Maria",
	// 		email: "maria.maria@gmail.com"
	// 	}).then(res => console.log(res))
	// }
		data(){
			return{
				mensagens: [],
				usuarios: [],
				id: null,
				usuario: {
					nome: '',
					email: '',
				}
			}
		},
		methods: {
			limpar(){
				this.usuario.nome = ''
				this.usuario.email = ''
				this.id = null,
				this.mensagens = []
			},

			// post serve para incluir os dados    --- como se fosse um CREATE
			/*salvar(){
				this.$http.post('usuarios.json', this.usuario)
					.then(() => this.limpar())
			},*/
			//salva ou edita com base na existência ou não do id
			salvar(){
				const metodo = this.id ? 'patch' : 'post'
				const finalURL = this.id ? `/${this.id}.json` : '.json'
				this.$http[metodo](`/usuarios${finalURL}`, this.usuario).then(() => {
					this.limpar()
					this.mensagens.push({
						texto: "Operação realizada com sucesso!",
						tipo: 'success'
					})	
				})
			},

			// get serve para pegar os dados    --- como se fosse um READ
			//posso tanto escrever "this.$http.get()" como também "this.$http()"
			obterUsuarios(){
				this.$http.get('usuarios.json').then(res => {
					this.usuarios = res.data
					console.log(this.usuarios)
				})
			},

			//
			alterar(id){
				this.id = id
				this.usuario = { ...this.usuarios[id] }
			},

			//
			excluir(id){
				this.$http.delete(`/usuarios/${id}.json`)
					.then(() => {
						this.limpar()
						this.mensagens.push({
							mensagem: 'Operação realizada com sucesso',
							tipo: 'success'
						})
					})
					.catch(() => {
						this.limpar()
						this.mensagens.push({
							texto: "Problema ao realizar operação :(",
							tipo: 'danger'
						})
					})
			}

		}
}
</script>

<style>
#app {
	font-family: 'Avenir', Helvetica, Arial, sans-serif;
	-webkit-font-smoothing: antialiased;
	-moz-osx-font-smoothing: grayscale;
	color: #2c3e50;
	font-size: 1.5rem;
}

#app h1 {
	text-align: center;
	margin: 50px;
}
</style>
