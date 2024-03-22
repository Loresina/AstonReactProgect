import { routes } from "../../routes/remoteStoreRoutes";
import type { Routes } from "../../routes/remoteStoreRoutes";

const storeType: keyof Routes = import.meta.env.VITE_REMOTE_STORE;

const addNewUser =
  (
    email: string,
    password: string,
    logIn: () => void,
    navigate: (a: string) => void,
  ) =>
  async (dispatch: (payload: { type: string; payload: string }) => void) => {
    try {
      await routes[storeType].postNewUser(email, password);
      localStorage.setItem("currentUser", email);
      logIn();
      navigate("/");
      dispatch({
        type: "userInfo/authStatus",
        payload: "success",
      });
      dispatch({
        type: "userInfo/setName",
        payload: email,
      });
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

export { addNewUser };
