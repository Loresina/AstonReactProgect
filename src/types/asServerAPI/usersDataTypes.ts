interface UserDataAPI {
  password: string;
  favorites: string[];
  searchHistory: Array<{ param: string; date: string }>;
}

type UsersAPI = Record<string, UserDataAPI>;

export type { UsersAPI, UserDataAPI };
