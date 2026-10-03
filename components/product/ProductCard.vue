<script setup lang="ts">
import type { Product } from "~/types/catalog"
defineProps<{ product: Product }>()
</script>

<template>
  <article class="group">
    <NuxtLink :to="`/products/${product.slug}`" class="block">
      <div class="aspect-[4/5] bg-powder-blue/45">
        <div class="flex h-full items-center justify-center px-5 text-center text-sm text-mist-gray">
          تصویر محصول در API فعلی ارائه نشده است
        </div>
      </div>
      <div class="pt-4">
        <p class="text-[10px] uppercase tracking-[0.18em] text-mist-gray">Rozelle</p>
        <h2 class="mt-1 text-sm leading-6 group-hover:opacity-60">{{ product.name }}</h2>
        <p v-if="product.variants.length" class="mt-2 text-sm">{{ product.variants[0].price }} تومان</p>
        <p v-else class="mt-2 text-xs text-mist-gray">قیمت موجود نیست</p>
      </div>
    </NuxtLink>
  </article>
</template>