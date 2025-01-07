<script setup>
defineProps(['isShow']);
</script>

<template>
  <div class="modal" v-show="isShow" @click="$emit('close-modal', false)">
    <div class="modal__wrapper">
      <div class="modal__content" @click.stop>
        <button class="modal__close" @click="$emit('close-modal', false)">X</button>
        <slot></slot>
      </div>
    </div>
  </div>
</template>

<style scoped lang="scss">
.modal {
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  z-index: 5;

  display: flex;

  background-color: rgba(0, 0, 0, 0.8);
  backdrop-filter: blur(10px);

  &__wrapper {
    display: flex;
    justify-content: center;
    align-items: flex-start;
    width: 100%;
    height: 100%;
    padding: 0 20px;
  }

  &__content {
    position: relative;

    width: 100%;
    max-width: 700px;
    padding: 45px;
    margin: auto;

    border-radius: 16px;
    background-color: var(--white-color);
  }

  &__close {
    position: absolute;
    top: 10px;
    right: 10px;

    display: flex;
    justify-content: center;
    align-items: center;
    width: 30px;
    height: 30px;

    background-color: transparent;
    border: 0;
    outline: 0;
    cursor: pointer;

    font: 700 23px/1 'RF Dewi Extended', sans-serif;
  }
}
</style>