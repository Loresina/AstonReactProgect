import React from "react";

import loading from "../../assets/loaging.gif";

const Loading = (): React.JSX.Element => {
  return (
    <div className="user-container">
      <div className="not-found">
        <img src={loading} alt="Not found" />
      </div>
    </div>
  );
};

export { Loading };
