import React from "react";

import { useParams } from "react-router-dom";

import { LikeButton } from "./LikeButton";
import { Loading } from "./Loading";
import { useGetBookByIdQuery } from "../../slices/bookSearchApi";
import { normDataBook } from "../_normDataBook";

const Book = (): React.JSX.Element => {
  const id = useParams().id ?? "";

  const { data, error, isLoading } = useGetBookByIdQuery(id);

  if (isLoading) {
    return <Loading />;
  }

  if (error !== undefined) {
    return (
      <section className="wrapper">
        <div className="container">
          <h2>something was wrong</h2>
        </div>
      </section>
    );
  }

  const book = normDataBook(data ?? {});

  return (
    <section className="wrapper">
      <div className="container">
        <div className="book">
          <h1 className="book-title">{book.title} </h1>
          <img
            src={book.imageLinks.thumbnail}
            className="book-img"
            alt="Book cover"
          />
          <span className="book-description grid-padding">
            {book.description}
          </span>
          <span className="book-authors grid-padding">
            <b>Authors: </b>
            {book.authors.length === 1
              ? book.authors
              : book.authors.map((author) => `${author}, `)}
          </span>
          <div className="book-like">
            <LikeButton id={id} />
          </div>
          <span className="book-pages grid-padding">
            <b>Page count: </b>
            {book.printedPageCount}
          </span>
          <div className="book-lang-date grid-padding">
            <span>
              <b>Language: </b>
              {book.language}
            </span>
            <span>
              <b>Published date: </b>
              {book.publishedDate}
            </span>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Book;
