import { fetchGetUserAuth } from "../../asServerApi/apiRquests";

// вопрос по типизации - описание функций из библиотеки navigate

const checkAuth = (
  email: string,
  password: string,
  logIn: () => void,
  navigate: (a: string) => void,
) => {
  return async (
    dispatch: (payload: { type: string; payload: string }) => void,
  ) => {
    try {
      await fetchGetUserAuth(email, password);
      localStorage.setItem("currentUser", "email");
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
        payload: "Sign in error: wrong email or password.",
      });
    }
  };
};

export { checkAuth };
