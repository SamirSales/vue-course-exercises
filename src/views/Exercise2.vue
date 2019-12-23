<template>
    <div>
        <div>
            <button @click="showAlert()">Show alert</button>
        </div>

        <div>
            <input type="text" @keydown="listenKeydown"/>
            <p>{{ value }}</p>
        </div>

        <div>
            <input type="text" @keydown="listenKeydownWithEnterConfirmation"/>
            <p>{{ value }}</p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value: ""
        }
    },

    methods:{
        showAlert(){
            alert("Hello world!!!");
        },

        listenKeydown(event){
            this.value = event.target.value;
        },

        listenKeydownWithEnterConfirmation(event){
            if(event.code === "Enter"){
                this.value = event.target.value;
            }
        }
    }
}
</script>

<style scoped>
div {
    margin: 8px;
    padding: 6px;
}
</style>