import React from "react";

import { useSelector } from "react-redux";

import heart from "../../assets/iconHeard.svg";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addFavorites } from "../../slices/favorites/addFavorites";
import type { CardProps, RootState } from "../../types/dataTypes";

const Card = ({ one }: CardProps): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const authName = useSelector((state: RootState) => state.userInfo.authName);
  const favorites: string[] = useSelector(
    (state: RootState) => state.userInfo.favorites,
  );

  const addToFavorites = (): void => {
    console.log("authName", authName, "bookId", one.id);
    void dispatch(addFavorites(authName, one.id));
  };

  const checkFavorites = (id: string): boolean => {
    if (favorites.length > 0) {
      return favorites.includes(id);
    }
    return false;
  };

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

      <button
        type="button"
        className={`like-button ${checkFavorites(one.id) ? "red" : ""}`}
        onClick={addToFavorites}
      >
        <img src={heart} />
      </button>
    </div>
  );
};

export { Card };
