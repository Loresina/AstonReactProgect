import React, { useEffect, useState } from "react";

import { useSelector } from "react-redux";

import type { RootState, BooksInfo } from "../../types/dataTypes";
import { normData } from "../_normData";
import { Gallery } from "../separateComponents/Gallery";

const FavoritesGallery = (): React.JSX.Element => {
  const favorites = useSelector((state: RootState) => state.userInfo.favorites);

  const [items, setItems] = useState<BooksInfo[]>([]);

  const getBook = async (id: string): Promise<BooksInfo> => {
    const resp = await fetch(
      `https://www.googleapis.com/books/v1/volumes/${id}`,
    );
    const book = await resp.json();
    return book;
  };

  // здесь явная проверка typeof favorites !== "undefined", так как favorites
  // в определенный момент при загрузке приложения приходит undefined и я пока не знаю как это исправить!
  useEffect(() => {
    const fetchData = async (): Promise<void> => {
      if (typeof favorites !== "undefined") {
        try {
          const bookPromises = favorites.map(
            async (item) => await getBook(item),
          );
          const fetchedBooks = await Promise.all(bookPromises);

          setItems(fetchedBooks);
        } catch (e) {
          console.error("Error fetching books:", e);
        }
      }
    };
    void fetchData();
  }, [favorites]);

  const books = normData(items);

  return <Gallery title="Your Favorites Gallery" books={books} />;
};

export { FavoritesGallery };
