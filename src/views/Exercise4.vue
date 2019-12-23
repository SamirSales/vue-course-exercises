<template>
    <div>
        <div>
            <button @click="startEffect">Start effect</button>
            <div id="effect"></div>
        </div>
    </div>
</template>

<script>
export default {
    methods:{
        startEffect(){

        }
    }
}
</script>

<style scoped>
#effect {
  width: 100px;
  height: 100px;
  border: 1px solid black;
}

.highlight {
  background-color: red;
  width: 200px !important;
}

.shrink {
  background-color: gray;
  width: 50px !important;
}
</style>