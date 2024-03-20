import React from "react";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import heart from "../../assets/iconHeard.svg";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addFavorites } from "../../slices/favorites/addFavorites";
import type { RootState } from "../../types/dataTypes";

const LikeButton: React.FC<{ id: string }> = ({ id }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authName = useSelector((state: RootState) => state.userInfo.authName);
  const favorites: string[] = useSelector(
    (state: RootState) => state.userInfo.favorites,
  );

  const addToFavorites = (e: React.MouseEvent<HTMLButtonElement>): void => {
    e.stopPropagation();
    if (authName.length > 0) {
      void dispatch(addFavorites(authName, id));
    } else {
      navigate("/signIn");
    }
  };

  const checkFavorites = (id: string): boolean => {
    if (favorites.length > 0) {
      return favorites.includes(id);
    }
    return false;
  };

  return (
    <button
      type="button"
      className={`like-button ${checkFavorites(id) ? "red" : ""}`}
      onClick={(e) => {
        addToFavorites(e);
      }}
    >
      <img src={heart} />
    </button>
  );
};

LikeButton.propTypes = {
  id: PropTypes.string.isRequired,
};

export { LikeButton };
