<script setup>
import HeaderBlock from "./components/Header.vue";
import FooterBlock from "./components/Footer.vue";
import { ref } from "vue";

const cartProducts = ref([]);

const handler = (array) => {
  cartProducts.value = array;
}
</script>

<template>
  <div class="page">
    <HeaderBlock :cartProducts="cartProducts" />

    <main class="main">
      <router-view @cart-products="handler" />
    </main>

    <FooterBlock />
  </div>
</template>
