<template>
  <div class="home">
    <h1>Home</h1>
    <input type="text" v-model="search" />
    <p>All names</p>
    <div v-for="name in names" :key="name">
      {{ name }}
    </div>

    <p>Search terms : {{ search }}</p>
    <p>Matching names will show in below</p>
    <div v-for="name in matchingNames" :key="name">
      {{ name }}
    </div>

    <button @click="handleClick">Stop watch</button>
  </div>
</template>

<script>
import { ref, computed, watch, watchEffect } from "vue";

export default {
  name: "HomeView",
  setup() {
    const search = ref("");
    const names = ref(["name1", "name2", "roy", "nizar", "marco"]);

    // watch(search,() =>{
    //   console.log('watch function ran')
    // })

    // watchEffect(() =>{
    //   console.log('watchEffect function ran',search.value)
    // })

    //stop watching
    const stopWatch = watch(search, () => {
      console.log("watch function ran");
    });

    const stopEffect = watchEffect(() => {
      console.log("watchEffect function ran", search.value);
    });

    const matchingNames = computed(() => {
      return names.value.filter((name) => name.includes(search.value));
    });

    const handleClick = () =>{
      stopWatch()
      stopEffect()
    }
    return {
      names,
      search,
      matchingNames,handleClick
    };
  },
};
</script>
