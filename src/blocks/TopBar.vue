<script setup lang="ts">
import { Icon } from '@components'
import { useShowSidebar } from '@composables/showSidebar'
const { handleSidebar } = useShowSidebar()
</script>
<template>
  <div class="grid grid-cols-3 h-16 py-2 px-4">
    <button
      class="px-4 py-4 aspect-square shadow-md h-12 w-12 rounded-lg hidden"
      data-id="sidebar-button"
      @click="handleSidebar"
    >
      <Icon name="menu" size="md" />
    </button>
    <h2 class="flex items-center justify-center col-start-2 col-end-3">
      Dashboard
    </h2>
    <button class="flex justify-end col-start-3">
      <img
        src="https://source.unsplash.com/150x150/?portrait?3"
        alt=""
        class="w-12 rounded-lg bg-gray-500 aspect-square"
      />
    </button>
  </div>
</template>
