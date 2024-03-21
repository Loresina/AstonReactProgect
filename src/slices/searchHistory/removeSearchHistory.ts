import {
  fetchPutSearchHistory,
  fetchGetSearchHistory,
} from "../../asServerApi/apiRequests";

const removeSearchHistory = (email: string, date: string) => {
  return async (
    dispatch: (payload: {
      type: string;
      payload: Array<{ param: string; date: string }>;
    }) => void,
  ) => {
    try {
      await fetchPutSearchHistory(email, date);
      const searchHistory = await fetchGetSearchHistory(email);

      dispatch({
        type: "userInfo/setSearchHistory",
        payload: searchHistory,
      });
    } catch (error) {
      console.error("remove Search History", error);
    }
  };
};

export { removeSearchHistory };
