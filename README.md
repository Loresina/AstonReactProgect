<a href="https://github.com/Loresina/AstonReactProgect/actions"><img src="https://github.com/Loresina/AstonReactProgect/actions/workflows/cicd.yml/badge.svg" /></a>

<a href="https://codeclimate.com/github/Loresina/AstonReactProgect/maintainability"><img src="https://api.codeclimate.com/v1/badges/7ee0f3d964128a3116c9/maintainability" /></a>

### Book Search

* Это приложение по поиску книг в онлайн библиотеке.
* Использовано [Google Books Api](https://developers.google.com/books).
* [Посмотреть проект](https://aston-react-progect.vercel.app/).

**Основной функционал**

* Регистрация и авторизация пользователей.
* Поиск книг по названию.
* Зарегестрированный пользователь может добавлять или удалять книги из списка избранных.
* Зарегестрированный пользователь может смотреть свою историю поиска (строка и дата запроса),
может удалять ненужные строки из истории поиска.


### 1 уровень (обязательный - необходимый минимум)
- [x] Реализованы Требования к функциональности.
- [x] Для хранения учетных записей пользователей, их Избранного и Истории поиска, использован LocalStorage.

### React
- [x] Используются функциональные компоненты с хуками.
- [x] Есть разделение на умные и глупые компоненты: [Умный компонент](https://github.com/Loresina/AstonReactProgect/blob/main/src/components/pages/galleries/FavoritesGallery.tsx), [Глупый компонент](https://github.com/Loresina/AstonReactProgect/blob/main/src/components/separateComponents/Gallery.tsx)
- [x] Есть рендеринг списков: [Gallery](https://github.com/Loresina/AstonReactProgect/blob/main/src/components/separateComponents/Gallery.tsx),  [SearchHistory](https://github.com/Loresina/AstonReactProgect/blob/main/src/components/pages/SearchHistory.tsx)
- [x] Реализована хотя бы одна форма. Использованы useFormik + Yup: [UserForm](https://github.com/Loresina/AstonReactProgect/blob/main/src/components/separateComponents/UserForm.tsx)
- [x] Есть применение Контекст API: [Context](https://github.com/Loresina/AstonReactProgect/tree/main/src/context)
- [x] Есть применение предохранителя: [ErrorBoundary](https://github.com/Loresina/AstonReactProgect/blob/main/src/components/ErrorBoundary.tsx)
- [x] Есть хотя бы один кастомный хук: [useAuth](https://github.com/Loresina/AstonReactProgect/blob/main/src/hooks/useAuth.ts)
- [x] Хотя бы несколько компонентов используют PropTypes: [LikeButton](https://github.com/Loresina/AstonReactProgect/blob/main/src/components/separateComponents/LikeButton.tsx), [Card](https://github.com/Loresina/AstonReactProgect/blob/main/src/components/separateComponents/Card.tsx)
- [x] Поиск не должен триггерить много запросов к серверу (debounce): [Debounce](https://github.com/Loresina/AstonReactProgect/blob/main/src/hooks/useDebounce.ts)
- [x] Есть применение lazy + Suspense: [App](https://github.com/Loresina/AstonReactProgect/blob/main/src/App.tsx)

### Redux
- [x] Используется Modern Redux with Redux Toolkit: [slices](https://github.com/Loresina/AstonReactProgect/blob/main/src/slices/slices.ts)
- [x] Используются слайсы: [userDataSlice](https://github.com/Loresina/AstonReactProgect/blob/main/src/slices/usersDataSlice.ts)
- [x] Кастомная мидлвара - createListenerMiddleware: [loginMiddle](https://github.com/Loresina/AstonReactProgect/blob/main/src/slices/loginMiddle.ts)
- [x] Используется RTK Query: [bookSearchApi](https://github.com/Loresina/AstonReactProgect/blob/main/src/slices/bookSearchApi.ts)
- [x] Используется Transforming Responses: [normData]()https://github.com/Loresina/AstonReactProgect/blob/main/src/components/_normData.ts, [transformResponse](https://github.com/Loresina/AstonReactProgect/blob/main/src/slices/bookSearchApi.ts)

### 2 уровень (необязательный)
- [x] Использование TypeScript.
- [x] Низкая связанность клиентского кода с хранилищем - запросы к внешнему хранилищу осуществляются в функциях, подключенных к Redux Stote.
В компонентах диспатчатся (через Thunk). [favorites](https://github.com/Loresina/AstonReactProgect/tree/main/src/slices/favorites), [signUser](https://github.com/Loresina/AstonReactProgect/tree/main/src/slices/signUser)
- [x] Настроен CI/CD.
- [x] Подключен сервис для анализа кода [Code Climate](https://codeclimate.com/github/Loresina/AstonReactProgect/maintainability)

