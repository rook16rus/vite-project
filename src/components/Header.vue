<script setup>
defineProps(['modelValue'])
</script>

<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <a class="header__logo" href="/">
          <img src="../assets/img/logo.svg" alt="Логотип XWEAR" fetchpriority="high">
        </a>

        <div class="header__search">
          <input class="header__search-input"
                 type="text" name="search"
                 id="search"
                 :value="modelValue"
                 @input="$emit('update:modelValue', $event.target.value)"
          >
          <label class="visually-hidden" for="search">Поиск</label>
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
  }
</style>