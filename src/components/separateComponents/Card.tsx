import React from "react";

import PropTypes from "prop-types";
import { useNavigate } from "react-router-dom";

import { LikeButton } from "./LikeButton";
import type { CardProps } from "../../types/dataTypes";

const Card: React.FC<CardProps> = ({ one }) => {
  const navigate = useNavigate();

  const navigateCurrentBook = (id: string): void => {
    navigate(`/book/${encodeURIComponent(id)}`);
  };

  return (
    <div
      className="card"
      onClick={() => {
        navigateCurrentBook(one.id);
      }}
    >
      <div className="img">
        <img src={one.imageLinks.smallThumbnail} alt="Book cover"></img>
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

      <LikeButton id={one.id} />
    </div>
  );
};

Card.propTypes = {
  one: PropTypes.shape({
    id: PropTypes.string.isRequired,
    authors: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
    imageLinks: PropTypes.shape({
      smallThumbnail: PropTypes.string.isRequired,
    }).isRequired,
    title: PropTypes.string.isRequired,
  }).isRequired,
};

export { Card };
