import type { StateBookInfo, BooksInfo } from "../types/dataTypes";

const normData = (items: BooksInfo[]): StateBookInfo[] => {
  const infoBook = items.map((item: BooksInfo) => {
    const { authors, imageLinks, title } = item.volumeInfo;
    const { id } = item;

    const currentAuthors = authors ?? ["автор не указан"];

    const currentTitle = title ?? "нет названия";

    const сurrentImageLinks = imageLinks ?? {
      smallThumbnail: "",
    };

    return {
      id,
      authors: currentAuthors,
      imageLinks: сurrentImageLinks,
      title: currentTitle,
    };
  });
  return infoBook;
};

export { normData };
