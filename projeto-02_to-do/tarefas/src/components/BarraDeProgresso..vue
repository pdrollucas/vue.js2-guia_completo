<template>
    <div class="borda">
        <div class="preenchimento" :style="{width: progress + '%'}"></div>
        <span>{{ progress }}%</span>
    </div>
</template>

<script>
    export default{
        props: {
            progress: { type: Number, default: 0 }
        }
    }
</script>

<style scoped>
    .borda{
        position: relative;
        border: 2px solid gray;
        border-radius: 4px;
        width: 50%;
        height: 5vh;
        overflow: hidden;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    span{
        position: absolute;
        color: white;
    }

    .preenchimento{
        position: absolute;
        background-color: darkgreen;
        height: 100%;
        align-self: flex-start;
    }

</style>