<script setup lang="ts">
interface Category { id:number; name:string; slug:string; parent:number|null }
const {data,pending,error}=await useFetch<Category[]>("/catalog/categories/",{$fetch:useRozelleApi(),server:true})
useSeoMeta({title:"دسته‌بندی‌ها | Rozelle"})
</script>
<template><section class="mx-auto max-w-[1200px] px-4 py-16"><h1 class="text-4xl font-light">دسته‌بندی‌ها</h1><p v-if="pending" class="mt-10 text-sm text-mist-gray">در حال بارگذاری…</p><p v-else-if="error" class="mt-10 text-sm text-mist-gray">دسته‌بندی‌ها در دسترس نیستند.</p><div v-else class="mt-10 grid gap-px bg-powder-blue sm:grid-cols-2 lg:grid-cols-3"><NuxtLink v-for="c in data" :key="c.id" :to="'/products?search='+encodeURIComponent(c.name)" class="bg-white p-8 hover:bg-powder-blue/20">{{c.name}}</NuxtLink></div></section></template>
