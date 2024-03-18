import React from "react";

import { useParams } from "react-router-dom";

import { useGetBooksSearchQuery } from "../../slices/bookSearchApi";
import { normData } from "../_normData";
import { Gallery } from "../separateComponents/Gallery";

const SearchGallery = (): React.JSX.Element => {
  const query = useParams().query ?? "";
  const { data, isLoading } = useGetBooksSearchQuery(query);

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const books = normData(data?.items ?? []);

  return <Gallery title="Search results" books={books} />;
};

export { SearchGallery };
