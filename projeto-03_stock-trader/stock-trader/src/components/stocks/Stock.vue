<template>
    <v-flex class="pr-3 pb-3" xs12 md6 lg4> <!-- 12 colunas no celular, 6 colunas no tablet, 4 colunas em telas grandes -->
        <v-card class="brown darken-3 white--text">
            <v-card-title class="heaadline">
                <strong>{{ stock.name }}<small>(Preço: {{ stock.price }})</small></strong>
            </v-card-title>
        </v-card>
        <v-card>
            <v-container fill-height>
                <v-text-field label="Quantidade" type="number" v-model.number="quantity"></v-text-field>
                <v-btn class="brown darken-3 white--text" @click="buyStock" :disabled="quantity <= 0 || !Number.isInteger(quantity)">Comprar</v-btn>
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
        methods: {
            buyStock(){
                const order = {
                    stockId: this.stock.id,
                    stockPrice: this.stock.price,
                    quantity: this.quantity
                }

                console.log(order)
                this.quantity = 0
            }
        }
    }
</script>

<style>

</style>