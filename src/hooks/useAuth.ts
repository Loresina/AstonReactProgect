import { useContext } from "react";

import AuthContext from "../context/authContext";
import { type AuthContType } from "../types/contextTypes";

const useAuth = (): AuthContType => useContext(AuthContext);

export default useAuth;
