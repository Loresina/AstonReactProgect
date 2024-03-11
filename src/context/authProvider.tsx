import React, { useMemo, useState } from "react";

import AuthContext from "./authContext";

const AuthProvider = ({
  children,
}: {
  children: React.JSX.Element;
}): React.JSX.Element => {
  const login = localStorage.getItem("currentUser");
  const [logStatus, setLogin] = useState(Boolean(login));
  const logIn = (): void => {
    setLogin(true);
  };
  const logOut = (): void => {
    localStorage.removeItem("currentUser");
    setLogin(false);
  };

  return (
    <AuthContext.Provider
      value={useMemo(
        () => ({ logStatus, logIn, logOut }),
        [logStatus, logIn, logOut],
      )}
    >
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
