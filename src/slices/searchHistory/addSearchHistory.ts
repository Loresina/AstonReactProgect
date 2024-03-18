import {
  fetchPostSearchHistory,
  fetchGetSearchHistory,
} from "../../asServerApi/apiRequests";

const addSearchHistory = (email: string, searchQuery: string, date: string) => {
  return async (
    dispatch: (payload: {
      type: string;
      payload: Array<{ param: string; date: string }>;
    }) => void,
  ) => {
    try {
      await fetchPostSearchHistory(email, searchQuery, date);
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

export { addSearchHistory };
