import { useContext, useEffect } from "react";

import { useAppDispatch } from "./useAppDispatch";
import AuthContext from "../context/authContext";
import { getFavorites } from "../slices/favorites/getFavorites";
import { setName, setFavorites } from "../slices/usersDataSlice";
import { type AuthContType } from "../types/contextTypes";

const useAuth = (): AuthContType => {
  const { logStatus } = useContext(AuthContext);
  const dispatch = useAppDispatch();
  useEffect(() => {
    if (logStatus) {
      console.log("Авторизейшн хук сработал! Favorites теперь в стейте");
      const login = localStorage.getItem("currentUser");
      if (login !== null) {
        void dispatch(getFavorites(login));
        dispatch(setName(login));
      }
    } else {
      dispatch(setFavorites([]));
    }
  }, [logStatus]);
  return useContext(AuthContext);
};

export default useAuth;
