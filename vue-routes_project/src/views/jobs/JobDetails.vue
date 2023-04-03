<template>
  <h1>Job Details Page</h1>
  <!-- <p>The job id is {{ $route.params.id }}</p>
  <p>The job id is {{ id }} - passing by data retrun </p> -->

  <p>Job {{ id }}</p>

</template>

<script>
export default {

    props: ['id'],
    //you don't need below steps when you use props. 
    // data(){
    //     return{
    //         id: this.$route.params.id
    //     }
    // }
}
</script>

<style>

</style>