import {createRouter, createWebHistory} from "vue-router";

import MainPage from "../pages/MainPage.vue";
import CheckoutPage from "../pages/CheckoutPage.vue";
import CartPage from "../pages/CartPage.vue";
import ProductPage from "../pages/ProductPage.vue";
import LoginPage from "../pages/LoginPage.vue";


const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes: [
    {
      path: '/',
      name: 'main',
      component: MainPage,
    },
    {
      path: '/:searchValue',
      name: 'search',
      component: MainPage,
    },
    {
      path: '/checkout/',
      name: 'checkout',
      component: CheckoutPage
    },
    {
      path: '/cart/',
      name: 'cart',
      component: CartPage
    },
    {
      path: '/products/:productId',
      name: 'product',
      component: ProductPage
    },
    {
      path: '/login/',
      name: 'login',
      component: LoginPage,
    },
  ],
  scrollBehavior: () => ({ top: 0 }),
})

export default router