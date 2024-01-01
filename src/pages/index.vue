<script setup lang="ts">
import { MealCard } from '@blocks'
</script>
<template>
  <section>
    <h1 class="text-2xl font-NunitoSansBold">
      What would you like to cook today?
    </h1>
    <section class="flex gap-4 py-6 overflow-x-auto scrollbar-hide">
      <button
        v-for="i in 6"
        :key="i"
        class="flex flex-shrink-0 flex-col justify-evenly items-center h-24 w-14 bg-buttonType rounded-full shadow-md"
      >
        <div class="w-12 h-12 aspect-square rounded-full bg-white" />
        <p class="pb-2 text-white text-xs">Tekst</p>
      </button>
    </section>
    <section class="flex flex-col gap-3">
      <div class="flex items-center justify-between">
        <h2 class="font-NunitoSansBold text-lg">Featured meals</h2>
        <button type="button" class="px-4 py-1 font-semibold">
          <span class="flex gap-1 items-center"
            >View all
            <Icon name="rightArrow" size="md" />
          </span>
        </button>
      </div>
      <div class="relative h-[260px]">
        <div
          class="w-screen absolute -left-4 grid grid-flow-col gap-3 px-4 pb-6 overflow-auto scrollbar-hide"
        >
          <MealCard data-class="featured-meal" data-id="spaghetti" />
          <MealCard />
        </div>
      </div>
    </section>
  </section>
</template>
<style scoped></style>
