import React, { useContext } from "react";

import logo from "../../assets/logo.svg";
import ThemeContext from "../../context/themeContext/themeContext";
import useAuth from "../../hooks/useAuth";
import { AuthNav } from "../separateComponents/headerNav/AuthNav";
import { NotAuthNav } from "../separateComponents/headerNav/NotAuthNav";
import { SearchBar } from "../separateComponents/SearchBar";

const Header = (): React.JSX.Element => {
  const { loginStatus } = useAuth();

  const { theme, toggleTheme } = useContext(ThemeContext);

  return (
    <header className="wrapper">
      <div className="container header">
        <a href="/">
          <img src={logo} className="header-logo" alt="Book logo" />
        </a>
        <SearchBar />

        <nav className="nav">{loginStatus ? <AuthNav /> : <NotAuthNav />}</nav>
        <button
          className="theme-button"
          onClick={() => {
            toggleTheme();
          }}
        >
          change theme
        </button>
      </div>
    </header>
  );
};

export { Header };
