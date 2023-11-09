<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4> <!-- 12 colunas no celular, 6 colunas no tablet, 4 colunas em telas grandes -->
        <v-card class="brown darken-3 white--text">
            <v-card-title class="heaadline">
                <h2>{{ stock.name }}<h5> (Preço: {{ stock.price | currency}})</h5></h2>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number" v-model.number="quantity" :error="insufficientFunds"></v-text-field>
                <v-btn 
                    class="brown darken-3 white--text" 
                    @click="buyStock" 
                    :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity)"
                    >
                    {{ insufficientFunds ? 'Saldo insuficiente' : 'Comprar' }}
                </v-btn>
            </v-container>
        </v-card>
    </v-flex>
</template>

<script>
    export default{
        props: ['stock'],
        data(){
            return{
                quantity: 0
            }
        },
        computed: {
            funds(){
                return this.$store.getters.funds
            },
            insufficientFunds(){ // verificar se a quantidade de saldo é suficiente
                return this.quantity * this.stock.price > this.funds // se a quantidade comprada vezes o preço for maior que os fundos, retorna true (insuficiente)
            }
        },
        methods: {
            buyStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }

                this.$store.dispatch('buyStock', order) // dispatch serve para disparar uma ação
                this.quantity = 0
            }
        }
    }
</script>

<style>

</style>