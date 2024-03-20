import { Card } from "./Card";
import type { StateBookInfo } from "../../types/dataTypes";

const Gallery = ({
  title,
  message,
  books,
}: {
  title: string;
  message: string;
  books: StateBookInfo[];
}): React.JSX.Element => {
  return (
    <section className="wrapper">
      <div className="container gallery">
        <div>
          <h1>{title}</h1>
        </div>

        <div>
          <h2>{message}</h2>
        </div>

        <div className="cards">
          {books.map((one) => {
            return <Card key={one.id} one={one} />;
          })}
        </div>
      </div>
    </section>
  );
};

export { Gallery };
