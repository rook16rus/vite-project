<script setup>
import { ref } from "vue";
import { ErrorMessage, Field, Form } from "vee-validate";

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
  console.log(JSON.stringify(values, null, 2));
}
</script>

<template>
  <section class="checkout">
    <div class="container">
      <h1 class="checkout__title">
        Оформление заказа
      </h1>

      <div class="checkout__wrapper">
        <div class="checkout__requisites">
          <h2 class="checkout__requisites-title">
            Платежные реквизиты
          </h2>

          <Form class="form" @submit="onSubmit">
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
          </Form>
        </div>

        <div class="checkout__order">
          <h2 class="checkout__order-title">
            Ваш заказ
          </h2>

          <ul class="checkout__order-list">
            <li class="checkout__order-item">

            </li>
          </ul>

          <button class="checkout__order-button form__button">
            Оформить заказ
          </button>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .checkout {
    padding: 50px 0 70px;

    &__title {
      margin-bottom: 50px;

      font: 900 31px/1.2 'RF Dewi Expanded', sans-serif;
      color: var(--black-color);
      text-transform: uppercase;
    }

    &__wrapper {
      display: grid;
      grid-template-columns: repeat(12, 1fr);
      align-items: flex-start;
      gap: 30px;
    }

    &__requisites {
      grid-column: span 7;
    }

    &__order {
      display: flex;
      flex-direction: column;
      align-self: stretch;
      grid-column: span 5;
    }

    &__requisites, &__order {
      padding: 28px 40px;

      border: 1px solid #E9EAEE;
      border-radius: 5px;
    }

    &__requisites-title, &__order-title {
      margin-bottom: 30px;

      font: 700 23px/1.2 'RF Dewi Expanded', sans-serif;
      color: var(--black-color);
      text-transform: uppercase;
    }

    &__order-button {
      width: 100%;
      margin-top: auto;
    }
  }
</style>