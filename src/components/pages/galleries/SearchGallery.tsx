import React, { useEffect } from "react";

import { useParams } from "react-router-dom";

import { setMessage } from "./_setMessage";
import { useAppDispatch } from "../../../hooks/useAppDispatch";
import { useGetBooksSearchQuery } from "../../../slices/bookSearchApi";
import { setSearchInput } from "../../../slices/inputSlice";
import { normData } from "../../_normData";
import { Gallery } from "../../separateComponents/Gallery";
import { Loading } from "../../separateComponents/Loading";

const SearchGallery = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const query = useParams().query ?? "";
  const { data, error, isLoading } = useGetBooksSearchQuery(query);

  useEffect(() => {
    dispatch(setSearchInput(query));
  }, [query]);

  if (isLoading) {
    return <Loading />;
  }

  const books = normData(data?.items ?? []);

  const errorMessage =
    error !== undefined && error !== null ? "something went wrong" : "";

  return (
    <Gallery
      title="Search results"
      books={books}
      message={setMessage("search", books, errorMessage)}
    />
  );
};

export default SearchGallery;
