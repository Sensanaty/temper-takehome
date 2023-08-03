<template>
  <SlantedBanner />

  <div class="content-wrapper flex flex-row gap-28 min-h-[75%] mb-12">
    <div class="post-list-wrapper">
      <h1 class="font-bold mb-4 text-3xl text-white">
        Sortable Post List
      </h1>

      <Suspense>
        <PostList />

        <template #fallback>
          <LoadingSpinner class="m-auto" />
        </template>
      </Suspense>
    </div>

    <div class="history-list-wrapper">
      <HistoryList />
    </div>
  </div>
</template>

<script setup lang="ts">
  import SlantedBanner from "~/components/Miscellaneous/SlantedBanner.vue";
  import PostList from "~/components/Posts/PostList.vue";
  import HistoryList from "~/components/History/HistoryList.vue";
  import LoadingSpinner from "~/components/Miscellaneous/LoadingSpinner.vue";
</script>

<style scoped>
.post-list-wrapper {
  @apply flex flex-col flex-half mt-16 pl-72 ml-auto;
}

.history-list-wrapper {
  @apply flex flex-col flex-half mt-8 pr-72 mr-auto;
}

@media screen and (max-width: 1024px) {
  .post-list-wrapper { @apply pl-48 }
  .history-list-wrapper { @apply pr-48 }
}

@media screen and (max-width: 768px) {
  .post-list-wrapper { @apply px-24 mb-0; }
  .history-list-wrapper { @apply px-24 mx-auto mt-0; }
  .content-wrapper { @apply flex-col gap-0; }
}

@media screen and (max-width: 480px) {
  .post-list-wrapper { @apply px-8; }
  .history-list-wrapper { @apply px-8; }
}
</style>
