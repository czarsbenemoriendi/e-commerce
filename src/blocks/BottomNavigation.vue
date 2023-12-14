<script setup lang="ts">
import { Icon } from '@components'
import { NAVIGATION } from '@config'
</script>
<template>
  <nav
    class="h-16 bg-white text-gray-800 overflow-hidden font-Roboto"
    data-id="bottom-navigate"
  >
    <ul class="grid grid-cols-4 items-center h-full">
      <li
        v-for="({ icon, name, path }, id) in NAVIGATION"
        :key="id"
        class="h-full"
      >
        <NuxtLink
          :to="path"
          rel="noopener noreferrer"
          class="flex flex-col items-center justify-center h-full"
          data-class="bottom-button"
        >
          <Icon v-if="icon" :name="icon" size="lg" />
          <span class="text-sm">{{ name }}</span>
        </NuxtLink>
      </li>
    </ul>
  </nav>
</template>
