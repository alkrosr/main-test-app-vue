<template>
  <main class="main">
    <div class="table">
      <div class="table__top">
        <div class="col col-checkbox">
          <label class="checkbox style-c">
            <input type="checkbox" />
            <div class="checkbox__checkmark-a"></div>
          </label>
        </div>
        <div class="col col-user">Пользователь</div>
        <div class="col col-phone">Номер телефона</div>
        <div class="col col-email">Email</div>
        <div class="col col-date-at">Дата регистрации</div>
        <div class="col col-code">Код</div>
        <div class="col col-city">Город</div>
      </div>
      <template v-if="true">
        <div v-if="true" class="table__content">
          <div class="col col-checkbox">
            <label class="checkbox style-c">
              <input disabled type="checkbox" />
              <div class="checkbox__checkmark"></div>
            </label>
          </div>
          <div class="col col-user col-input">
            <input v-model="inputUser.username" class="input" name="username" type="text" />
          </div>
          <div class="col col-phone col-input">
            <input v-model="inputUser.phone" class="input" name="username" type="text" />
          </div>
          <div class="col col-email col-input">
            <input v-model="inputUser.email" class="input" name="username" type="text" />
          </div>
          <div class="col col-date-at col-input">
            <input v-model="inputUser.register_date" class="input" name="username" type="text" />
          </div>
          <div class="col col-code col-input">
            <input v-model="inputUser.code" class="input" name="username" type="text" />
          </div>
          <div class="col col-city col-input">
            <input v-model="inputUser.city" class="input" name="username" type="text" />
          </div>
        </div>
        <div v-for="user in props.users" :key="user.id" class="table__content">
          <div class="col col-checkbox">
            <label class="checkbox style-c">
              <input v-model="selectedUsers" :value="user.id" type="checkbox" />
              <div class="checkbox__checkmark"></div>
            </label>
          </div>
          <div class="col col-user col-input">
            <input
              v-model="user.username"
              :disabled="user.isDisabled"
              class="input"
              name="username"
              type="text"
            />
          </div>
          <div class="col col-phone col-input">
            <input
              v-model="user.phone"
              :disabled="user.isDisabled"
              class="input"
              name="phone"
              type="text"
            />
          </div>
          <div class="col col-email col-input">
            <input
              v-model="user.email"
              :disabled="user.isDisabled"
              class="input"
              name="email"
              type="text"
            />
          </div>
          <div class="col col-date-at col-input">
            <input
              v-model="user.register_date"
              :disabled="user.isDisabled"
              class="input"
              name="register_date"
              type="text"
            />
          </div>
          <div class="col col-code col-input">
            <input
              v-model="user.code"
              :disabled="user.isDisabled"
              class="input"
              name="code"
              type="text"
            />
          </div>
          <div class="col col-city col-input">
            <input
              v-model="user.city"
              :disabled="user.isDisabled"
              class="input"
              name="city"
              type="text"
            />
          </div>
        </div>
        <div v-if="!users" class="table__no-content">
          <span>В системе нет пользователей, добавьте пользователя для отображения!</span>
        </div>
      </template>
    </div>
  </main>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const inputUser = ref({
  username: '',
  phone: '',
  email: '',
  register_date: '',
  code: 0,
  city: ''
})

const selectedUsers = ref([])
const props = defineProps({
  users: {
    type: Array
  }
})
</script>

