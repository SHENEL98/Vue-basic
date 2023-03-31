<template>
  <div>
    <h1>{{ title }}</h1>
    <teleport to=".modals" v-if="showModal">
      <Modal theme="red" @close="toggleModal">
        <h1>This is Modal</h1>
        <p>Good Luck</p>
        <template v-slot:links>
          <a href="#">Click here to more information</a>
        </template>
      </Modal>
    </teleport>

    <div v-if="showModalTwo">
      <Modal @close="toggleModalTwo">
        <h1>Modal Two</h1>
      </Modal>
    </div>
    <button @click.left="toggleModal">Open Modal</button>

    <button @click.shift="toggleModalTwo">Open Modal (Shift)</button>
  </div>
</template>

<script>
import Modal from "./components/Modal.vue"; 

export default {
  name: "App",
  components: { Modal},
  data() {
    return {
      title: "My First Vue App :)",
      subHeader: "Subheader is here",
      showModal: false,
      showModalTwo:false,
    };
  },
  methods: {
    toggleModal() {
      this.showModal = !this.showModal;
    },
    toggleModalTwo(){
      this.showModalTwo = !this.showModalTwo;
    },
  },
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
}
h1 {
  border-bottom: 1px solid #ddd;
  display: inline-block;
}
</style>
