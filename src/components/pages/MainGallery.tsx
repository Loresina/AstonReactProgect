import React from "react";

import { normData } from "./_normData";
import { useGetBooksQuery } from "../../slices/bookSearch";
import type { BooksInfo } from "../../types/dataTypes";
import { Gallery } from "../separateComponents/Gallery";

const MainGallery = (): React.JSX.Element => {
  const { data, isLoading } = useGetBooksQuery("");

  if (isLoading) {
    return <h1>Loading...</h1>;
  }

  const items: BooksInfo[] = data.items;
  const books = normData(items);

  return <Gallery title="This is book Gallery" books={books} />;
};

export { MainGallery };
