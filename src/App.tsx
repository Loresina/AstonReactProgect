import React from "react";

// import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// import MyErrorBoundary from "./components/ErrorBoundary";
import { FavoritesGallery } from "./components/pages/galleries/FavoritesGallery";
import { MainGallery } from "./components/pages/galleries/MainGallery";
import { SearchGallery } from "./components/pages/galleries/SearchGallery";
import { Header } from "./components/pages/Header";
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
        {/* <MyErrorBoundary> */}
        <Header />
        {/* </MyErrorBoundary> */}
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
