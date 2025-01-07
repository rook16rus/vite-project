<script setup>
import ProductsItem from "./ProductsItem.vue";

const props = defineProps(['products'])
</script>

<template>
  <ul class="products-list">
    <ProductsItem
        v-for="product in products"
        :product="product"
        :key="product.id"
        @order-form-close="(value, title) => $emit('order-form-open', value, title)"
    />
  </ul>
</template>

<style scoped lang="scss">
  .products-list {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    gap: 30px;
    
    @media (max-width: 1090px) {
      grid-template-columns: repeat(3, 1fr);
    }

    @media (max-width: 820px) {
      grid-template-columns: repeat(2, 1fr);
    }

    @media (max-width: 560px) {
      grid-template-columns: 1fr;
    }
  }
</style>