<template>
	<div id="app" class="container">
		<h1>HTTP com Axios</h1>
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
				usuarios: [],
				usuario: {
					nome: '',
					email: '',
				}
			}
		},
		methods: {
			// post serve para incluir os dados
			salvar(){
				this.$http.post('usuarios.json', this.usuario)
					.then(resp => { // limpa formulário depois de enviado
						this.usuario.nome = ''
						this.usuario.email = ''
					})
			},

			// get serve para pegar os dados
			//posso tanto escrever "this.$http.get()" como também "this.$http()"
			obterUsuarios(){
				this.$http.get('usuarios.json').then(res => {
					this.usuarios = res.data
					console.log(this.usuarios)
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
