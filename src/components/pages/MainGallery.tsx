import React from "react";

import { useGetBooksQuery } from "../../slices/bookSearchApi";
import { normData } from "../_normData";
import { Gallery } from "../separateComponents/Gallery";

const MainGallery = (): React.JSX.Element => {
  const { data, isLoading } = useGetBooksQuery("");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const books = normData(data?.items ?? []);

  return <Gallery title="This is book Gallery" books={books} />;
};

export { MainGallery };
