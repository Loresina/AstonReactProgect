import { routes } from "../../routes/remoteStoreRoutes";
import type { Routes } from "../../routes/remoteStoreRoutes";

const storeType: keyof Routes = import.meta.env.VITE_REMOTE_STORE;

const addSearchHistory = (email: string, searchQuery: string, date: string) => {
  return async (
    dispatch: (payload: {
      type: string;
      payload: Array<{ param: string; date: string }>;
    }) => void,
  ) => {
    try {
      await routes[storeType].postSearchHistory(email, searchQuery, date);
      const searchHistory = await routes[storeType].getSearchHistory(email);

      dispatch({
        type: "userInfo/setSearchHistory",
        payload: searchHistory,
      });
    } catch (error) {
      console.error("add Search History", error);
    }
  };
};

export { addSearchHistory };
