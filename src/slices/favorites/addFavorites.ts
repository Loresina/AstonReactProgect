import store from "../../routes/remoteStoreRoutes";

const { postStoreFavorites, getStoreFavorites } = store;

const addFavorites = (email: string, id: string) => {
  return async (
    dispatch: (payload: { type: string; payload: string[] }) => void,
  ) => {
    try {
      await postStoreFavorites(email, id);
      const favorites = await getStoreFavorites(email);

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
