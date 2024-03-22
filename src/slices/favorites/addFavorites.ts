import { routes } from "../../routes/remoteStoreRoutes";
import type { Routes } from "../../routes/remoteStoreRoutes";

const storeType: keyof Routes = import.meta.env.VITE_REMOTE_STORE;

const addFavorites = (email: string, id: string) => {
  return async (
    dispatch: (payload: { type: string; payload: string[] }) => void,
  ) => {
    try {
      await routes[storeType].postFavorites(email, id);
      const favorites = await routes[storeType].getFavorites(email);

      dispatch({
        type: "userInfo/setFavorites",
        payload: favorites,
      });
    } catch (error) {
      console.error("add Favorites", error);
    }
  };
};

export { addFavorites };
