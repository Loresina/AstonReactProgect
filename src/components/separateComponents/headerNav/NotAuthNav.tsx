import React from "react";

const NotAuthNav = (): React.JSX.Element => {
  return (
    <>
      <a href="/signIn">Sign in</a>
      <a href="/signUp">Sign up</a>
    </>
  );
};

export { NotAuthNav };
