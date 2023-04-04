<template>
  <div class="home">
   <h2>Home</h2>
   <p ref="p">Name is : {{ name }} and age {{ age }}</p>

   <button @click="handleClick">CLick Me</button>
    <button @click="age++">Add 1 Age</button>
   <input type="text" v-model="name">

   </div>
</template>

<script> 
import { ref } from 'vue' 

export default {
  name: 'HomeView',
  setup(){
    console.log('setup')

    const name = ref('roy')
    const age = ref(30) 
      
    

    const handleClick = () => {
      name.value = 'Kamal'
      age.value = 25
    
    }

    return{
      name,
      age, 
      handleClick
    }
  },
  data(){
    return{
      score: 5
    }
  }

}
</script>
