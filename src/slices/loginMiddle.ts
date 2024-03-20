import { createListenerMiddleware } from "@reduxjs/toolkit";
import toast from "react-hot-toast";

import { setError } from "../slices/usersDataSlice";

const loginMiddle = createListenerMiddleware();

loginMiddle.startListening({
  actionCreator: setError,
  effect: (action) => {
    const message: string = action.payload;
    toast.error(message);
  },
});

export { loginMiddle };
