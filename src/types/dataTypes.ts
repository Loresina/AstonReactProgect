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

export type { StateBookInfo, BooksInfo, RootState, CardProps };
