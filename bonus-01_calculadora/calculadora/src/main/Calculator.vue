<template>
    <div class="calculator">
        <Display :value="displayValue"/>
        <Button label="AC" triple @onClick="clearMemory"></Button>
        <Button label="/" operation @onClick="setOperation"></Button>
        <Button label="7" @onClick="addDigit"></Button>
        <Button label="8" @onClick="addDigit"></Button>
        <Button label="9" @onClick="addDigit"></Button>
        <Button label="*" operation @onClick="setOperation"></Button>
        <Button label="4" @onClick="addDigit"></Button>
        <Button label="5" @onClick="addDigit"></Button>
        <Button label="6" @onClick="addDigit"></Button>
        <Button label="-" operation @onClick="setOperation"></Button>
        <Button label="1" @onClick="addDigit"></Button>
        <Button label="2" @onClick="addDigit"></Button>
        <Button label="3" @onClick="addDigit"></Button>
        <Button label="+" operation @onClick="setOperation"></Button>
        <Button label="0" double @onClick="addDigit"></Button>
        <Button label="." @onClick="addDigit"></Button>
        <Button label="=" operation @onClick="setOperation"></Button>
    </div>    
</template>

<script>
import Display from '../components/Display.vue';
import Button from '../components/Button.vue';

export default {
    components: {Display, Button},
    data: function(){
        return {
            displayValue: '0', // o valor exibido na calculadora
            clearDisplay: false, // se o display deve ser limpo
            operation: null, // operação atual
            values: [0, 0], // armazena os dois operandos da operação
            current: 0 // qual operando está sendo inserido/editado
        }
    },
    methods: {
        clearMemory(){
            Object.assign(this.$data, this.$options.data()) // essa função faz com que o objeto volte ao estado inicial
        },
        setOperation(operation){
            if(this.current === 0){ // verifica se o operando atual é o primeiro (índice 0)
                this.operation = operation // configura a operação do valor atual com o valor do botão clicado
                this.current = 1 // muda para o próximo operando
                this.clearDisplay = true // o display é limpo
            } else { // se o operando atual não for o primeiro
                const equals = operation === '='
                const currentOperation = this.operation
                try{
                    this.values[0] = eval(
                        `${this.values[0]} ${currentOperation} ${this.values[1]}` // avalia a expressão matemática e atribui o resultado ao primeiro operando
                    )
                } catch (e){
                    this.$emit('onError', e)
                }

                this.values[1] = 0 // reseta o segundo operando para 0
                this.displayValue = this.values[0] // atualiza o valor exibido na calculadora com o resultado da operação
                this.operation = equals ? null : operation // se a operação for '=' define a operação como nulo
                this.current = equals ? 0 : 1
                this.clearDisplay = !equals // o display não precisa ser limpo caso não for '='
            }
        },
        addDigit(n){
            if(n === '.' && this.displayValue.includes('.')){ // se já tiver um '.' não adicionar outro
                return
            }
            const clearDisplay = this.displayValue == 0 || this.clearDisplay // o display é limpo se o valor é 0 ou se 'clearDisplay' for true
            const currentValue = clearDisplay ? '' : this.displayValue // se 'clearDisplay' for falso armazena o valor na variável, se for true armazena uma string vazia
            const displayValue = currentValue + n // concatena o valor atual com o digito a ser adicionado

            this.displayValue = displayValue // atualiza o valor exibido com o novo valor
            this.clearDisplay = false
            this.values[this.current] = displayValue
        }
    }
}
</script>

<style>
    .calculator{
        height: 320px;
        width: 235px;
        border-radius: 5px;
        overflow: hidden;

        display: grid;
        grid-template-columns: repeat(4, 25%);
        grid-template-rows: 1fr 48px 48px 48px 48px 48px;
    }
</style>