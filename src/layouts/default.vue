<script setup lang="ts">
import { BottomNavigation, Sidebar, TopBar } from '@blocks'
import { useShowSidebar } from '@composables/showSidebar'
const { isSidebarVisable } = useShowSidebar()
</script>
<template>
  <div class="flex flex-col h-[100dvh] w-screen">
    <TopBar />
    <Sidebar v-if="isSidebarVisable" />
    <main class="flex-1 flex flex-col gap-8 px-4 py-6 overflow-auto">
      <slot />
    </main>
    <BottomNavigation />
  </div>
</template>
