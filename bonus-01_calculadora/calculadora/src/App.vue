<template>
    <div id="app">
        <Calculator></Calculator>
    </div>
</template>

<script>
import Calculator from './main/Calculator.vue';

export default {
    components: {Calculator}
}
</script>

<style>
    @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;700&display=swap');

    *{
        font-family: 'Poppins', sans-serif;
    }

    body{
        margin: 0;
    }

    #app{
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: center;
        height: 100vh;
        color: #fff;
        background-color: #8EC5FC;
        background-image: linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%);
    }
</style>