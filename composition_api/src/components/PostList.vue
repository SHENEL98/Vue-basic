<template>
  <div>
    <h2>Post</h2>

    <div class="post-list">
      <div v-for="post in posts" :key="post.id">
        <SinglePost :post="post" />
      </div>
    </div>
  </div>
</template>

<script>
import SinglePost from './SinglePost.vue'

export default {
  props: ["posts"],
    components: {SinglePost},
  setup(props){
    console.log(props)
    console.log(props.posts)

  }

};
</script>

<style>
</style>