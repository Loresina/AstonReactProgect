import { useSelector, useDispatch } from "react-redux";

import { Card } from "./Card";
import { increment } from "../../slices/firstSlice";
import type { StateBookInfo, RootState } from "../../types/dataTypes";

const Gallery = ({
  title,
  books,
}: {
  title: string;
  books: StateBookInfo[];
}): React.JSX.Element => {
  const count = useSelector((state: RootState) => state.first.value);
  const dispatch = useDispatch();

  return (
    <section className="wrapper">
      <div className="container gallery">
        <h1>{title}</h1>
        <h3>Redux Toolkit считает это</h3>

        <button onClick={() => dispatch(increment())}>count is {count}</button>

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
