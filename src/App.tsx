import React from "react";

// import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { FavoritesGallery } from "./components/pages/FavoritesGallery";
import { Header } from "./components/pages/Header";
import { MainGallery } from "./components/pages/MainGallery";
import { SearchGallery } from "./components/pages/SearchGallery";
import { SearchHistory } from "./components/pages/SearchHistory";
import { Login } from "./components/pages/SignIn";
import { Registration } from "./components/pages/SignUp";
import { Book } from "./components/separateComponents/Book";
import { NotFound } from "./components/separateComponents/NotFound";
import { AuthProvider } from "./context/authProvider";

const App = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <Header />

        <Routes>
          <Route path="/" element={<MainGallery />} />
          <Route path="/search/:query" element={<SearchGallery />} />
          <Route path="/book/:id" element={<Book />} />
          <Route path="/signIn" element={<Login />} />
          <Route path="/signUp" element={<Registration />} />
          <Route path="/favorites" element={<FavoritesGallery />} />
          <Route path="/searchHistory" element={<SearchHistory />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
