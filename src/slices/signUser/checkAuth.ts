import store from "../../routes/remoteStoreRoutes";

const { getStoreUserAuth } = store;

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
      await getStoreUserAuth(email, password);
      localStorage.setItem("currentUser", email);
      logIn();
      navigate("/");
      dispatch({ type: "userInfo/authStatus", payload: "success" });
      dispatch({ type: "userInfo/setName", payload: email });
    } catch (error) {
      dispatch({ type: "userInfo/authStatus", payload: "unsuccess" });
      dispatch({
        type: "userInfo/setError",
        payload: "Sign in error: wrong email or password.",
      });
    }
  };
};

export { checkAuth };
