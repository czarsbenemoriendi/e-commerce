<script setup lang="ts">
import BottomNavigation from '@blocks/BottomNavigation.vue'
import Sidebar from '@blocks/Sidebar.vue'
import TopBar from '@blocks/TopBar.vue'
import { useShowSidebar } from '@composables/showSidebar'
const { isSidebarVisable } = useShowSidebar()
</script>
<template>
  <div class="flex flex-col h-screen w-screen">
    <TopBar />
    <Sidebar v-if="isSidebarVisable" />
    <main class="flex-1 grid place-items-center p-2 overflow-auto bg-gray-100">
      <slot />
    </main>
    <BottomNavigation />
  </div>
</template>
