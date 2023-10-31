export default{
    data(){
        return{
            fruta: '',
            frutas: ['maça', 'banana', 'uva']
        }
    },
    methods: {
        add(){
            if(this.fruta != ''){
                this.frutas.push(this.fruta)
                this.fruta = ''
            } else{
                alert("Digite algo antes de adicionar")
            }
        }
    }
}