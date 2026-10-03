<script setup lang="ts">
const route = useRoute()
const q = ref(String(route.query.q || ""))
const query = computed(() => ({ page: 1, search: String(route.query.q || "").trim() || undefined }))
const { data, pending, error } = useProducts(query)
function submit() {
  navigateTo({ path: "/search", query: q.value.trim() ? { q: q.value.trim() } : {} })
}
useSeoMeta({ title: "جستجو | Rozelle", description: "جستجوی محصولات زیبایی Rozelle" })
</script>

<template>
  <section class="mx-auto max-w-[1200px] px-4 py-12 md:px-6">
    <form class="flex gap-3 border-b border-warm-ink pb-3" @submit.prevent="submit">
      <label for="search" class="sr-only">جستجو</label>
      <input id="search" v-model="q" class="min-w-0 flex-1 bg-transparent text-2xl font-light outline-none" placeholder="جستجوی محصول…" />
      <button class="text-sm font-medium" type="submit">جستجو</button>
    </form>
    <div class="mt-10">
      <p v-if="pending" class="py-12 text-sm text-mist-gray">در حال جستجو…</p>
      <p v-else-if="error" class="py-12 text-sm text-mist-gray">جستجو در دسترس نیست.</p>
      <p v-else-if="!data?.results.length" class="py-12 text-sm text-mist-gray">نتیجه‌ای برای «{{ route.query.q }}» پیدا نشد.</p>
      <div v-else class="grid grid-cols-2 gap-x-4 gap-y-12 md:grid-cols-3 lg:grid-cols-4 md:gap-x-6">
        <ProductCard v-for="product in data.results" :key="product.id" :product="product" />
      </div>
    </div>
  </section>
</template>