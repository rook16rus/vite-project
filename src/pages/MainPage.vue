<script setup>
import ProductsList from "../components/ProductsList.vue";
import AddProductForm from "../components/modals/AddProductForm.vue";
import { computed, onMounted, ref } from "vue";
import productsJson from "../assets/json/products.json";
import { onBeforeRouteUpdate } from "vue-router";

const emit = defineEmits(['cart-products']);

const products = ref([]);
const cartProducts = ref([]);

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

const isShowAddForm = ref(false);
const searchValue = ref('');
const sortValue = ref('');
const isAuthorized = ref(!!localStorage.getItem('userLogin'));

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

onBeforeRouteUpdate((to, from, next) => {
  searchValue.value = to.params.searchValue !== 'noSearch' ? to.params.searchValue : '';
  next();
})

const onAddProduct = (values) => {
  products.value.push({
    title: values.addProductName,
    price: values.addProductPrice,
    id: values.addProductId,
  });
}

const onAddToCart = (product) => {
  const productOnCart = cartProducts.value.find(item => item.id === product.id);

  if (productOnCart) {
    productOnCart.count++;
  } else {
    product.count = 1;
    cartProducts.value.push(product);
  }

  emit('cart-products', cartProducts.value);
}
</script>

<template>
  <section class="products">
    <div class="container">
      <div class="products__buttons" v-if="isAuthorized">
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

        <ProductsList :products="searchedAndSortedProducts"
                      @add-to-cart="onAddToCart"
        />
      </article>
    </div>
  </section>

  <AddProductForm v-model="isShowAddForm" @add-product="onAddProduct"/>
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