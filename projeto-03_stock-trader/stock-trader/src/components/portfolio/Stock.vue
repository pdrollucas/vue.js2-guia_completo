<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4> <!-- 12 colunas no celular, 6 colunas no tablet, 4 colunas em telas grandes -->
        <v-card class="blue darken-4 white--text">
            <v-card-title class="heaadline">
                <h2>
                    {{ stock.name }}
                    <h5>
                        (Preço: {{ stock.price | currency }}) | Qtde: {{ stock.quantity }}
                    </h5>
                </h2>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number" v-model.number="quantity" :error="insufficientQuantity"></v-text-field>
                <v-btn class="blue darken-4 white--text" @click="sellStock" :disabled="insufficientQuantity || quantity <= 0 || !Number.isInteger(quantity)">{{ insufficientQuantity ? 'Qtde. insuficiente' : 'Vender' }}</v-btn>
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
            insufficientQuantity(){ // verificar se a quantidade de saldo é suficiente
                return this.quantity > this.stock.quantity
            }
        },
        methods: {
            sellStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }

                this.$store.dispatch('sellStock', order) // dispatch serve para disparar uma ação
                this.quantity = 0
            }
        }
    }
</script>

<style>

</style>