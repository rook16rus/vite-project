<script setup>
import { useRoute } from "vue-router";
import ProductsList from "../components/ProductsList.vue";

const products = useRoute().params.cartProducts;
console.log(useRoute().params);
</script>

<template>
  <section class="cart">
    <div class="container">
      <h1 class="cart__title">
        Корзина товаров
      </h1>

      <ProductsList v-if="products.length > 0" :products="[]" :isCart="true" />

      <div v-else class="cart__empty">
        <div class="cart__empty-img">
          <img src="../assets/img/empty.svg" alt="Иконка пустой корзины" fetchpriority="high">
        </div>

        <h3 class="cart__empty-title">
          Ваша корзина на данный момент пуста.
        </h3>

        <p class="cart__empty-text">
          Прежде чем приступить к оформлению заказа, вы должны добавить некоторые товары в корзину.
          На странице "Каталог" вы найдете много интересных товаров.
        </p>

        <router-link to="/" class="cart__empty-link">
          Перейти в каталог
        </router-link>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .cart {
    display: flex;
    padding: 80px 0;
    flex-grow: 1;

    .container {
      display: flex;
      flex-direction: column;
    }

    &__title {
      margin-bottom: 40px;

      font: 900 31px/1.2 'RF Dewi Expanded', sans-serif;
      color: var(--black-color);
      text-transform: uppercase;
    }

    &__empty {
      display: flex;
      flex-direction: column;
      align-items: center;
      margin: auto 0;

      text-align: center;
    }

    &__empty-img {
      width: 84px;
      height: 98px;
      margin-bottom: 20px;

      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &__empty-title {
      max-width: 370px;
      margin-bottom: 14px;

      font: 700 23px/1.2 'RF Dewi Extended', sans-serif;
      color: var(--black-color);
      text-transform: uppercase;
    }

    &__empty-text {
      max-width: 640px;
      margin-bottom: 20px;

      font: 400 16px/1.5 'RF Dewi Extended', sans-serif;
      color: #666666;
    }

    &__empty-link {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 66px;
      padding: 0 28px;

      border-radius: 5px;
      background-color: var(--black-color);

      font: 700 12px/1.2 'RF Dewi Expanded', sans-serif;
      color: var(--white-color);
      text-transform: uppercase;
      text-decoration: none;
    }
  }
</style>