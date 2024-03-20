import React from "react";

import logo from "../../assets/logo.svg";
import useAuth from "../../hooks/useAuth";
import { AuthNav } from "../separateComponents/headerNav/AuthNav";
import { NotAuthNav } from "../separateComponents/headerNav/NotAuthNav";
import { SearchBar } from "../separateComponents/SearchBar";

const Header = (): React.JSX.Element => {
  const { logStatus } = useAuth();

  // const login = localStorage.getItem("currentUser");
  // console.log("logStatus из Head =>", logStatus, "currentUser =>", login);

  return (
    <header className="wrapper">
      <div className="container header">
        <a href="/">
          <img src={logo} className="header-logo" alt="Book logo" />
        </a>
        <SearchBar />

        <nav className="nav">{logStatus ? <AuthNav /> : <NotAuthNav />}</nav>
        {/* 
        <button>Day/Night</button> */}
      </div>
    </header>
  );
};

export { Header };
