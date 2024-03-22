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

export interface RouteFunctions {
  postFavorites: FetchPostFavorites;
  getFavorites: FetchGetFavorites;
  postSearchHistory: FetchPostSearchHistory;
  getSearchHistory: FetchGetSearchHistory;
  putSearchHistory: FetchPutSearchHistory;
  getUserAuth: FetchGetUserAuth;
  postNewUser: FetchPostNewUser;
}

export interface Routes {
  ls: RouteFunctions;
  //   firebase: RouteFunctions;
}

export const routes = {
  ls: {
    postFavorites: fetchPostFavorites,
    getFavorites: fetchGetFavorites,
    getSearchHistory: fetchGetSearchHistory,
    postSearchHistory: fetchPostSearchHistory,
    putSearchHistory: fetchPutSearchHistory,
    getUserAuth: fetchGetUserAuth,
    postNewUser: fetchPostNewUser,
  },
  //   firebase: {
  //     getFavorites: () => {},
  //     postFavorites: () => {},
  //   },
};
