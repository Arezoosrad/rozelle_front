<script setup lang="ts">
const search = ref("")
const open = ref(false)
function submitSearch() {
  const q = search.value.trim()
  if (q) navigateTo({ path: "/search", query: { q } })
}
</script>

<template>
  <header class="border-b border-powder-blue bg-paper">
    <div class="mx-auto flex min-h-18 max-w-[1200px] items-center justify-between gap-5 px-4 md:px-6">
      <NuxtLink to="/" class="text-xl tracking-[0.18em] font-medium">ROZELLE</NuxtLink>
      <nav class="hidden items-center gap-7 text-sm md:flex">
        <NuxtLink to="/products" class="hover:opacity-60">محصولات</NuxtLink>
        <NuxtLink to="/search" class="hover:opacity-60">جستجو</NuxtLink>
      </nav>
      <div class="flex items-center gap-3">
        <form class="hidden md:flex" @submit.prevent="submitSearch">
          <label class="sr-only" for="header-search">جستجوی محصول</label>
          <input id="header-search" v-model="search" class="w-44 border-b border-powder-blue px-1 py-2 text-sm outline-none focus:border-warm-ink" placeholder="جستجو" />
        </form>
        <NuxtLink to="/cart" aria-label="سبد خرید" class="text-sm">سبد</NuxtLink>
        <button class="md:hidden" :aria-expanded="open" aria-label="باز کردن منو" @click="open = !open">منو</button>
      </div>
    </div>
    <div v-if="open" class="border-t border-powder-blue px-4 py-4 md:hidden">
      <div class="mx-auto flex max-w-[1200px] flex-col gap-4 text-sm">
        <NuxtLink to="/products" @click="open=false">محصولات</NuxtLink>
        <NuxtLink to="/search" @click="open=false">جستجو</NuxtLink>
        <NuxtLink to="/cart" @click="open=false">سبد خرید</NuxtLink>
      </div>
    </div>
  </header>
</template>