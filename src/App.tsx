import React from "react";

// import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Login } from "./components/pages/Login";
import { MainGallery } from "./components/pages/MainGallery";
import { Registration } from "./components/pages/Registration";
import { SearchGallery } from "./components/pages/SearchGallery";
import { Header } from "./components/separateComponents/Header";
import { NotFound } from "./components/separateComponents/NotFound";

const App = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <div className="wrap">
        <Routes>
          <Route path="/" element={<MainGallery />} />
          <Route path="/search/:query" element={<SearchGallery />} />
          <Route path="/login" element={<Login />} />
          <Route path="/registration" element={<Registration />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
};

export default App;
