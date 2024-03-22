import store from "../../routes/remoteStoreRoutes";

const { postStoreHistory, getStoreHistory } = store;

const addSearchHistory = (email: string, searchQuery: string, date: string) => {
  return async (
    dispatch: (payload: {
      type: string;
      payload: Array<{ param: string; date: string }>;
    }) => void,
  ) => {
    try {
      await postStoreHistory(email, searchQuery, date);
      const searchHistory = await getStoreHistory(email);

      dispatch({
        type: "userInfo/setSearchHistory",
        payload: searchHistory,
      });
    } catch (error) {
      console.error("add Search History", error);
    }
  };
};

export { addSearchHistory };
