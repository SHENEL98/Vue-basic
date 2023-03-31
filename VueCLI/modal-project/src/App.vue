<template>
  <div> 
    <h1>{{ title }}</h1>
    <div v-if="showModal">
      <Modal header="Sign up for giveaway !" :subHeader="subHeader" 
      text="check prop is work or not" theme="red" @close="toggleModal"/>
    </div>
    <button @click.left="toggleModal">Open Modal</button>
  </div>
</template>

<script>
import Modal from './components/Modal.vue'
export default {
  name: "App",
  components: {Modal},
  data() {
    return {
      title: "My First Vue App :)",
      subHeader: "Subheader is here",
      showModal: false
    };
  },
  methods:{
     toggleModal(){
      this.showModal = !this.showModal
     }
  }
};
</script>

<style scoped>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}h1{
  border-bottom: 1px solid #ddd;
  display: inline-block;
}
</style>
