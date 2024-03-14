import type { StateBookInfo, BooksInfo } from "../../types/dataTypes";

const normData = (items: BooksInfo[]): StateBookInfo[] => {
  const infoBook = items.map((item: BooksInfo) => {
    const { authors, categories, imageLinks, title } = item.volumeInfo;
    const { id } = item;

    const currentAuthors = authors ?? ["автор не указан"];

    const currentTitle = title ?? "нет названия";

    const сurrentСategories = categories ?? ["нет катогорий"];

    const сurrentImageLinks = imageLinks ?? {
      smallThumbnail: "",
      thumbnail: "",
    };

    return {
      id,
      authors: currentAuthors,
      categories: сurrentСategories,
      imageLinks: сurrentImageLinks,
      title: currentTitle,
    };
  });
  return infoBook;
};

export { normData };
