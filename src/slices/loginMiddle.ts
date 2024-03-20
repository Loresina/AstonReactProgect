import { createListenerMiddleware } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import { setError } from "../slices/usersDataSlice";

const loginMiddle = createListenerMiddleware();

loginMiddle.startListening({
  actionCreator: setError,
  effect: (action) => {
    toast.error(action.payload);
  },
});

export { loginMiddle };
