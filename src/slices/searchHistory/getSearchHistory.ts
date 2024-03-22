import { routes } from "../../routes/remoteStoreRoutes";
import type { Routes } from "../../routes/remoteStoreRoutes";

const storeType: keyof Routes = import.meta.env.VITE_REMOTE_STORE;

const getSearchHistory = (email: string) => {
  return async (
    dispatch: (payload: {
      type: string;
      payload: Array<{ param: string; date: string }>;
    }) => void,
  ) => {
    try {
      const searchHistory = await routes[storeType].getSearchHistory(email);

      dispatch({
        type: "userInfo/setSearchHistory",
        payload: searchHistory,
      });
    } catch (error) {
      console.error("get Search History", error);
    }
  };
};

export { getSearchHistory };
