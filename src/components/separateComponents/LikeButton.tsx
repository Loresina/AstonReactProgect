import React from "react";

import PropTypes from "prop-types";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import heart from "../../assets/iconHeard.svg";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import { addFavorites } from "../../slices/favorites/addFavorites";
import {
  getFavoritesState,
  getUserNameState,
} from "../../slices/getStateVars/getStateVars";

const LikeButton: React.FC<{ id: string }> = ({ id }) => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const authName = useSelector(getUserNameState);
  const favorites: string[] = useSelector(getFavoritesState);

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
