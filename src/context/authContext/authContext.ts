import { createContext } from "react";

import type { AuthContType } from "../../types/contextTypes";

const AuthContext = createContext<AuthContType>({
  logStatus: false,
  logIn: () => {},
  logOut: () => {},
});

export default AuthContext;
