interface StateBookInfo {
  id: string;
  authors: string[];
  imageLinks: { smallThumbnail: string; thumbnail: string };
  title: string;
}

interface OneBookInfo {
  authors: string[];
  imageLinks: { smallThumbnail: string };
  title: string;
  description: string;
  language: string;
  printedPageCount: number;
  publishedDate: string;
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
  userInfo: {
    favorites: string[];
    searchHistory: Array<{ param: string; date: string }>;
    authStatus: string;
    authName: string;
    error: string;
  };
}

interface CardProps {
  one: StateBookInfo;
}

export type { StateBookInfo, BooksInfo, OneBookInfo, RootState, CardProps };
