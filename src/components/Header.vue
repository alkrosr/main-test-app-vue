<script lang="ts" setup>
import IconPlus from '@/components/icons/IconPlus.vue'
import IconSearch from '@/components/icons/IconSearch.vue'
import IconEdit from '@/components/icons/IconEdit.vue'
import IconDelete from '@/components/icons/IconDelete.vue'
import {ref} from "vue";

const inputValue = ref('')

const search = () => {
  if (inputValue.value) {
    console.log("inputSearch", inputValue.value)
  }
}
</script>

<template>
  <header class="header">
    <div v-if="true" class="header__search">
      <form class="header__input" @submit.prevent="search">
        <input class="input" type="text" v-model="inputValue"/>
        <button class="header__search-btn" type="submit">
          <IconSearch />
        </button>
      </form>
      <div class="header__button">
        <button class="header__button-add" type="submit">
          <IconPlus />
          <span>Добавить пользователя</span>
        </button>
      </div>
    </div>

    <div v-if="false" class="header__control">
      <div class="header__control-title">Добавление нового пользоваетля</div>
      <div class="header__control-buttons">
        <button class="save" type="submit">
          <span>Сохранить</span>
        </button>
        <button class="cancel" type="submit">
          <span>Отмена</span>
        </button>
      </div>
    </div>

    <div v-if="false" class="header__control">
      <div class="header__control-title">Выделено: 7</div>
      <div class="header__control-buttons">
        <button class="edit" type="submit">
          <span>Редактировать</span>
          <IconEdit />
        </button>
        <button class="delete" type="submit">
          <span>Удалить</span>
          <IconDelete />
        </button>
        <button class="cancel" type="submit">
          <span>Отмена</span>
        </button>
      </div>
    </div>

    <div v-if="false" class="header__control">
      <div class="header__control-title">Редактирование</div>
      <div class="header__control-buttons">
        <button class="save" type="submit">
          <span>Сохранить</span>
        </button>
        <button class="cancel" type="submit">
          <span>Отмена</span>
        </button>
      </div>
    </div>
  </header>
</template>

<style lang="scss" scoped>
.header {
  width: 100%;
  height: 48px;

  background: white;

  .header__search {
    width: 100%;
    height: 48px;

    display: flex;
    align-items: center;

    .header__input {
      width: 100%;
      height: 48px;

      position: relative;

      .input {
        width: 100%;
        padding: 16px 48px 16px 16px;

        outline: none;
        border: none;

        color: #1f232e;
        font-size: 14px;
        font-style: normal;
        font-weight: 500;
        line-height: 16px;
      }

      .header__search-btn {
        position: absolute;
        top: 0;
        right: 0;

        width: 48px;
        height: 48px;

        display: flex;
        align-items: center;
        justify-content: center;

          border: none;
          cursor: pointer;
          outline: none;
      }
    }

    .header__button {
      .header__button-add {
        width: 225px;
        height: 48px;

        border: none;
        cursor: pointer;
        outline: none;

        padding: 16px 12px;
        align-items: center;
        background: #316bff;

        color: white;

        display: flex;
        align-items: center;
        justify-content: space-between;

        svg {
          width: 16px;
          height: 16px;
        }

        span {
          display: block;
        }
      }
    }
  }

  .header__control {
    width: 100%;
    height: 48px;

    padding: 16px;

    background: black;
    color: white;

    display: flex;
    align-items: center;
    justify-content: space-between;

    .header__control-buttons {
      display: flex;

      button {
        height: 48px;

        border: none;
        cursor: pointer;
        outline: none;

        padding: 16px;
        align-items: center;

        color: white;

        transition: 0.3s;

        display: flex;

        svg {
          margin-left: 12px;
        }

        span {
          display: block;
        }

        &:hover {
          opacity: 0.7;
        }
      }
    }
  }
}
</style>