<script setup lang="ts">
import { BottomNavigation, TopBar } from '@blocks'
</script>
<template>
  <div class="flex flex-col h-[100dvh] w-screen">
    <TopBar />
    <main
      class="flex-1 flex flex-col gap-8 px-4 py-6 overflow-auto bg-gray-100"
    >
      <slot />
    </main>
    <BottomNavigation />
  </div>
</template>
