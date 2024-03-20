import type { OneBookInfo } from "../types/dataTypes";

const normDataBook = (item: Partial<OneBookInfo>): OneBookInfo => {
  const currentAuthors = item.authors ?? ["author not specified"];

  const currentTitle = item.title ?? "no title";

  const сurrentImageLinks = item.imageLinks ?? {
    smallThumbnail: "",
    thumbnail: "",
  };

  const currentDescription = item.description ?? "no description";
  const currentLanguage = item.language ?? "language not specified";
  const currentPrintedPageCount = item.printedPageCount ?? 0;
  const currentPublishedDate = item.publishedDate ?? "no   publishedDate,";

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
