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

      console.log("searchHistory из fetchGetSearchHistory", searchHistory);
      dispatch({
        type: "userInfo/setSearchHistory",
        payload: searchHistory,
      });
    } catch (error) {
      console.log("error");
    }
  };
};

export { removeSearchHistory };
