<template>
  <SlantedBanner />

  <div class="flex flex-row gap-28 min-h-[75%] mb-12">
    <div class="flex flex-col flex-half mt-16 pl-72 ml-auto">
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

    <div class="flex flex-col flex-half mt-8 pr-72 mr-auto">
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
