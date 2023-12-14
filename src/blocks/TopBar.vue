<script setup lang="ts">
import { Icon } from '@components'
import { useShowSidebar } from '@composables/showSidebar'
const { handleSidebar } = useShowSidebar()
</script>
<template>
  <div class="flex justify-between h-16 py-2 px-4">
    <button
      class="px-4 py-4 aspect-square shadow-md h-12 w-12 rounded-lg"
      data-id="sidebar-button"
      @click="handleSidebar"
    >
      <Icon name="menu" size="md" />
    </button>
    <h2 class="flex items-center">Dashboard</h2>
    <button>
      <img
        src="https://source.unsplash.com/150x150/?portrait?3"
        alt=""
        class="w-12 mx-auto rounded-lg bg-gray-500 aspect-square"
      />
    </button>
  </div>
</template>
