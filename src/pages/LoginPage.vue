<script setup>
import { ref } from "vue";
import { useRouter } from "vue-router";
import { ErrorMessage, Field, Form } from "vee-validate";
import { useStorage } from "@vueuse/core";

const userEmail = ref('');
const userPassword = ref('');

const router = useRouter();

const validationHandler = (value) => {
  if (!value) {
    return 'Это поле обязательно';
  }

  return true
}

const onSubmit = (values) => {
  userEmail.value = '';
  userPassword.value = '';

  useStorage('userLogin', values.authorizationEmail);
  router.push({ name: 'main'});
}
</script>

<template>
  <section class="login">
    <div class="container">
      <h1 class="login__title">
        Аккаунт
      </h1>

      <div class="login__wrapper">
        <div class="login__authorization">
          <h2 class="login__subtitle">
            Войти
          </h2>

          <Form class="login__form" @submit="onSubmit">
            <div class="login__form-block input-block">
              <label class="form__label label" for="authorizationEmail">Логин</label>
              <Field class="form__input input"
                     type="text"
                     id="authorizationEmail"
                     name="authorizationEmail"
                     v-model="userEmail"
                     :rules="validationHandler"
              />
              <ErrorMessage name="authorizationEmail" class="error" />
            </div>

            <div class="login__form-block input-block">
              <label class="form__label label" for="authorizationPassword">Пароль:</label>
              <Field class="form__input input"
                     type="password"
                     id="authorizationPassword"
                     name="authorizationPassword"
                     v-model="userPassword"
                     :rules="validationHandler"
              />
              <ErrorMessage name="authorizationPassword" class="error" />
            </div>

            <button class="login__button" type="submit">
              Войти
            </button>
          </Form>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped lang="scss">
  .login {
    display: flex;
    flex-direction: column;
    justify-content: center;
    flex-grow: 1;
    padding: 50px 0;

    &__title {
      margin-bottom: 50px;

      font: 900 31px/1.2 'RF Dewi Expanded', sans-serif;
      color: var(--black-color);
      text-transform: uppercase;
    }

    &__wrapper {
      display: grid;
      grid-template-columns: repeat(2, 1fr);
    }

    &__authorization {
      padding: 34px 40px;

      border: 1px solid #E9EAEE;
      border-radius: 5px;
    }

    &__subtitle {
      margin-bottom: 26px;

      font: 700 23px/1.2 'RF Dewi Extended', sans-serif;
      color: #303030;
    }

    &__form {
      display: grid;
      grid-template-columns: 1fr;
      gap: 30px;
    }

    &__button {
      display: flex;
      justify-content: center;
      align-items: center;
      justify-self: center;
      height: 66px;
      padding: 0 70px;

      border: 0;
      border-radius: 5px;
      background-color: var(--black-color);
      outline: none;
      cursor: pointer;

      font: 700 12px/1.2 'RF Dewi Extended', sans-serif;
      color: var(--white-color);
      text-transform: uppercase;
    }
  }
</style>