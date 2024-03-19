import type { OneBookInfo } from "../types/dataTypes";

const normDataBook = (item: OneBookInfo): OneBookInfo => {
  const {
    authors,
    imageLinks,
    title,
    description,
    language,
    printedPageCount,
    publishedDate,
  } = item;

  const currentAuthors = authors ?? ["author not specified"];

  const currentTitle = title ?? "no title";

  const сurrentImageLinks = imageLinks ?? {
    smallThumbnail: "",
    thumbnail: "",
  };

  const currentDescription = description ?? "no description";
  const currentLanguage = language ?? "language not specified";
  const currentPrintedPageCount = printedPageCount ?? "no page count";
  const currentPublishedDate = publishedDate ?? "no   publishedDate,";

  return {
    authors: currentAuthors,
    imageLinks: сurrentImageLinks,
    title: currentTitle,
    description: currentDescription,
    language: currentLanguage,
    printedPageCount: currentPrintedPageCount,
    publishedDate: currentPublishedDate,
  };
};

export { normDataBook };
