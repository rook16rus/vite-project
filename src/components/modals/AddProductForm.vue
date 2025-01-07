<script setup>
import {ref} from "vue";
import {Form, Field, ErrorMessage} from 'vee-validate';

import ModalBlock from "./ModalBlock.vue";

defineProps(['modelValue'])
const emit = defineEmits(['update:modelValue', 'add-product']);

const productName = ref('');
const productPrice = ref('');

const validateName = (value) => {
  if (!value) {
    return 'Это поле обязательно';
  }

  return true
}

const validatePrice= (value) => {
  if (!value) {
    return 'Это поле обязательно';
  }

  if (isNaN(value)) {
    return 'Введите число'
  }

  return true
}

const onSubmit = (values) => {
  console.log(JSON.stringify(values, null, 2));
  emit('update:modelValue');
  emit('add-product', values);
}
</script>

<template>
  <ModalBlock :isShow="modelValue" @close-modal="(value) => $emit('update:modelValue', value)">
    <Form class="form" action="#" @submit="onSubmit">
      <div class="form__block input-block">
        <label class="form__label label" for="addProductName">Название товара:</label>
        <Field class="form__input input"
               type="text"
               id="addProductName"
               name="addProductName"
               placeholder="Введите название товара"
               v-model="productName"
               :rules="validateName"
        />
        <ErrorMessage name="addProductName" class="error" />
      </div>

      <div class="form__block input-block">
        <label class="form__label label" for="addProductPrice">Цена товара ($)</label>
        <Field class="form__input input"
               type="number"
               id="addProductPrice"
               name="addProductPrice"
               placeholder="Введите цену"
               v-model="productPrice"
               :rules="validatePrice"
        />
        <ErrorMessage name="addProductPrice" class="error" />
      </div>

      <div class="form__block input-block form__block--large">
        <label class="form__label label-file">
          <img src="../../assets/icons/clip-icon.svg" alt="Иконка скрепки" loading="lazy">
          <span>Прикрепить фото товара</span>
          <Field name="addProductPhoto">
            <input class="form__input visually-hidden" type="file" id="addProductPhoto" name="addProductPhoto">
          </Field>
        </label>

      </div>

      <button class="form__button" type="submit">
        Отправить заявку
      </button>
    </Form>
  </ModalBlock>
</template>

<style scoped lang="scss">

</style>