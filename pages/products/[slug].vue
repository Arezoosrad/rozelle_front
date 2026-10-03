<script setup lang="ts">
const route = useRoute()
const { data, pending, error } = useProduct(computed(() => String(route.params.slug)))
const productId = computed(() => data.value?.id)
const { data: reviews, pending: reviewsPending, error: reviewsError } = useReviews(productId)
watchEffect(() => {
  if (data.value) useSeoMeta({
    title: `${data.value.name} | Rozelle`,
    description: data.value.description || `خرید ${data.value.name} از Rozelle`
  })
})
</script>

<template>
  <section class="mx-auto max-w-[1200px] px-4 py-10 md:px-6 md:py-14">
    <p v-if="pending" class="py-20 text-sm text-mist-gray">در حال بارگذاری…</p>
    <p v-else-if="error || !data" class="py-20 text-sm text-mist-gray">محصول پیدا نشد.</p>
    <div v-else class="grid gap-10 md:grid-cols-2 md:gap-16">
      <div class="aspect-[4/5] bg-powder-blue/45 flex items-center justify-center p-8 text-center text-sm text-mist-gray">
        تصاویر محصول در serializer فعلی backend ارائه نشده‌اند.
      </div>
      <div class="md:py-8">
        <p class="text-[10px] uppercase tracking-[0.2em] text-mist-gray">Rozelle</p>
        <h1 class="mt-3 text-4xl font-light leading-tight">{{ data.name }}</h1>
        <p class="mt-6 whitespace-pre-line text-sm leading-8 text-mist-gray">{{ data.description || "توضیحی برای این محصول ثبت نشده است." }}</p>

        <div class="mt-10 border-y border-powder-blue py-6">
          <div v-for="variant in data.variants" :key="variant.id" class="flex items-center justify-between gap-4 border-b border-powder-blue/60 py-3 last:border-0">
            <span class="text-sm">{{ variant.title || variant.sku }}</span>
            <span class="text-sm">{{ variant.price }} تومان</span>
          </div>
          <p v-if="!data.variants.length" class="text-sm text-mist-gray">قیمت یا واریانت فعالی ثبت نشده است.</p>
        </div>

        <div class="mt-8 border border-powder-blue p-5 text-sm leading-7">
          افزودن به سبد و موجودی در API فعلی backend برای عملیات کاربری expose نشده‌اند.
        </div>
      </div>

        <section class="mt-12 border-t border-powder-blue pt-8">
          <h2 class="text-2xl font-light">دیدگاه‌ها</h2>
          <p v-if="reviewsPending" class="mt-5 text-sm text-mist-gray">در حال بارگذاری دیدگاه‌ها…</p>
          <p v-else-if="reviewsError" class="mt-5 text-sm text-mist-gray">دیدگاه‌ها در دسترس نیستند.</p>
          <p v-else-if="!reviews?.length" class="mt-5 text-sm text-mist-gray">هنوز دیدگاهی ثبت نشده است.</p>
          <div v-else class="mt-6 space-y-6">
            <article v-for="review in reviews" :key="review.id" class="border-b border-powder-blue/60 pb-6">
              <div class="flex items-center justify-between gap-4">
                <h3 class="text-sm font-medium">{{ review.title || "دیدگاه مشتری" }}</h3>
                <span class="text-xs text-mist-gray">{{ review.rating }}/5</span>
              </div>
              <p v-if="review.body" class="mt-2 text-sm leading-7 text-mist-gray">{{ review.body }}</p>
            </article>
          </div>
        </section>
    </div>
  </section>
</template>