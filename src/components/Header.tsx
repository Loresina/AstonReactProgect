import React from "react";

import bookLogo from "../assets/react.svg";

const Header: React.FC = () => {
  return (
    <header className="wrapper">
      <div className="container header">
        <a href="./" target="_blank" rel="noreferrer">
          <img src={bookLogo} className="header_logo" alt="Book logo" />
        </a>

        <input></input>

        {/* это должен быть компонент nav и должен зависеть от условий авторизации. Где это проверять? Может прямо здесь? */}

        <nav className="nav">
          <a href="./" target="_blank" rel="noreferrer">
            Login
          </a>
          <a href="./" target="_blank" rel="noreferrer">
            Registration
          </a>
        </nav>

        <button>Day/Night</button>
      </div>
    </header>
  );
};

export { Header };
