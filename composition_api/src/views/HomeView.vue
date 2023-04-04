<template>
  <div class="home">
   <h2>Home</h2>
   <p ref="p">Name is : {{ name }} and age {{ age }}</p>

   <button @click="handleClick">CLick Me</button>

   </div>
</template>

<script>
// @ is an alias to /src
import { ref } from 'vue' 

export default {
  name: 'HomeView',
  setup(){
    console.log('setup')

    const p = ref(null)

    let name = 'roy'
    let age =30
    //these are not reactive values(above values)

    const handleClick = () => {
      console.log('you clicked me') 
      console.log(p, p.value)
      p.value.classList.add('test')
      p.value.textContent = 'Hello, How are you ?' //in here when you click button ref(p) will change to this content
    }

    return{
      name:name,
      age, // this is same as above
      handleClick,
      p
    }
  },
  // data(){
  //   return{
  //     //this are reactive values
  //     age: 40
  //   }
  // }

  // created(){
  //   console.log('created')
  // },
  // mounted(){
  //   console.log('mounted')
  // }
}
</script>
