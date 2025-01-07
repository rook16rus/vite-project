<script setup>
import {ref} from "vue";
import {Form, Field, ErrorMessage} from 'vee-validate';

import ModalBlock from "./ModalBlock.vue";

const props = defineProps(['modelValue', 'productName']);
const emit = defineEmits(['update:modelValue']);

const userName = ref('');
const userPhone = ref('');
const userEmail = ref('');

const validateEmail = (value) => {

  if (!value) {
    return 'Это поле обязательно';
  }

  const regex = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
  if (!regex.test(value)) {
    return 'Неправильный email';
  }

  return true;
}

const validateName = (value) => {
  if (!value) {
    return 'Это поле обязательно';
  }

  return true
}

const validatePhone = (value) => {
  if (!value) {
    return 'Это поле обязательно';
  }

  const regex = /^[\+]?[(]?[0-9]{3}[)]?[-\s\.]?[0-9]{3}[-\s\.]?[0-9]{4,6}$/;
  if (!regex.test(value)) {
    return 'Неккоректный номер телефона'
  }

  return true
}

const onSubmit = (values) => {
  values.orderProductName = props.productName;
  console.log(JSON.stringify(values, null, 2));
  emit('update:modelValue');
}
</script>

<template>
  <ModalBlock :isShow="modelValue" @close-modal="(value) => $emit('update:modelValue', value)">
    <Form class="form" @submit="onSubmit">
      <div class="form__block input-block form__block--large">
        <label class="form__label label" for="orderProduct">Название товара:</label>
        <Field type="text"
               id="orderProduct"
               name="orderProduct"
        >
          <input class="form__input input" :value="productName" disabled>
        </Field>
      </div>

      <div class="form__block input-block">
        <label class="form__label label" for="orderName">Ваше имя:</label>
        <Field class="form__input input"
               type="text"
               id="orderName"
               name="orderName"
               placeholder="Введите имя"
               v-model="userName"
               :rules="validateName"
        />
        <ErrorMessage name="orderName" class="error" />
      </div>

      <div class="form__block input-block">
        <label class="form__label label" for="orderPhone">Номер телефона:</label>
        <Field class="form__input input"
               type="tel"
               id="orderPhone"
               name="orderPhone"
               placeholder="+7 (000) 000 - 00 - 00"
               v-model="userPhone"
               :rules="validatePhone"
        />
        <ErrorMessage name="orderPhone" class="error" />
      </div>

      <div class="form__block input-block form__block--large">
        <label class="form__label label" for="orderEmail">Email адрес:</label>
        <Field class="form__input input"
               type="email"
               id="orderEmail"
               name="orderEmail"
               placeholder="example@myemail.com"
               v-model="userEmail"
               :rules="validateEmail"
        />
        <ErrorMessage name="orderEmail" class="error" />
      </div>

      <button class="form__button" type="submit">
        Отправить заявку
      </button>
    </Form>
  </ModalBlock>
</template>

<style scoped lang="scss">

</style>