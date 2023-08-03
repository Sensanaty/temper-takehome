<template>
  <div class="flex items-center bg-white rounded-xl w-full min-h-[120px] mb-6 px-4 py-3 shadow-md">
    <p class="mr-1">
      {{ post.title }}
    </p>

    <div class="button-wrapper">
      <button class="caret-button" :disabled="isFirstItem" @click="move(MovementDirection.UP)">
        <Transition mode="out-in">
          <PhCaretUp v-if="!isFirstItem" class="text-accent-900" weight="bold" :size="24" />
        </Transition>
      </button>


      <button class="caret-button" :disabled="isLastItem" @click="move(MovementDirection.DOWN)">
        <Transition mode="out-in">
          <PhCaretDown v-if="!isLastItem" class="text-accent-900" weight="bold" :size="24" />
        </Transition>
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
  import { MovementDirection, PostItem } from "~/stores/types/post";
  import { PhCaretDown, PhCaretUp } from "@phosphor-icons/vue";
  import usePostStore from "~/stores/postStore";

  const postStore = usePostStore();

  const props = defineProps<{
    post: PostItem,
    index: number,
    isFirstItem: boolean,
    isLastItem: boolean,
  }>();


  function move(direction: MovementDirection) {
    postStore.movePost(props.index, direction);
  }
</script>

<style scoped>
.button-wrapper {
  @apply grid grid-rows-2 ml-auto;
}

.caret-button {
  @apply p-2 mb-2 rounded-lg hover:bg-stone-100 active:bg-stone-200 disabled:bg-transparent;
}

.v-enter-active,
.v-leave-active {
  transition: opacity 100ms ease-in-out;
}

.v-enter-from,
.v-leave-to {
  opacity: 0;
}
</style>
