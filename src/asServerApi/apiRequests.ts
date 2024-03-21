import {
  type UsersAPI,
  type UserDataAPI,
} from "../types/asServerAPI/usersDataTypes";

const fetchGetUserAuth = async (
  email: string,
  password: string,
): Promise<UserDataAPI> => {
  return await new Promise((resolve, reject) => {
    const usersExist: string | null = localStorage.getItem("usersExist");
    if (usersExist === null) {
      reject(new Error("401 Unauthorized"));
      return;
    }

    const usersExistObj: UsersAPI = JSON.parse(usersExist);

    if (email in usersExistObj) {
      const user = usersExistObj[email];
      user.password === password
        ? resolve(usersExistObj[email])
        : reject(new Error("401 Unauthorized"));
    } else {
      reject(new Error("401 Unauthorized"));
    }
  });
};

const fetchPostNewUser = async (
  email: string,
  password: string,
): Promise<UserDataAPI> => {
  return await new Promise((resolve, reject) => {
    if (localStorage.getItem("usersExist") === null) {
      localStorage.setItem("usersExist", "{}");
    }

    const usersExist = localStorage.getItem("usersExist");
    if (usersExist !== null) {
      const usersExistObj: UsersAPI = JSON.parse(usersExist);

      if (email in usersExistObj) {
        reject(new Error("404 Bad"));
        return;
      }

      const newUser = {
        [email]: { password, favorites: [], searchHistory: [] },
      };

      const addNewUser = {
        ...usersExistObj,
        ...newUser,
      };
      localStorage.setItem("usersExist", JSON.stringify(addNewUser));
      resolve(newUser[email]);
    }
  });
};

const fetchGetFavorites = async (email: string): Promise<string[]> => {
  return await new Promise((resolve, reject) => {
    if (localStorage.getItem("usersExist") === null) {
      reject(new Error("401 Unauthorized"));
      return;
    }

    const usersExist = localStorage.getItem("usersExist");
    if (usersExist !== null) {
      const usersExistObj: UsersAPI = JSON.parse(usersExist);

      const favorites = usersExistObj[email].favorites;

      resolve(favorites);
    }
  });
};

const fetchPostFavorites = async (
  email: string,
  id: string,
): Promise<string> => {
  return await new Promise((resolve, reject) => {
    if (localStorage.getItem("usersExist") === null) {
      reject(new Error("401 Unauthorized"));
      return;
    }

    const usersExist = localStorage.getItem("usersExist");
    if (usersExist !== null) {
      const usersExistObj: UsersAPI = JSON.parse(usersExist);

      const favorites = usersExistObj[email].favorites;

      if (favorites.includes(id)) {
        const newFavorites = usersExistObj[email].favorites.filter(
          (item) => item !== id,
        );
        usersExistObj[email].favorites = newFavorites;
      } else {
        usersExistObj[email].favorites.push(id);
      }

      localStorage.setItem("usersExist", JSON.stringify(usersExistObj));

      resolve("201 Created");
    }
  });
};

const fetchPostSearchHistory = async (
  email: string,
  searchQuery: string,
  date: string,
): Promise<string> => {
  return await new Promise((resolve, reject) => {
    if (localStorage.getItem("usersExist") === null) {
      reject(new Error("401 Unauthorized"));
      return;
    }

    const usersExist = localStorage.getItem("usersExist");
    if (usersExist !== null) {
      const usersExistObj: UsersAPI = JSON.parse(usersExist);
      const searchHistory = usersExistObj[email].searchHistory;
      searchHistory.push({ param: searchQuery, date });

      localStorage.setItem("usersExist", JSON.stringify(usersExistObj));

      resolve("201 Created");
    }
  });
};

const fetchGetSearchHistory = async (
  email: string,
): Promise<Array<{ param: string; date: string }>> => {
  return await new Promise((resolve, reject) => {
    if (localStorage.getItem("usersExist") === null) {
      reject(new Error("401 Unauthorized"));
      return;
    }

    const usersExist = localStorage.getItem("usersExist");
    if (usersExist !== null) {
      const usersExistObj: UsersAPI = JSON.parse(usersExist);
      const searchHistory = usersExistObj[email].searchHistory;

      resolve(searchHistory);
    }
  });
};

const fetchPutSearchHistory = async (
  email: string,
  date: string,
): Promise<string> => {
  return await new Promise((resolve, reject) => {
    if (localStorage.getItem("usersExist") === null) {
      reject(new Error("401 Unauthorized"));
      return;
    }

    const usersExist = localStorage.getItem("usersExist");
    if (usersExist !== null) {
      const usersExistObj: UsersAPI = JSON.parse(usersExist);
      const searchHistory = usersExistObj[email].searchHistory;
      const newSearchHistory = searchHistory.filter(
        (item) => item.date !== date,
      );
      usersExistObj[email].searchHistory = newSearchHistory;

      localStorage.setItem("usersExist", JSON.stringify(usersExistObj));

      resolve("200 OK");
    }
  });
};

export {
  fetchGetUserAuth,
  fetchPostNewUser,
  fetchGetFavorites,
  fetchPostFavorites,
  fetchPostSearchHistory,
  fetchGetSearchHistory,
  fetchPutSearchHistory,
};
