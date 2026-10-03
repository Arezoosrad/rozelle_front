import type { Review } from "~/types/review"

export function useReviews(productId: MaybeRef<number | undefined>) {
  return useFetch<Review[]>(() => `/reviews/products/${unref(productId) || 0}/`, {
    $fetch: useRozelleApi(),
    server: true,
    key: computed(() => `reviews-${unref(productId)}`),
    immediate: computed(() => Boolean(unref(productId)))
  })
}