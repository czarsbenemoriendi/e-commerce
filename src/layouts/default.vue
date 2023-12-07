<script setup lang="ts"></script>
<template>
  <div class="flex flex-col h-screen w-screen">
    <section class="w-11/12 self-center" />
    <main class="flex-1 grid place-items-center p-2 overflow-auto">
      <slot />
    </main>
  </div>
</template>
