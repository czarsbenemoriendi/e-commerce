<script setup lang="ts">
import { clearError, computed } from '#imports'
type Props = {
  error: Error | null | undefined
}

const { error } = defineProps<Props>()

const message = computed(() =>
  error?.message && !error.message.startsWith('Page not found')
    ? error.message
    : 'Something went wrong',
)

const handleGoHome = async () => {
  await clearError({ redirect: '/' })
}
</script>
<template>
  <main class="flex-1 grid place-items-center h-screen w-screen">
    <div class="flex flex-col items-center gap-8">
      <h3 class="text-lg">{{ message }}</h3>
      <button data-id="error-message" @click="handleGoHome">Go back home</button>
    </div>
  </main>
</template>
