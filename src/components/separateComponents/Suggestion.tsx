import { useGetBooksSearchQuery } from "../../slices/bookSearchApi";
import { normData } from "../_normData";

const Suggestions = ({
  query,
  openBook,
}: {
  query: string;
  openBook: (id: string) => void;
  setIsSuggestions: (isSuggestions: boolean) => void;
}): React.JSX.Element => {
  const { data } = useGetBooksSearchQuery(query);

  const books = normData(data?.items ?? []);

  return (
    <div className="suggestion">
      {books.map((book, index) => (
        <div
          key={index}
          className="suggestion-item"
          onClick={() => {
            openBook(book.id);
          }}
        >
          <span>{book.title}</span>
        </div>
      ))}
    </div>
  );
};

export { Suggestions };
