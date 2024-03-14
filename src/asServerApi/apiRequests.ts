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

export { fetchGetUserAuth, fetchPostNewUser };
