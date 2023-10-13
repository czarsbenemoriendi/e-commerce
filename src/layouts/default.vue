<script setup lang="ts">
import TopBar from '@components/layout/TopBar.vue'
</script>

<template>
  <div class="flex flex-col h-screen w-screen">
    <TopBar class="w-11/12 self-center" />
    <main class="flex-1 grid place-items-center p-2 overflow-auto">
      <slot />
    </main>
  </div>
</template>
