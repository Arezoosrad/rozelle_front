# Rozelle Frontend

Nuxt 4 frontend for the Rozelle cosmetics store.

## Phase 1 audit

- Frontend repository was empty: no package.json, Nuxt config, Tailwind config, source tree, or existing implementation.
- Backend is Django 6.1.1 + DRF 3.16.1. REST root is /api/v1/.
- Catalog exposes GET /catalog/products/ and GET /catalog/products/<slug>/. DRF provides page-number pagination, search, and ordering.
- Product responses expose brand/category as IDs and variants, but do not expose ProductImage data or inventory/available quantity.
- Category has a Django model but no public category endpoint.
- Cart exposes only authenticated GET /cart/; there are no public cart mutation endpoints.
- accounts/ has no API routes, so there is currently no frontend-consumable login/register/logout contract.
- orders/ exposes only authenticated GET /orders/.
- payments/, shipping/, and promotions/ have no public API routes.
- reviews/ exposes public GET/POST at /reviews/products/<product_id>/; POST requires authentication.

## Current implementation

The frontend intentionally implements only capabilities that have a real backend contract: editorial shell, product listing, server-side search, product detail, SSR-friendly metadata, and public review reads.

## Backend blockers for full commerce

A real cart/checkout/account flow requires backend endpoints for authentication, cart mutations, address management, order creation, payment initiation/verification, and (if desired) coupon validation. Product images and stock also need to be exposed by the catalog serializer if the UI is expected to render real product photography and availability.

No fake endpoints or fake client-side commerce behavior has been added.