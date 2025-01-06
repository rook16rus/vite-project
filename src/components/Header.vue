<template>
  <header class="header">
    <div class="container">
      <div class="header__wrapper">
        <a class="header__logo" href="/">
          <img src="../assets/img/logo.svg" alt="Логотип XWEAR" fetchpriority="high">
        </a>
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
    }

    &__logo img {
      width: 84px;
      height: 34px;
      object-fit: contain;
    }
  }
</style>