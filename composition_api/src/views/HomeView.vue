<template>
  <div class="home">
    <h1>Home</h1>
    <PostList v-if="showPosts" :posts="posts"/>
    <button @click="showPosts = !showPosts">Toggle post</button>
    <button @click="posts.pop()">Delete post</button>
  </div>
</template>

<script>
import { ref } from "vue";
import PostList from '../components/PostList.vue';

export default {
  name: "HomeView",
  components : {PostList},
  setup() {
    const posts = ref([
      {title: 'welcome to the blog', body:'body 1|body 1|body 1|body 1|body 1', id:1},
      {title: 'top 5 CSS tips', body:'body 2', id:2},
    ])

    const showPosts = ref(true)

    return {posts, showPosts}
  },
};
</script>
