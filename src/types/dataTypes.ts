interface StateBookInfo {
  id: string;
  authors: string[];
  categories: string[];
  imageLinks: { smallThumbnail: string; thumbnail: string };
  title: string;
}

interface BooksInfo {
  id: string;
  volumeInfo: StateBookInfo;
}

interface RootState {
  first: {
    value: number;
  };
  booksInfo: {
    books: StateBookInfo[];
  };
}

export type { StateBookInfo, BooksInfo, RootState };
