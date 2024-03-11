import React from "react";

const AuthNav = (): React.JSX.Element => {
  return (
    <>
      <a href="./favorites">Favorites</a>
      <a href="./searchHistory">Search History</a>
      <button>Logout</button>
    </>
  );
};

export { AuthNav };
