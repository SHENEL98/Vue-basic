<template>
  <div>
    <h2>My First Vue App </h2>
    <h3>{{ title }}</h3>
    <Modal header="Sign up for giveaway !" :subHeader="subHeader" 
      text="check prop is work or not" theme="red" />
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
      subHeader: "Subheader is here"
    };
  },
  methods:{
    handleClick(){
      console.log(this.$refs.name)
      this.$refs.name.classList.add('active')
      this.$refs.name.focus()
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
