import React from "react";

import { useParams } from "react-router-dom";

import { useGetBookByIdQuery } from "../../slices/bookSearchApi";

const Book = (): React.JSX.Element => {
  const id = useParams().id ?? "";
  console.log("книга id", id);

  const { data, isLoading } = useGetBookByIdQuery(id);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  return (
    <section className="wrapper">
      <div className="container">
        <div className="book">
          <h1 className="book-title">{data?.title} </h1>
          <img
            src={data?.imageLinks.thumbnail}
            className="book-img"
            alt="Book cover"
          />
          <span className="book-description grid-padding">
            {data?.description}
          </span>
          <span className="book-authors grid-padding">
            <b>Authors: </b>
            {data?.authors.length === 1
              ? data.authors
              : data?.authors.map((author) => `${author},`)}
          </span>
          <span className="book-pages grid-padding">
            <b>Page count: </b>
            {data?.printedPageCount}
          </span>
          <span className="book-lang grid-padding">
            <b>Language: </b>
            {data?.language}
          </span>
          <span className="book-date grid-padding">
            <b>Published date: </b>
            {data?.publishedDate}
          </span>
        </div>
      </div>
    </section>
  );
};

export { Book };
