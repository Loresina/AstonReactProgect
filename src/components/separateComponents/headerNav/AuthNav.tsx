import React from "react";

import useAuth from "../../../hooks/useAuth";

const AuthNav = (): React.JSX.Element => {
  const { logOut } = useAuth();
  return (
    <>
      <a href="/favorites">Favorites</a>
      <a href="/searchHistory">Search history</a>
      <button
        onClick={() => {
          logOut();
        }}
      >
        Logout
      </button>
    </>
  );
};

export { AuthNav };
