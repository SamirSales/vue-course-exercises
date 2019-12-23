<template>
    <div>
        <p>VueJS is pretty cool - {{ name }} ({{ age }})</p>
        
        <p>Age x 3 = {{ 3 * age }}</p>

        <p>A RANDOM NUMBER BETWEEN 0 AND 1: {{ randomNumberBetween0And1() }}</p>

        <div>
            <img :src="imageSrc" height="250"/>
        </div>

        <input type="text" :value="name" />
    </div>
</template>

<script>
export default {
    data(){
        return {
            name: "Samir",
            age: 30,
            imageSrc: "https://avatars1.githubusercontent.com/u/3485190?s=460&v=4"
        }
    },

    methods:{
        randomNumberBetween0And1(){
            return Math.random();
        }
    }
}
</script>