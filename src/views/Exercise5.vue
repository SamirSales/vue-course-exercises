<template>
    <div>
        <div>
            <button @click="showParagraph = !showParagraph">Toggle</button>
            <p v-if="showParagraph">You either see me...</p>
            <p v-show="showParagraph">...or me</p>
        </div>

        <ul>
            <li v-for="(item, index) in fruits" :key="index">{{ index }} | {{ item }}</li>
        </ul>

        <ul>
            <li v-for="(value, key, index) in objectEx3" :key="index">
                {{ key }}: {{ value }} | index: {{ index }}
            </li>
        </ul>

        <ul>
            <li v-for="(value, key, index) in objectEx4" :key="index">
                <div v-if="key === 'data'">
                    | <span v-for="(itemArray, indexArray) in value" :key="'item'+indexArray">
                        {{ itemArray }} |
                    </span>
                </div>
                <div v-else>
                    {{ value }}
                </div>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    data(){
        return {
            showParagraph: true,
            fruits: ['banana', 'apple', 'orange', "grape"],

            objectEx3: {
                title: 'Lord of the Rings',
                author: 'J.R.R. Tolkiens',
                books: 3
            },

            objectEx4: {
                name: 'TESTOBJECT',
                data: [1.67, 1.33, 0.98, 2.21]
            }
        }
    }
}
</script>