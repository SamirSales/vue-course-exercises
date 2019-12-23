<template>
    <div>
        <div>
            <p>Current value: {{ value }}</p>
            <button @click="value += 5">Add 5</button>
            <button @click="value += 1">Add 1</button>
            <p>{{ result }}</p>
        </div>

        <div>
            <input type="text" />
            <p>{{ value }} </p>
        </div>
    </div>
</template>

<script>
export default {
    data(){
        return {
            value: 0
        }
    },

    computed:{
        "result"(){
            if(this.value !== 37){
                return "Not there yet."
            }
            return "Done!";
        }
    },

    watch:{
        "result"(){
            setTimeout(() => {
                this.value = 0;
            }, 5000);
        }
    }
}
</script>