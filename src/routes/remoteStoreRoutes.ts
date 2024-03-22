import {
  fetchPostFavorites,
  fetchGetFavorites,
  fetchPostSearchHistory,
  fetchGetSearchHistory,
  fetchPutSearchHistory,
  fetchGetUserAuth,
  fetchPostNewUser,
} from "../asServerApi/apiRequests";
import type {
  FetchPostFavorites,
  FetchGetFavorites,
  FetchPostSearchHistory,
  FetchGetSearchHistory,
  FetchPutSearchHistory,
  FetchGetUserAuth,
  FetchPostNewUser,
} from "../asServerApi/apiRequests";

const storeType = import.meta.env.VITE_REMOTE_STORE;

export interface RouteFunctions {
  postStoreFavorites: FetchPostFavorites;
  getStoreFavorites: FetchGetFavorites;
  postStoreHistory: FetchPostSearchHistory;
  getStoreHistory: FetchGetSearchHistory;
  putStoreHistory: FetchPutSearchHistory;
  getStoreUserAuth: FetchGetUserAuth;
  postStoreNewUser: FetchPostNewUser;
}

const ls = {
  postStoreFavorites: fetchPostFavorites,
  getStoreFavorites: fetchGetFavorites,
  getStoreHistory: fetchGetSearchHistory,
  postStoreHistory: fetchPostSearchHistory,
  putStoreHistory: fetchPutSearchHistory,
  getStoreUserAuth: fetchGetUserAuth,
  postStoreNewUser: fetchPostNewUser,
};

// чтобы была имитация переключения разных сторов,
// оставила здесь те же функции, так как firebase не реализован
const firebase = {
  postStoreFavorites: fetchPostFavorites,
  getStoreFavorites: fetchGetFavorites,
  getStoreHistory: fetchGetSearchHistory,
  postStoreHistory: fetchPostSearchHistory,
  putStoreHistory: fetchPutSearchHistory,
  getStoreUserAuth: fetchGetUserAuth,
  postStoreNewUser: fetchPostNewUser,
};

const stores = {
  ls,
  firebase,
};

// здесь (store === undefined), так как написать (!store) линтер не позволяет,
// ошибка: Unexpected object value in conditional. The condition is always true
export const getStore = (): RouteFunctions => {
  const store = stores[storeType as keyof typeof stores];
  if (store === undefined) {
    throw new Error(`Store with type "${storeType}" is not defined`);
  }
  return store;
};

const currentStore = getStore();

export default currentStore;
