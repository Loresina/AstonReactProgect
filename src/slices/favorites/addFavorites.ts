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

      console.log("favorites", favorites);
      dispatch({
        type: "userInfo/setFavorites",
        payload: favorites,
      });
    } catch (error) {
      console.log("error");
    }
  };
};

export { addFavorites };