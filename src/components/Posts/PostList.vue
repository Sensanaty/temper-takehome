<template>
  <div class="flex flex-col">
    <TransitionGroup name="posts">
      <PostItem
        v-for="(post, index) in posts"
        :key="post.id"
        :post="post"
        :index="index"
        :is-first-item="posts[0].id === post.id"
        :is-last-item="posts[posts.length - 1].id === post.id"
      />
    </TransitionGroup>
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

<style scoped>
.posts-move,
.posts-enter-active,
.posts-leave-active {
  transition: all 250ms ease;
}

.posts-leave-active {
  position: absolute;
}
</style>
