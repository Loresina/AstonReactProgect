import type { StateBookInfo, BooksInfo } from "../../types/dataTypes";

const normData = (items: BooksInfo[]): StateBookInfo[] => {
  const infoBook = items.map((item: BooksInfo) => {
    const { authors, categories, imageLinks, title } = item.volumeInfo;
    const { id } = item;

    const currentAuthors =
      typeof authors === "undefined" ? ["автор не указан"] : authors;

    const currentTitle = typeof title === "undefined" ? "нет названия" : title;

    const сurrentСategories =
      typeof categories === "undefined" ? ["нет катогорий"] : categories;

    const сurrentImageLinks =
      typeof imageLinks === "undefined"
        ? { smallThumbnail: "", thumbnail: "" }
        : imageLinks;

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
