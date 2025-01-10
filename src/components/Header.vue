<script setup>
import {computed, ref} from "vue";
import { useRouter } from "vue-router";

const props = defineProps(['cartProducts']);

const userLogin = ref(localStorage.getItem('userLogin'));
const searchValue = ref('');

const cartProductsCount = computed(() => {
  return props.cartProducts.reduce((sum, current) => sum + current.count, 0)
})

const router = useRouter();

const onSearch = () => {
  router.push({ name: 'search', params: { searchValue: searchValue.value ? searchValue.value : 'noSearch' } });
}

const onClearLogin = () => {
  userLogin.value = '';
  localStorage.removeItem('userLogin');
}
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <router-link class="header__logo" to="/">
          <img src="../assets/img/logo.svg" alt="Логотип XWEAR" fetchpriority="high">
        </router-link>

        <div class="header__right">
          <button class="header__cart" @click="router.push({ name: 'cart', params: { cartProducts: cartProducts } })">
            <img class="header__cart-img" src="../assets/img/cart.svg" alt="Корзина" fetchpriority="high">
            <span class="header__cart-count">{{ cartProductsCount }}</span>
          </button>
          <div class="header__search">
            <input class="header__search-input"
                   type="text" name="search"
                   id="search"
                   @keyup.enter="onSearch"
                   v-model.lazy="searchValue"
            >
            <label class="visually-hidden" for="search">Поиск</label>
          </div>

          <div class="header__user">
            <span class="header__user-name" v-if="userLogin">
              <span>{{ userLogin }}</span>
              <router-link to="/login" @click="onClearLogin">Выйти</router-link>
            </span>
            <router-link v-else to="/login">Войти</router-link>
          </div>
        </div>
      </div>
    </div>
  </header>
</template>

<style scoped lang="scss">
  .header {
    display: flex;
    align-items: center;
    height: 100px;

    background-color: var(--black-color);

    &__wrapper {
      display: flex;
      justify-content: space-between;
      gap: 10px;
    }

    &__logo img {
      width: 84px;
      height: 34px;
      object-fit: contain;
    }

    &__right {
      display: flex;
      align-items: center;
      gap: 20px;
    }

    &__cart {
      display: flex;
      align-items: center;
      gap: 5px;

      background: none;
      border: 0;
      outline: 0;
      cursor: pointer;

      text-decoration: none;
    }

    &__cart-img {
      width: 17px;
      height: 20px;
      object-fit: contain;
    }

    &__cart-count {
      display: flex;
      justify-content: center;
      align-items: center;
      width: 18px;
      height: 18px;
      
      border-radius: 50%;
      background-color: var(--blue-color);

      font: 700 12px/100% 'RF Dewi Extended', sans-serif;
      color: var(--white-color);
    }

    &__search {
      display: grid;
      grid-template-columns: auto 1fr;
      align-items: center;
      gap: 14px;

      &::before {
        content: '';

        width: 18px;
        height: 18px;

        background: url("../assets/icons/search-icon.svg") no-repeat center;
        background-size: contain;
      }
    }

    &__search-input {
      display: flex;
      align-items: center;
      width: 100%;
      max-width: 250px;
      height: 30px;
      padding: 0 10px 3px;

      border: 0;
      border-radius: 5px;
      outline: 0;
      background-color: var(--white-color);

      font: 400 20px/1.2 'RF Dewi Extended', sans-serif;
      color: var(--black-color);
    }

    &__user {
      width: 80px;
      padding-bottom: 2px;

      font: 400 17px / 1.2 "RF Dewi Extended", sans-serif;
      color: var(--white-color);
      text-overflow: ellipsis;
      overflow: hidden;
      white-space: nowrap;
      
      a {
        color: var(--white-color);
        text-decoration: none;
      }
    }

    &__user-name {
      &:hover {
        span {
          display: none;
        }

        a {
          display: block;
        }
      }

      span, a {
        transition: 0.3s opacity, 0.3s visibility;
      }

      a {
        display: none;
      }
    }
  }
</style>