<style lang="scss">
.main {
  .table {
    .col-checkbox {
      height: 48px;
      min-width: 48px;

      .checkbox.style-c {
        display: inline-block;
        position: relative;
        padding-left: 30px;
        cursor: pointer;
        -webkit-user-select: none;
        -moz-user-select: none;
        -ms-user-select: none;
        user-select: none;
      }

      .checkbox.style-c input {
        position: absolute;
        opacity: 0;
        cursor: pointer;
        height: 0;
        width: 0;
      }

      .checkbox.style-c input:checked ~ .checkbox__checkmark {
        background-color: #1f232e;
      }

      .checkbox.style-c input:checked ~ .checkbox__checkmark:after {
        opacity: 1;
      }

      .checkbox.style-c:hover input ~ .checkbox__checkmark {
        background-color: #eee;
      }

      .checkbox.style-c:hover input:checked ~ .checkbox__checkmark {
        background-color: #1f232e;
      }

      .checkbox.style-c .checkbox__checkmark {
        position: absolute;
        top: -13px;
        left: -3px;
        height: 20px;
        width: 20px;
        background-color: #eee;
        transition: background-color 0.25s ease;
        border-radius: 4px;
      }

      .checkbox.style-c .checkbox__checkmark:after {
        content: '';
        position: absolute;
        left: 8px;
        top: 4px;
        width: 5px;
        height: 10px;
        border: solid #ffffff;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
        transition: opacity 0.25s ease;
      }

      .checkbox.style-c .checkbox__checkmark:after {
        content: '';
        position: absolute;
        left: 8px;
        top: 4px;
        width: 5px;
        height: 10px;
        border: solid #ffffff;
        border-width: 0 2px 2px 0;
        transform: rotate(45deg);
        opacity: 0;
        transition: opacity 0.25s ease;
      }

      .checkbox.style-c input:checked ~ .checkbox__checkmark-a {
        background-color: #1f232e;
      }

      .checkbox.style-c input:checked ~ .checkbox__checkmark-a:after {
        opacity: 1;
      }

      .checkbox.style-c:hover input ~ .checkbox__checkmark-a {
        background-color: #eee;
      }

      .checkbox.style-c:hover input:checked ~ .checkbox__checkmark-a {
        background-color: #1f232e;
      }

      .checkbox.style-c .checkbox__checkmark-a {
        position: absolute;
        top: -13px;
        left: -3px;
        height: 20px;
        width: 20px;
        background-color: #eee;
        transition: background-color 0.25s ease;
        border-radius: 4px;
      }

      .checkbox.style-c .checkbox__checkmark-a:after {
        content: '';
        position: absolute;
        left: 8px;
        top: 4px;
        width: 5px;
        height: 10px;
        border: solid #ffffff;
        border-width: 0 2px 2px 0;
        //transform: rotate(45deg);
        opacity: 0;
        transition: opacity 0.25s ease;
      }

      .checkbox.style-c .checkbox__checkmark-a:after {
        content: '';
        position: absolute;
        border: solid #ffffff;
        border-width: 0 2px 2px 0;
        //transform: rotate(45deg);
        opacity: 0;
        transition: opacity 0.25s ease;

        left: 6px;
        top: 9px;
        width: 9px;
        height: 2px;
      }
    }

    .col-user {
      width: 100%;
      min-width: 300px;
    }

    .col-phone {
      width: 100%;
      min-width: 210px;
    }

    .col-email {
      width: 100%;
      min-width: 350px;
    }

    .col-date-at {
      width: 100%;
      min-width: 220px;
    }

    .col-code {
      width: 100%;
      min-width: 100px;
    }

    .col-city {
      width: 100%;
      min-width: 212px;
    }

    .table__top {
      display: flex;

      align-items: center;

      height: 48px;

      background: rgba(240, 242, 244, 0.5);

      .col {
        border-right: 1px solid rgba(198, 209, 221, 0.5);

        padding: 16px;
      }
    }

    .table__content {
      display: flex;

      height: 48px;

      .col-checkbox {
        padding: 16px;
      }

      .col {
        border-right: 1px solid rgba(198, 209, 221, 0.5);
        border-bottom: 1px solid rgba(198, 209, 221, 0.5);
      }

      .col-input {
        padding: 3px;
      }

      .input {
        width: 100%;

        outline: none;
        padding: 12px 11px;

        border-radius: 4px;
        border: 1px solid #4aa6ff;

        &:focus {
          background-color: #fff;
          outline: 0;

          border-radius: 4px;
          border: 1px solid #4aa6ff;
        }

        &:disabled {
          border: 1px solid transparent;
          opacity: 1;
        }
      }
    }

    .table__no-content {
      height: 100px;

      display: flex;
      align-items: center;
      justify-content: center;
    }
  }
}
</style>
<script lang="ts" setup></script>
