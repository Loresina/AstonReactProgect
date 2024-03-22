import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import { setMessage } from "./_setMessage";
import getBookRoute from "../../../routes/getBookRoute";
import { getFavoritesState } from "../../../slices/getStateVars/getStateVars";
import type { BooksInfo } from "../../../types/dataTypes";
import { normData } from "../../_normData";
import { Gallery } from "../../separateComponents/Gallery";
import { Loading } from "../../separateComponents/Loading";

const FavoritesGallery = (): React.JSX.Element => {
  const favorites = useSelector(getFavoritesState);

  const [items, setItems] = useState<BooksInfo[]>([]);
  const [error, setError] = useState<string>("");
  const [isLoading, setLoading] = useState<boolean>(true);

  const getBook = async (id: string): Promise<BooksInfo> => {
    const resp = await fetch(`${getBookRoute}${id}`);
    const book = await resp.json();
    return book;
  };

  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      try {
        const bookPromises = favorites.map(async (item) => await getBook(item));
        const fetchedBooks = await Promise.all(bookPromises);

        setItems(fetchedBooks);
        setLoading(false);
      } catch (e) {
        setError("error");
        setLoading(false);
      }
    };
    void fetchData();
  }, [favorites, error]);

  if (isLoading) {
    return <Loading />;
  }

  const books = normData(items);

  const errorMessage = error.length > 0 ? "something went wrong" : "";

  return (
    <Gallery
      title="Your Favorites Gallery"
      message={setMessage("favorites", books, errorMessage)}
      books={books}
    />
  );
};

export default FavoritesGallery;
