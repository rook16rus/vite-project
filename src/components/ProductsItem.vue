<script setup>
  const props = defineProps(['product']);
  const { title, image, price, id } = props.product;
</script>

<template>
  <li class="products-item">
    <div class="products-item__img">
      <img :src="image" alt="Фото товара" loading="lazy">
    </div>

    <span class="products-item__name">
        {{ title }}
    </span>

    <span class="products-item__price">
        от {{ price }} $
    </span>

    <div class="products-item__buttons">
      <button class="products-item__button" @click="$emit('add-to-cart')">
        В корзину
      </button>

      <router-link :to="'/products/' + id" class="products-item__button">
        Перейти
      </router-link>
    </div>
  </li>
</template>

<style scoped lang="scss">
  .products-item {
    display: flex;
    flex-direction: column;

    &__img {
      width: 100%;
      margin-bottom: 20px;

      img {
        display: block;
        aspect-ratio: 1 / 1;
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }

    &__name {
      margin-top: auto;

      font: 700 19px/1.4 'RF Dewi Extended', sans-serif;
      color: var(--black-color);
      text-transform: uppercase;
    }

    &__price {
      font: 400 17px/1.2 'RF Dewi Extended', sans-serif;
      color: var(--grey-color);
    }

    &__buttons {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
      gap: 20px;
    }

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      padding: 0 10px 2px;
      height: 36px;
      margin-top: 16px;
      align-self: flex-start;

      border-radius: 5px;
      border: 0;
      background-color: var(--black-color);
      cursor: pointer;

      font: 700 16px/1.2 'RF Dewi Extended', sans-serif;
      text-transform: uppercase;
      color: var(--white-color);
      text-decoration: none;
    }
  }
</style>