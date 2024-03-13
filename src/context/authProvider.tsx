import React, { useMemo, useState } from "react";

import AuthContext from "./authContext";

const AuthProvider = ({
  children,
}: {
  children: React.ReactNode;
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

  const memoizedValue = useMemo(
    () => ({ logStatus, logIn, logOut }),
    [logStatus, logIn, logOut],
  );

  return (
    <AuthContext.Provider value={memoizedValue}>
      {children}
    </AuthContext.Provider>
  );
};

export { AuthProvider };
