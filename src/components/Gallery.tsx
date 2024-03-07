import React, { useEffect, useState } from "react";

import { useSelector, useDispatch } from "react-redux";

import { Card } from "./Card";
import { increment } from "../slices/firstSlice";

interface RootState {
  first: {
    value: number;
  };
}

interface StateBookInfo {
  id: string;
  title: string;
  authors: string[];
  description: string;
  categories: string[];
  imageLinks: { smallThumbnail: string; thumbnail: string };
}
// это временное решение размещения интерфейсов, думаю как скомпановать типы

const Gallery = (): React.JSX.Element => {
  const count = useSelector((state: RootState) => state.first.value);
  const dispatch = useDispatch();

  const [gallery, setGallery] = useState<StateBookInfo[]>([]);

  useEffect(() => {
    const key = import.meta.env.VITE_KEY;

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=${key}`,
    )
      .then(async (resp) => await resp.json())
      .then((data) => {
        const { items } = data;

        const infoBook: StateBookInfo[] = items.map(
          (item: { id: number; volumeInfo: StateBookInfo }) => {
            const { authors, description, categories, imageLinks, title } =
              item.volumeInfo;
            const { id } = item;

            return { id, authors, description, categories, imageLinks, title };
          },
        );
        console.log(infoBook);
        setGallery(infoBook);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <section className="wrapper">
      <div className="container gallery">
        <h1>It is Gallery here</h1>
        <h3>Redux Toolkit считает это</h3>
        <button onClick={() => dispatch(increment())}>count is {count}</button>
        <div className="cards">
          {gallery.map((one) => {
            return <Card key={one.id} one={one} />;
          })}
        </div>
      </div>
    </section>
  );
};

export { Gallery, type StateBookInfo };
