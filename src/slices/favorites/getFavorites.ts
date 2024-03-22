import store from "../../routes/remoteStoreRoutes";

const { getStoreFavorites } = store;

const getFavorites = (email: string) => {
  return async (
    dispatch: (payload: { type: string; payload: string[] }) => void,
  ) => {
    try {
      const favorites = await getStoreFavorites(email);

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
