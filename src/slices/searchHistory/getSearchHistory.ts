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

      console.log("!!!!!!searchHistory из Thunk", searchHistory);

      dispatch({
        type: "userInfo/setSearchHistory",
        payload: searchHistory,
      });
    } catch (error) {
      console.log("error");
    }
  };
};

export { getSearchHistory };
