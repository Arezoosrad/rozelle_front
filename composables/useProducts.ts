import type { PaginatedResponse, Product } from "~/types/catalog"

export interface ProductQuery {
  page?: number
  search?: string
  ordering?: "created_at" | "-created_at" | "name" | "-name"
}

export function useProducts(query: MaybeRef<ProductQuery> = {}) {
  return useFetch<PaginatedResponse<Product>>("/catalog/products/", {
    $fetch: useRozelleApi(),
    query,
    key: computed(() => `products-${JSON.stringify(unref(query))}`),
    server: true,
    watch: [() => unref(query)]
  })
}

export function useProduct(slug: MaybeRef<string>) {
  return useFetch<Product>(() => `/catalog/products/${unref(slug)}/`, {
    $fetch: useRozelleApi(),
    server: true,
    key: computed(() => `product-${unref(slug)}`)
  })
}
