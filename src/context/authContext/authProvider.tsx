import React, { useMemo, useState } from "react";

import AuthContext from "./authContext";

const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
}): React.JSX.Element => {
  const login = localStorage.getItem("currentUser");
  const [loginStatus, setLogin] = useState(Boolean(login));
  const logIn = (): void => {
    setLogin(true);
  };
  const logOut = (): void => {
    localStorage.removeItem("currentUser");
    setLogin(false);
  };

  const memoizedValue = useMemo(
    () => ({ loginStatus, logIn, logOut }),
    [loginStatus, logIn, logOut],
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
