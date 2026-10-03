<script setup lang="ts">
useSeoMeta({
  title: "Rozelle | فروشگاه زیبایی",
  description: "فروشگاه آنلاین محصولات زیبایی Rozelle"
})
const { data, pending, error } = useProducts({ page: 1 })
</script>

<template>
  <div>
    <section class="border-b border-powder-blue">
      <div class="mx-auto grid min-h-[68vh] max-w-[1200px] items-end gap-10 px-4 py-12 md:grid-cols-[1.15fr_.85fr] md:px-6 md:py-16">
        <div>
          <p class="mb-5 text-xs uppercase tracking-[0.24em] text-mist-gray">Editorial beauty commerce</p>
          <h1 class="max-w-3xl text-5xl font-light leading-[1.05] tracking-tight md:text-[54px]">زیبایی، ساده‌تر انتخاب می‌شود.</h1>
        </div>
        <div class="bg-powder-blue p-8 md:p-12">
          <p class="max-w-md text-base leading-8">Rozelle مجموعه‌ای از محصولات زیبایی را با تجربه‌ای آرام، روشن و محصول‌محور ارائه می‌کند.</p>
          <NuxtLink to="/products" class="mt-8 inline-flex rounded-[60px] bg-slate-bloom px-5 py-3 text-sm font-medium text-ink">مشاهده محصولات</NuxtLink>
        </div>
      </div>
    </section>

    <section class="mx-auto max-w-[1200px] px-4 py-16 md:px-6">
      <div class="mb-8 flex items-end justify-between border-b border-powder-blue pb-4">
        <h2 class="text-2xl font-light">محصولات</h2>
        <NuxtLink to="/products" class="text-sm text-mist-gray">مشاهده همه</NuxtLink>
      </div>
      <p v-if="pending" class="py-12 text-sm text-mist-gray">در حال بارگذاری محصولات…</p>
      <p v-else-if="error" class="py-12 text-sm text-mist-gray">امکان دریافت محصولات وجود ندارد.</p>
      <p v-else-if="!data?.results.length" class="py-12 text-sm text-mist-gray">هنوز محصولی برای نمایش وجود ندارد.</p>
      <div v-else class="grid grid-cols-2 gap-x-4 gap-y-10 md:grid-cols-3 lg:grid-cols-4 md:gap-x-6">
        <ProductCard v-for="product in data.results.slice(0, 8)" :key="product.id" :product="product" />
      </div>
    </section>
  </div>
</template>