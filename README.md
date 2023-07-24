# main-test-app-vue

Небольшое приложение с набором CRUD-операций.

Предъявляются следующие требования к приложению:

- Получить данные с backend'a и вывести их в табличку.
- Сделать кнопку добавления новой записи.
- Запись посылать на бэкэнд.
- Кнопка удаления записи должна быть напротив каждой строки таблицы, по клику запись удаляется запросом на бэкэнде, по успеху — удаляется на фронтэнде.
- Кнопка редактирования должна быть напротив каждой строки таблицы.
    - По клику на нее, в таблице все инпуты должны стать редактируемыми и на месте кнопки «редактировать», должна появиться кнопка «сохранить».
    - По нажатию на «сохранить», должен отправиться запрос на бэкэнд, по успеху — инпуты опять должны стать read only и кнопка поменяться на «редактировать».
- Сделать инпут для фильтрации (живой поиск).

## Project Setup

```sh
npm install
```

### Compile and Hot-Reload for Development

```sh
npm run dev
```

### Lint with [ESLint](https://eslint.org/)

```sh
npm run lint
```