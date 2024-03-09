import React from "react";

// import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainGallery } from "./components/pages/mainGallery";
import { SearchGallery } from "./components/pages/searchGallery";
import { Header } from "./components/separateComponents/Header";
import { NotFound } from "./components/separateComponents/NotFound";

const App = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<MainGallery />} />
        <Route path="/search/:query" element={<SearchGallery />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
