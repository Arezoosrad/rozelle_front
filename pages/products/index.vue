<script setup lang="ts">
const route = useRoute()
const page = computed(() => Number(route.query.page || 1))
const search = computed(() => String(route.query.search || ""))
const ordering = computed(() => String(route.query.ordering || "") as "" | "name" | "-name" | "created_at" | "-created_at")
const query = computed(() => ({ page: page.value, search: search.value || undefined, ordering: ordering.value || undefined }))
const { data, pending, error } = useProducts(query)
useSeoMeta({ title: "محصولات | Rozelle", description: "محصولات زیبایی Rozelle" })
function setQuery(next: Record<string, string | number | undefined>) {
  navigateTo({ path: "/products", query: { ...route.query, ...next } })
}
</script>

<template>
  <section class="mx-auto max-w-[1200px] px-4 py-10 md:px-6 md:py-14">
    <div class="flex flex-col gap-5 border-b border-powder-blue pb-7 md:flex-row md:items-end md:justify-between">
      <div>
        <p class="text-[10px] uppercase tracking-[0.2em] text-mist-gray">Catalog</p>
        <h1 class="mt-2 text-4xl font-light">محصولات</h1>
      </div>
      <select :value="ordering" class="border border-powder-blue bg-white px-3 py-2 text-sm outline-none" aria-label="مرتب‌سازی" @change="setQuery({ ordering: ($event.target as HTMLSelectElement).value, page: 1 })">
        <option value="">مرتب‌سازی</option>
        <option value="name">نام: صعودی</option>
        <option value="-name">نام: نزولی</option>
        <option value="-created_at">جدیدترین</option>
      </select>
    </div>

    <div v-if="pending" class="grid grid-cols-2 gap-4 py-10 md:grid-cols-3 lg:grid-cols-4"><div v-for="i in 8" :key="i" class="aspect-[4/5] animate-pulse bg-powder-blue/45" /></div>
    <p v-else-if="error" class="py-16 text-sm text-mist-gray">خطا در دریافت محصولات.</p>
    <p v-else-if="!data?.results.length" class="py-16 text-sm text-mist-gray">محصولی پیدا نشد.</p>
    <div v-else class="grid grid-cols-2 gap-x-4 gap-y-12 py-10 md:grid-cols-3 lg:grid-cols-4 md:gap-x-6">
      <ProductCard v-for="product in data.results" :key="product.id" :product="product" />
    </div>

    <div v-if="data && (data.previous || data.next)" class="flex justify-between border-t border-powder-blue pt-5 text-sm">
      <button :disabled="!data.previous" class="disabled:opacity-30" @click="setQuery({ page: page - 1 })">قبلی</button>
      <span class="text-mist-gray">صفحه {{ page }}</span>
      <button :disabled="!data.next" class="disabled:opacity-30" @click="setQuery({ page: page + 1 })">بعدی</button>
    </div>
  </section>
</template>