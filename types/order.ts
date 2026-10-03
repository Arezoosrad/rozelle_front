export interface OrderItem { sku:string; product_name:string; unit_price:string|number; quantity:number; line_total:string|number }
export interface Order { number:string; status:string; subtotal:string|number; discount_total:string|number; shipping_total:string|number; grand_total:string|number; created_at:string; items:OrderItem[] }
