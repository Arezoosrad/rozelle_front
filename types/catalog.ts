export interface Brand { id: number; name: string; slug: string }
export interface Category { id: number; name: string; slug: string }
export interface ProductVariant {
  id: number
  sku: string
  title: string
  price: string
  compare_at_price: string | null
  attributes: Record<string, string | number | boolean>
}
export interface Product {
  id: number
  name: string
  slug: string
  description: string
  brand: number
  category: number
  variants: ProductVariant[]
}
export interface PaginatedResponse<T> {
  count: number
  next: string | null
  previous: string | null
  results: T[]
}
