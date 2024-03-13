import { fetchPostNewUser } from "../../asServerApi/apiRquests";

const addNewUser = (
  email: string,
  password: string,
  logIn: () => void,
  navigate: (a: string) => void,
) => {
  return async (
    dispatch: (payload: { type: string; payload: string }) => void,
  ) => {
    try {
      await fetchPostNewUser(email, password);
      localStorage.setItem("currentUser", email);
      logIn();
      navigate("/");
      dispatch({
        type: "userInfo/authStatus",
        payload: "success",
      });
      // здесь же - установка favorites, searchHistory
    } catch (error) {
      dispatch({
        type: "userInfo/authStatus",
        payload: "unsuccess",
      });
      dispatch({
        type: "userInfo/setError",
        payload: "User already exist.",
      });
    }
  };
};

export { addNewUser };
