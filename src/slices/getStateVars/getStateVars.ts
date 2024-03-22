import type { RootState } from "../../types/dataTypes";

const getHistoryState = (
  state: RootState,
): Array<{ param: string; date: string }> => state.userInfo.searchHistory;
const getUserNameState = (state: RootState): string => state.userInfo.authName;

const getFavoritesState = (state: RootState): string[] =>
  state.userInfo.favorites;

const getSearchInputState = (state: RootState): string =>
  state.searchInput.searchInput;

const getAuthErrorState = (state: RootState): string => state.userInfo.error;

const getAuthStatus = (state: RootState): string => state.userInfo.authStatus;

export {
  getHistoryState,
  getUserNameState,
  getFavoritesState,
  getSearchInputState,
  getAuthErrorState,
  getAuthStatus,
};
