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

// здесь (во всеч функциях этого можуля) линтер не даёт мне вернуть промис просто из функции,
// заставляет обернуть его в async/ await
// ничего не пишет, просто сам подставляет  async/ await !

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
): Promise<string[]> => {
  return await new Promise((resolve, reject) => {
    if (localStorage.getItem("usersExist") === null) {
      reject(new Error("401 Unauthorized"));
      return;
    }

    const usersExist = localStorage.getItem("usersExist");
    if (usersExist !== null) {
      const usersExistObj: UsersAPI = JSON.parse(usersExist);

      console.log("Я в  fetchPostFavorites", email, usersExistObj);

      const favorites = usersExistObj[email].favorites;

      if (favorites.includes(id)) {
        console.log("Это уже есть, удаляем");
        const newFavorites = usersExistObj[email].favorites.filter(
          (item) => item !== id,
        );
        usersExistObj[email].favorites = newFavorites;
      } else {
        usersExistObj[email].favorites.push(id);
      }

      console.log("usersExistObj", usersExistObj);

      localStorage.setItem("usersExist", JSON.stringify(usersExistObj));

      resolve(usersExistObj[email].favorites);
    }
  });
};

export {
  fetchGetUserAuth,
  fetchPostNewUser,
  fetchGetFavorites,
  fetchPostFavorites,
};
