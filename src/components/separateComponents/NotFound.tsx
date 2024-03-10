import React from "react";

import notfound from "../../assets/notfound.svg";

const NotFound = (): React.JSX.Element => {
  return (
    <div className="user-container">
      <div className="not-found">
        <h1>Page not Found</h1>
        <img src={notfound} alt="Not found" />
      </div>
    </div>
  );
};

export { NotFound };
