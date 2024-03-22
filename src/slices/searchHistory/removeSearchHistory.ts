import store from "../../routes/remoteStoreRoutes";

const { putStoreHistory, getStoreHistory } = store;

const removeSearchHistory = (email: string, date: string) => {
  return async (
    dispatch: (payload: {
      type: string;
      payload: Array<{ param: string; date: string }>;
    }) => void,
  ) => {
    try {
      await putStoreHistory(email, date);
      const searchHistory = await getStoreHistory(email);

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
