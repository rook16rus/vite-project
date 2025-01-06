<template>
  <footer class="footer">
    <div class="container">
      <div class="footer__wrapper">
        <a class="footer__logo" href="/">
          <img src="../assets/img/footer-logo.svg" alt="Логотип XWEAR" fetchpriority="high">
        </a>
      </div>
    </div>
  </footer>
</template>

<style scoped>
.footer {
  display: flex;
  align-items: center;
  height: 100px;

  background-color: var(--black-color);

  &__wrapper {
    display: flex;
    justify-content: space-between;
  }

  &__logo img {
    width: 100px;
    height: 41px;
    object-fit: contain;
  }
}
</style>