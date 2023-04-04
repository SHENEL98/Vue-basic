<template>
  <div class="home">
    <h1>Home</h1>
    <h2>Refs</h2>
    <p>{{ vueOne.name }} - {{ vueOne.age }}</p>
    <button @click="updateVueOne">Update VueOne</button>

    <h2>Reactive</h2>
    <p>{{ vueTwo.name }} - {{ vueTwo.age }}</p>

    <button @click="updateVueTwo">Update VueOne</button>

  </div>
</template>

<script>
import { ref, reactive } from "vue";

export default {
  name: "HomeView",
  setup() {
     const vueOne = ref({name:'Roy',age:26})
     const vueTwo = reactive({name:'Kamal',age:80})

     const updateVueOne = () => {
      vueOne.value.age = 30
     }

     const updateVueTwo = () => {
      vueTwo.age = 87
     }


    return {
      vueOne, updateVueOne, vueTwo,updateVueTwo
    };
  },
  
};
</script>
