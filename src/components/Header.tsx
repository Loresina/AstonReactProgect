import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

// import viteLogo from "../../../../../../../vite.svg";
// import reactLogo from "../assets/react.svg";
import "../App.css";
import { increment } from "../slices/firstSlice";

interface RootState {
  first: {
    value: number;
  };
}
// это временное решение размещения интерфейса, думаю как все скомпановать

const Header: React.FC = () => {
  const count = useSelector((state: RootState) => state.first.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const key = import.meta.env.VITE_KEY;

    fetch(
      `https://www.googleapis.com/books/v1/volumes?q=flowers&orderBy=newest&key=${key}`,
    )
      .then(async (resp) => await resp.json())
      .then((data) => {
        console.log(data.items);
      })
      .catch((e) => {
        console.log(e);
      });
  }, []);

  return (
    <>
      <h3>Redux toolkit считает это</h3>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
      </div>
    </>
  );
};

export { Header };
