import React, { useRef, useEffect, useState } from "react";

import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";

import { AuthNav } from "./headerNav/AuthNav";
import { NotAuthNav } from "./headerNav/NotAuthNav";
import search from "../../assets/iconSearch.svg";
import logo from "../../assets/logo.svg";
import { useAppDispatch } from "../../hooks/useAppDispatch";
import useAuth from "../../hooks/useAuth";
import { addSearchHistory } from "../../slices/searchHistory/addSearchHistory";
import type { RootState } from "../../types/dataTypes";

const Header = (): React.JSX.Element => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [inputValue, setInputValue] = useState("");
  const authName = useSelector((state: RootState) => state.userInfo.authName);
  const inputFocus = useRef<HTMLInputElement>(null);

  const { logStatus } = useAuth();

  const login = localStorage.getItem("currentUser");

  console.log("logStatus из Head =>", logStatus, "currentUser =>", login);

  useEffect(() => {
    if (inputFocus.current !== null) {
      inputFocus.current.focus();
    }
  }, []);

  const searchFilling = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setInputValue(e.target.value);
    // здесь должна быть реакция на ввод (подсказка допустимых значений)
    // пока не знаю как сделать
  };

  const searchSubmit = (e: React.SyntheticEvent): void => {
    e.preventDefault();

    if (authName.length > 0) {
      const searchDate = new Date();
      const date = `${searchDate.toTimeString().slice(0, 8)},
      ${searchDate.toLocaleDateString("en-US", {
        weekday: "long",
        month: "long",
        day: "numeric",
        year: "numeric",
      })}`;
      void dispatch(addSearchHistory(authName, inputValue, date));
    }

    navigate(`/search/${encodeURIComponent(inputValue)}`);
  };

  return (
    <header className="wrapper">
      <div className="container header">
        <a href="/">
          <img src={logo} className="header-logo" alt="Book logo" />
        </a>

        <form className="search" onSubmit={searchSubmit}>
          <button type="submit" className="submit-button">
            <img src={search} />
          </button>
          <label htmlFor="searchTitle">Start searching</label>
          <input
            id="searchTitle"
            name="searchTitle"
            type="text"
            onChange={searchFilling}
            value={inputValue}
            ref={inputFocus}
            placeholder="Start searching"
          />
        </form>

        <nav className="nav">{logStatus ? <AuthNav /> : <NotAuthNav />}</nav>
        {/* 
        <button>Day/Night</button> */}
      </div>
    </header>
  );
};

export { Header };
