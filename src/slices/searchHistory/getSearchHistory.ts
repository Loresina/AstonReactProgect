import store from "../../routes/remoteStoreRoutes";

const { getStoreHistory } = store;

const getSearchHistory = (email: string) => {
  return async (
    dispatch: (payload: {
      type: string;
      payload: Array<{ param: string; date: string }>;
    }) => void,
  ) => {
    try {
      const searchHistory = await getStoreHistory(email);

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
