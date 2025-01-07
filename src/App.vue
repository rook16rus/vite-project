<script setup>
import {computed, onMounted, ref} from "vue";

import HeaderBlock from "./components/Header.vue";
import FooterBlock from "./components/Footer.vue";
import ProductsList from "./components/ProductsList.vue";

import productsJson from "./assets/json/products.json"
import OrderForm from "./components/modals/OrderForm.vue";
import AddProductForm from "./components/modals/AddProductForm.vue";

const products = ref([]);

const sortOptions = ref([
  {
    flag: 'title',
    text: 'По названию',
  },
  {
    flag: 'price',
    text: 'По цене',
  },
]);

const isShowOrderForm = ref(false);
const isShowAddForm = ref(false);
const productName = ref('');

const searchValue = ref('');
const sortValue = ref('');

const searchedProducts = computed(() => {
  return products.value.filter(product => product.title.toLowerCase().includes(searchValue.value.toLowerCase()))
})

const searchedAndSortedProducts = computed(() => {
  if (sortValue.value === 'title') {
    return [...searchedProducts.value].sort((product1, product2) => {
      return product1[sortValue.value]?.localeCompare(product2[sortValue.value])
    })
  } else if (sortValue.value === 'price') {
    return [...searchedProducts.value].sort((product1, product2) => {
      return product1[sortValue.value] - product2[sortValue.value];
    })
  } else {
    return searchedProducts.value
  }
})

onMounted(() => {
  products.value = productsJson;
})

const openOrderForm = (show, title) => {
  isShowOrderForm.value = show;
  productName.value = title;
}

const onAddProduct = (values) => {
  products.value.push({
    title: values.addProductName,
    price: values.addProductPrice
  });
}
</script>

<template>
  <div class="page">
    <HeaderBlock v-model="searchValue" />

    <main class="main">
      <section class="products">
        <div class="container">
          <div class="products__buttons">
            <button class="products__button" @click="isShowAddForm = true">
              Создать товар
            </button>
          </div>

          <article class="products__block">
            <header class="products__block-header">
              <h3 class="products__title">
                Товары
              </h3>

              <select class="products__select" v-model="sortValue">
                <option value="" disabled>Сортировка</option>
                <option
                    v-for="option in sortOptions"
                    :value="option.flag"
                >
                  {{ option.text }}
                </option>
              </select>
            </header>

            <ProductsList :products="searchedAndSortedProducts" @order-form-open="openOrderForm" />
          </article>
        </div>
      </section>

      <OrderForm v-model="isShowOrderForm" :productName />

      <AddProductForm v-model="isShowAddForm" @add-product="onAddProduct"/>
    </main>

    <FooterBlock />
  </div>
</template>

<style scoped lang="scss">
  .products {
    padding: 80px 0;

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 26px 2px;
      height: 45px;
      margin-bottom: 40px;
      align-self: flex-start;

      border-radius: 5px;
      border: 0;
      background-color: var(--black-color);
      cursor: pointer;

      font: 700 16px/1.2 'RF Dewi Extended', sans-serif;
      text-transform: uppercase;
      color: var(--white-color);
    }

    &__block-header {
      display: flex;
      align-items: flex-end;
      justify-content: space-between;
      margin-bottom: 40px;

      @media (max-width: 420px) {
        flex-direction: column;
        align-items: flex-start;
        gap: 20px;
        margin-bottom: 30px;
      }
    }

    &__select {
      padding: 0 10px;
      width: 150px;
      height: 30px;

      border-radius: 5px;
      outline: 0;
      cursor: pointer;

      font: 400 14px/1.2 'RF Dewi Extended', sans-serif;
      color: var(--black-color);
    }

    &__title {
      font: 900 31px/1.2 'RF Dewi Expanded', sans-serif;
      color: var(--black-color);
      text-transform: uppercase;
    }
  }
</style>
