import React from "react";

import { useParams } from "react-router-dom";

import { useGetBookByIdQuery } from "../../slices/bookSearchApi";
import { normDataBook } from "../_normDataBook";

const Book = (): React.JSX.Element => {
  const id = useParams().id ?? "";
  console.log("книга id", id);

  const { data, isLoading } = useGetBookByIdQuery(id);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const book = normDataBook(data);

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
            {data?.authors.length === 1
              ? book.authors
              : book.authors.map((author) => `${author},`)}
          </span>
          <span className="book-pages grid-padding">
            <b>Page count: </b>
            {book.printedPageCount}
          </span>
          <span className="book-lang grid-padding">
            <b>Language: </b>
            {book.language}
          </span>
          <span className="book-date grid-padding">
            <b>Published date: </b>
            {book.publishedDate}
          </span>
        </div>
      </div>
    </section>
  );
};

export { Book };
