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
          <p>Example of classes: <i>thick-edge, square, circle, green, orange</i>.</p>
          <input type="text" placeholder="class 1" v-model="class1"/>
          <input type="text" placeholder="class 2" v-model="class2"/>
          <input type="text" placeholder="class 3" v-model="class3"/>
          <div :class="[class1, class2, class3]">Test to attach class</div>
        </div>

        <hr />

        <div>
          <p>Example of classes: <i>thick-edge, square, circle, green, orange</i>.</p>
          <input type="text" placeholder="Enter some class" v-model="class4"/>
          <input type="text" placeholder="Enter true/false" v-model="trueOrFalseText"/>
          <div :class="[trueOrFalseText === 'true' ? class4 : '']">Test to attach class</div>
        </div>

        <hr />

        <div>
          <input type="text" placeholder="Background color" v-model="style1"/>
          <input type="text" placeholder="Text color" v-model="style2"/>
          <input type="text" placeholder="Padding" v-model="style3"/>
          <div 
            :style="{backgroundColor: style1, color: style2, padding: style3}"
          >Test to attach styles</div>
        </div>

        <hr />

        <div>
          <button @click="startProgress()">Start Progress</button>
          <div class="progress-bar-content">
            <div class="progress-bar" :style="{width: (progressWidth + '%')}"></div>
          </div>
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
      class4: "",
      trueOrFalseText: "true",

      style1: "",
      style2: "",
      style3: "",
      progressWidth: 0
    }
  },

  methods:{
      startEffect(){
        setInterval(() => {
          this.highlighted = !this.highlighted;
        }, 500);        
      },

      startProgress(){
        setInterval(() => {
          if(this.progressWidth < 100){
            this.progressWidth += 5;
          }
        }, 700);  
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
  border: solid 1px #333333;
  font-size: 13px;
  font-weight: 800;
  padding: 40px;
}

.square{
  height: 50px;
  width: 50px;
  margin: 30px;
  border-radius: 0%;
  border: solid 1px #333333;
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
  border: solid 4px #000 !important;
}

.progress-bar-content{
  height: 20px;
  width: 300px;
  background-color: gray;
  border: solid 1px #333333;
}

.progress-bar{
  height: 20px;
  width: 0%;
  background-color: green;
}
</style>