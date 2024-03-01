import React, { useEffect } from "react";

import { useSelector, useDispatch } from "react-redux";

import viteLogo from "../../../../../../../vite.svg";
import reactLogo from "../assets/react.svg";

import "../App.css";

import { increment } from "../slices/firstSlice";

const Header: React.FC = () => {
  const count = useSelector((state) => state.first.value);
  const dispatch = useDispatch();

  useEffect(() => {
    const key = import.meta.env.VITE_KEY;
    console.log("hi");

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
      <div>
        <a href="https://vitejs.dev" target="_blank" rel="noreferrer">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank" rel="noreferrer">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h3>Redux toolkit считает это</h3>
      <div className="card">
        <button onClick={() => dispatch(increment())}>count is {count}</button>
      </div>
    </>
  );
};

export { Header };
