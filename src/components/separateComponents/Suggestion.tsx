import { useGetBooksSearchQuery } from "../../slices/bookSearchApi";
import type { StateBookInfo } from "../../types/dataTypes";
import { normData } from "../_normData";

const Suggestions = ({ query }: { query: string }): React.JSX.Element => {
  const { data } = useGetBooksSearchQuery(query);

  const books = normData(data?.items ?? []);

  const openCard = (book: StateBookInfo): void => {
    console.log(book);
    // навигация на карточку книги
  };

  return (
    <div className="suggestion">
      {books.map((book, index) => (
        <div
          key={index}
          className="suggestion-item"
          onClick={() => {
            openCard(book);
          }}
        >
          <span>{book.title}</span>
        </div>
      ))}
    </div>
  );
};

export { Suggestions };
