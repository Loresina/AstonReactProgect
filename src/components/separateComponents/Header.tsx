import React, { useRef, useEffect, useState } from "react";

import { useNavigate } from "react-router-dom";

import logo from "../../assets/logo.svg";

const Header: React.FC = () => {
  const [inputValue, setInputValue] = useState("");
  const inputFocus = useRef<HTMLInputElement>(null);
  const navigate = useNavigate();

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
    navigate(`/search/${encodeURIComponent(inputValue)}`);
    // здесь должно быть сохранение в историю поиска
  };

  return (
    <header className="wrapper">
      <div className="container header">
        <a href="./">
          <img src={logo} className="header_logo" alt="Book logo" />
        </a>

        <form className="search" onSubmit={searchSubmit}>
          <button type="submit" className="submit-button">
            <svg width="20" height="20">
              <path
                d="m19.026 17.05-3.71-3.7c1.002-1.3 1.704-3 1.704-4.9 0-4.4-3.61-8-8.023-8C4.585.45.975 4.15.975 8.55c0 4.4 3.61 8 8.022 8 1.805 0 3.51-.6 4.914-1.7l3.71 3.7 1.405-1.5Zm-10.029-2.5c-3.309 0-6.017-2.7-6.017-6s2.708-6 6.017-6c3.31 0 6.017 2.7 6.017 6s-2.707 6-6.017 6Z"
                fill="#000"
              />
            </svg>
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

        {/* это должен быть компонент nav и должен зависеть от условий авторизации. Где это проверять? Может прямо здесь? */}

        <nav className="nav">
          <a href="./login">Login</a>
          <a href="./registration">Registration</a>
        </nav>

        <button>Day/Night</button>
      </div>
    </header>
  );
};

export { Header };
