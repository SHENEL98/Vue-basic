<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search">
    <p>All names</p>
    <div v-for="name in names" :key="name">
      {{ name }}
    </div>

    <p>Search terms : {{ search }}</p>
    <p>Matching names will show in below</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>
  </div>
</template>

<script>
import { ref, computed } from "vue";

export default {
  name: "HomeView",
  setup() {
    // const name = computed(() => {
    //   return 'KAMAL'
    // })

    const search = ref('')
    const names = ref(['name1', 'name2','roy','nizar','marco'])

    const  matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value))
    })

    return {
      names, search,matchingNames
    };
  },
  
};
</script>
