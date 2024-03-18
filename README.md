<a href="https://github.com/Loresina/AstonReactProgect/actions"><img src="https://github.com/Loresina/AstonReactProgect/actions/workflows/cicd.yml/badge.svg" /></a>

<a href="https://codeclimate.com/github/Loresina/AstonReactProgect/maintainability"><img src="https://api.codeclimate.com/v1/badges/7ee0f3d964128a3116c9/maintainability" /></a>

### Book Search

Это учебный проект - поиск книг по названию в онлайн библиотеке.

**Основной функционал**

* Регистрация и авторизация пользователей.
* Поиск книг по названию.
* Зарегестрированный пользователь может добавлять или удалять книги из списка избранных.
* Зарегестрированный пользователь может смотреть свою историю поиска (запрос и дата запроса),
может удалять ненужные строки из истории поиска.


### 1 уровень (обязательный - необходимый минимум)
- [ ] Реализованы Требования к функциональности.
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, использован LocalStorage.

### React
- [x] Используются функциональные компоненты с хуками.
- [x] Есть разделение на умные и глупые компоненты: useFormik + Yup
- [x] Есть рендеринг списков: [Gallery]()
- [x] Реализована хотя бы одна форма. Использованы useFormik + Yup: [UserForm]()
- [x] Есть применение Контекст API: [Example ?]()
- [ ] Есть применение предохранителя:
- [ ] Есть хотя бы один кастомный хук: [useAuth]()
- [ ] Хотя бы несколько компонентов используют PropTypes:
- [ ] Поиск не должен триггерить много запросов к серверу (debounce):
- [ ] Есть применение lazy + Suspense:

### Redux
- [x] Используем Modern Redux with Redux Toolkit: [slices]()
- [x] Используем слайсы: [userDataSlice]()
- [ ] Есть хотя бы одна кастомная мидлвара или createListenerMiddleware: ?
- [x] Используется RTK Query: [bookSearchApi]()
- [x] Используется Transforming Responses: ? [normData]()

### 2 уровень (необязательный)
- [x] Использование TypeScript.
- [ ] Низкая связанность клиентского кода с хранилищем - ?
- [x] Настроен CI/CD.