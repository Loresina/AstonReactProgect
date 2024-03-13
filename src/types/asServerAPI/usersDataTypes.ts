interface UserDataAPI {
  password: string;
  favorites: string[];
  searchHistory: string[];
}

type UsersAPI = Record<string, UserDataAPI>;

export type { UsersAPI, UserDataAPI };
