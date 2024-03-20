import { fetchGetSearchHistory } from "../../asServerApi/apiRequests";

const getSearchHistory = (email: string) => {
  return async (
    dispatch: (payload: {
      type: string;
      payload: Array<{ param: string; date: string }>;
    }) => void,
  ) => {
    try {
      const searchHistory = await fetchGetSearchHistory(email);

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
