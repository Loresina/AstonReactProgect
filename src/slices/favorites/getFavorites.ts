import { fetchGetFavorites } from "../../asServerApi/apiRequests";

const getFavorites = (email: string) => {
  return async (
    dispatch: (payload: { type: string; payload: string[] }) => void,
  ) => {
    try {
      const favorites = await fetchGetFavorites(email);

      dispatch({
        type: "userInfo/setFavorites",
        payload: favorites,
      });
    } catch (error) {
      console.log("error");
    }
  };
};

export { getFavorites };
