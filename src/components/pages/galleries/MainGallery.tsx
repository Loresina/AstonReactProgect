import React from "react";

import { useGetBooksQuery } from "../../../slices/bookSearchApi";
import { normData } from "../../_normData";
import { setMessage } from "../../pages/galleries/_setMessage";
import { Gallery } from "../../separateComponents/Gallery";

const MainGallery = (): React.JSX.Element => {
  const { data, error, isLoading } = useGetBooksQuery("");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const books = normData(data?.items ?? []);

  const errorMessage =
    error !== undefined && error !== null ? "something war wrong" : "";

  return (
    <Gallery
      title="This is book Gallery"
      message={setMessage("main", books, errorMessage)}
      books={books}
    />
  );
};

export { MainGallery };
