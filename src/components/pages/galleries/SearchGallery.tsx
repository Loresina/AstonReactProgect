import React from "react";

import { useParams } from "react-router-dom";

import { setMessage } from "./_setMessage";
import { useGetBooksSearchQuery } from "../../../slices/bookSearchApi";
import { normData } from "../../_normData";
import { Gallery } from "../../separateComponents/Gallery";

const SearchGallery = (): React.JSX.Element => {
  const query = useParams().query ?? "";
  const { data, error, isLoading } = useGetBooksSearchQuery(query);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const books = normData(data?.items ?? []);

  const errorMessage =
    error !== undefined && error !== null ? "something war wrong" : "";

  return (
    <Gallery
      title="Search results"
      books={books}
      message={setMessage("search", books, errorMessage)}
    />
  );
};

export { SearchGallery };
