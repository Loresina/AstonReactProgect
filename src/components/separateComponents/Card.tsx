import React from "react";

import type { StateBookInfo } from "./Gallery";

interface CardProps {
  one: StateBookInfo;
}
// это временное решение размещения интерфейсов, думаю как скомпановать типы

const Card = ({ one }: CardProps): React.JSX.Element => {
  return (
    <div className="card">
      <div className="img">
        <img src={one.imageLinks.smallThumbnail}></img>
      </div>

      <div className="description">
        <span>
          <b>Title:</b> {one.title}
        </span>
        <span>
          <b>Authors:</b>{" "}
          {one.authors.reduce(
            (string, author) => `${string}, ${author}`,
            one.authors[0],
          )}
        </span>
      </div>
    </div>
  );
};

export { Card };
