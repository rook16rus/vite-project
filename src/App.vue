<script setup>
import {onMounted, ref} from "vue";

import Header from "./components/Header.vue";
import Footer from "./components/Footer.vue";
import ProductsList from "./components/ProductsList.vue";

import productsJson from "./assets/json/products.json"

const products = ref([]);

onMounted(() => {
  products.value = productsJson;
})
</script>

<template>
  <div class="page">
    <Header />

    <main class="main">
      <section class="products">
        <div class="container">
          <div class="products__block">
            <h3 class="products__title">
              Товары
            </h3>

            <ProductsList :products="products" />
          </div>
        </div>
      </section>
    </main>

    <Footer />
  </div>
</template>

<style scoped lang="scss">
  .products {
    padding: 80px 0;

    &__title {
      margin-bottom: 40px;

      font: 900 31px/1.2 'RF Dewi Expanded', sans-serif;
      color: var(--black-color);
      text-transform: uppercase;
    }
  }
</style>
