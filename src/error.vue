<script setup lang="ts">
import { clearError, computed } from '#imports'
type Props = {
  error: Error | null | undefined
}

const { error } = defineProps<Props>()

const message = computed(() =>
  error?.message && !error.message.startsWith('Page not found')
    ? error.message
    : 'Coś poszło nie tak',
)

const handleGoHome = async () => {
  await clearError({ redirect: '/' })
}
</script>
<template>
  <main class="flex-1 grid place-items-center h-screen w-screen">
    <div class="flex flex-col items-center gap-8">
      <h3 class="text-lg" data-id="error-message">{{ message }}</h3>
      <button @click="handleGoHome">Wróć do strony głównej</button>
    </div>
  </main>
</template>
