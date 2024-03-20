import React from "react";

import { useGetBooksQuery } from "../../../slices/bookSearchApi";
import { normData } from "../../_normData";
import { setMessage } from "../../pages/galleries/_setMessage";
import { Gallery } from "../../separateComponents/Gallery";
import { Loading } from "../../separateComponents/Loading";

const MainGallery = (): React.JSX.Element => {
  const { data, error, isLoading } = useGetBooksQuery("");

  if (isLoading) {
    return <Loading />;
  }

  const books = normData(data?.items ?? []);

  const errorMessage =
    error !== undefined && error !== null ? "something went wrong" : "";

  return (
    <Gallery
      title="This is book Gallery"
      message={setMessage("main", books, errorMessage)}
      books={books}
    />
  );
};

export default MainGallery;
