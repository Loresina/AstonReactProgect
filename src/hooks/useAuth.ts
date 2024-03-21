import { useContext, useEffect } from "react";

import { useAppDispatch } from "./useAppDispatch";
import AuthContext from "../context/authContext/authContext";
import { getFavorites } from "../slices/favorites/getFavorites";
import { getSearchHistory } from "../slices/searchHistory/getSearchHistory";
import {
  setName,
  setFavorites,
  setSearchHistory,
} from "../slices/usersDataSlice";
import { type AuthContType } from "../types/contextTypes";

const useAuth = (): AuthContType => {
  const { loginStatus } = useContext(AuthContext);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (loginStatus) {
      const login = localStorage.getItem("currentUser");
      if (login !== null) {
        void dispatch(getFavorites(login));
        void dispatch(getSearchHistory(login));
        dispatch(setName(login));
      }
    } else {
      dispatch(setFavorites([]));
      dispatch(setSearchHistory([]));
    }
  }, [loginStatus]);
  return useContext(AuthContext);
};

export default useAuth;
