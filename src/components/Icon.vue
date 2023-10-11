<script setup lang="ts">
import { defineComponent } from 'vue'

import { ICONS } from '@config'


import type { AvailableIcon } from '@config'

type Props = {
  name: AvailableIcon
  size?: 'xs' | 'sm' | 'md' | 'lg' | 'xl'
}

const { name, size = 'md' } = defineProps<Props>()

const iconBody = (await ICONS[name]()) as { default: {} }
const SvgIcon = defineComponent(iconBody.default)
</script>

<template>
  <div :class="{
    'fill-current align-middle': true,
    'w-3 h-3': size === 'xs',
    'w-4 h-4': size === 'sm',
    'w-5 h-5': size === 'md',
    'w-6 h-6': size === 'lg',
    'w-8 h-8': size === 'xl',
  }">
    <svg-icon />
  </div>
</template>
