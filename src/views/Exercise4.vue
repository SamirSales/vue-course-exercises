<template>
    <div>
        <div>
            <button @click="startEffect()">Start effect</button>
            <div id="effect" 
              :class="{'highlight': highlighted, 'shrink': !highlighted}"
            ></div>
        </div>

        <div :class="['circle', 'green']">I have class :)</div>

        <div>
          <p>Exemple of classes: <i>thick-edge, square, circle, green, orange</i>.</p>
          <input type="text" placeholder="class 1" v-model="class1"/>
          <input type="text" placeholder="class 2" v-model="class2"/>
          <input type="text" placeholder="class 3" v-model="class3"/>
          <div :class="[class1, class2, class3]">Test to attach class</div>
        </div>
    </div>
</template>

<script>
export default {
  data(){
    return {
      highlighted: true,
      class1: "",
      class2: "",
      class3: "",
    }
  },

  methods:{
      startEffect(){
        setInterval(() => {
          this.highlighted = !this.highlighted;
        }, 500);        
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

.circle{
  height: 50px;
  width: 50px;
  margin: 30px;
  border-radius: 100%;
  font-size: 13px;
  font-weight: 800;
  padding: 40px;
}

.square{
  height: 50px;
  width: 50px;
  margin: 30px;
  border-radius: 0%;
  font-size: 13px;
  font-weight: 800;
  padding: 40px;
}

.green {
  background-color: green;
  color: lightgrey;
}

.orange {
  background-color: orange;
  color: black;
}

.thick-edge{
  border: solid 4px #000;
}
</style>