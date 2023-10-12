new Vue({
    el: "#desafio",
    data: {
        name: "Pedro",
        age: 21,
        link: "http://cbissn.ibict.br/images/phocagallery/galeria2/thumbs/phoca_thumb_l_image03_grd.png"
    },
    methods: {
        multiplicacao: function(){
            return this.age * 3
        },
        randomNumber: function(){
            const number = Math.floor(Math.random() * 2);
            return number;
        }
    }

})