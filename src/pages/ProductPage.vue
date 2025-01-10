<script setup>
import {onMounted, ref} from "vue";
import { useRoute } from "vue-router";
import productsJson from "../assets/json/products.json";

const route = useRoute();
const product = ref(() => {});

onMounted(() => {
  product.value = productsJson.find(item => item.id === Number(route.params.productId));
})
</script>

<template>
  <section class="product">
    <div class="container">
      <div class="product__wrapper">
        <div class="product__img">
          <img :src="product.image" alt="Фото товара" fetchpriority="high">
        </div>

        <div class="product__content">
          <h1 class="product__title">
            {{ product.title }}
          </h1>

          <div class="product__content-bottom">
             <span class="product__price">
               {{ product.price }} $
             </span>

            <button class="product__button">
              Добавить в корзину
            </button>
          </div>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .product {
    display: flex;
    padding: 80px 0;
    flex-grow: 1;

    .container {
      margin-top: auto;
      margin-bottom: auto;
    }

    &__wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 30px;
    }

    &__img {
      width: 100%;
      aspect-ratio: 664 / 489;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &__content {
      display: flex;
      flex-direction: column;
      justify-content: space-between;
    }

    &__title {
      margin-bottom: 30px;

      font: 900 31px/1.2 'RF Dewi Expanded', sans-serif;
      color: var(--black-color);
      text-transform: uppercase;
    }

    &__content-bottom {
      display: flex;
      align-items: center;
      gap: 34px;
    }

    &__price {
      min-width: 100px;

      font: 400 20px/1.2 'RF Dewi Extended', sans-serif;
      color: #626262;
    }

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      height: 66px;
      padding: 0 34px;

      border-radius: 5px;
      background-color: var(--black-color);
      cursor: pointer;

      font: 700 12px/1.2 'RF Dewi Extended', sans-serif;
      color: var(--white-color);
      text-transform: uppercase;
    }
  }
</style>