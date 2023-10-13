<script setup lang='ts'>
import Icon from '@components/Icon.vue'
</script>

<template>
  <nav data-id="top-bar" class="flex flex-row h-24">
    <section data-class="left-nav" class="h-full flex">
      <button class="self-center">
        <Icon name="menu" size="xl" />
      </button>
      <NuxtLink to="/" class="flex self-center">
        <img src="/Logo.svg" alt="Logo picture">
      </NuxtLink>
    </section>
    <section data-id="search-bar" class="h-full flex"></section>
    <section data-id="right-nav" class="h-full flex items-center ml-auto">
      <NuxtLink to="/my-profile" data-class="nav-link" class="px-2 py-3">
        <Icon name="myProfile" size="lg" />
      </NuxtLink>
      <NuxtLink to="/random-item" data-class="nav-link" class="px-2 py-3">
        <Icon name="randomItem" size="lg" />
      </NuxtLink>
      <NuxtLink to="/liked-products" data-class="nav-link" class="px-2 py-3">
        <Icon name="likedItems" size="lg" />
      </NuxtLink>
      <NuxtLink to="/cart" data-class="nav-link" class="px-2 py-3">
        <Icon name="cart" size="lg" />
      </NuxtLink>
    </section>
  </nav>
</template>
