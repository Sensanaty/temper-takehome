<template>
  <div class="flex flex-col">
    <PostItem v-for="post in posts" :key="post.id" :post="post" />
  </div>
</template>

<script setup async lang="ts">
  import { storeToRefs } from "pinia";
  import PostItem from "~/components/Posts/PostItem.vue";
  import usePostStore from "~/stores/postStore";

  const postStore = usePostStore();

  const { posts } = storeToRefs(postStore);

  await postStore.fetchPosts();
</script>
