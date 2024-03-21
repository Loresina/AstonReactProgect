import {
  fetchPostFavorites,
  fetchGetFavorites,
} from "../../asServerApi/apiRequests";

const addFavorites = (email: string, id: string) => {
  return async (
    dispatch: (payload: { type: string; payload: string[] }) => void,
  ) => {
    try {
      await fetchPostFavorites(email, id);
      const favorites = await fetchGetFavorites(email);

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
