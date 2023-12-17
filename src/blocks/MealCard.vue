<script setup lang="ts">
import { Icon } from '@components'
</script>
<template>
  <section
    class="shadow-md rounded-2xl overflow-hidden min-w-[200px] max-w-[250px] max-h-[250px]"
  >
    <header class="flex flex-shrink-0 relative aspect-[5/2.5] w-full">
      <img
        loading="lazy"
        alt="McDonald's"
        src="/meal-img/spaghetti.jpg"
        class="absolute h-full w-full object-cover object-center inset-0"
      />
    </header>
    <section class="flex flex-col items-stretch py-2 px-3">
      <h3 class="text-black text-base font-semibold">Spaghetti</h3>
      <ul class="flex flex-col items-start justify-between gap-2 py-2">
        <li class="flex gap-1 items-center">
          <Icon name="meat" size="sm" />
          <span class="text-slate-500 text-md"> Meat </span>
        </li>
        <li class="flex gap-1 items-center">
          <Icon name="clock" size="sm" />
          <span class="text-slate-500 text-md"> 10-15 mins </span>
        </li>
      </ul>
    </section>
  </section>
</template>
