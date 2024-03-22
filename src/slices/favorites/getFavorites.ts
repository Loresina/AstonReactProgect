import { routes } from "../../routes/remoteStoreRoutes";
import type { Routes } from "../../routes/remoteStoreRoutes";

const storeType: keyof Routes = import.meta.env.VITE_REMOTE_STORE;

const getFavorites = (email: string) => {
  return async (
    dispatch: (payload: { type: string; payload: string[] }) => void,
  ) => {
    try {
      const favorites = await routes[storeType].getFavorites(email);

      dispatch({
        type: "userInfo/setFavorites",
        payload: favorites,
      });
    } catch (error) {
      console.error("get Favorites", error);
    }
  };
};

export { getFavorites };
