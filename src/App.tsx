import React, { Suspense, lazy } from "react";

import { Toaster } from "react-hot-toast";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import MyErrorBoundary from "./components/ErrorBoundary";
import { Header } from "./components/pages/Header";
import { Login } from "./components/pages/SignIn";
import { Registration } from "./components/pages/SignUp";
import { Loading } from "./components/separateComponents/Loading";
import { NotFound } from "./components/separateComponents/NotFound";
import { AuthProvider } from "./context/authContext/authProvider";
import { ThemeProvider } from "./context/themeContext/themeProvider";

const FavoritesGallery = lazy(
  async () => await import("./components/pages/galleries/FavoritesGallery"),
);
const MainGallery = lazy(
  async () => await import("./components/pages/galleries/MainGallery"),
);
const SearchGallery = lazy(
  async () => await import("./components/pages/galleries/SearchGallery"),
);
const Book = lazy(
  async () => await import("./components/separateComponents/Book"),
);

const SearchHistory = lazy(
  async () => await import("./components/pages/SearchHistory"),
);

const App = (): React.JSX.Element => {
  return (
    <BrowserRouter>
      <AuthProvider>
        <ThemeProvider>
          <Toaster />
          <MyErrorBoundary>
            <Header />

            <Suspense fallback={<Loading />}>
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
            </Suspense>
          </MyErrorBoundary>
        </ThemeProvider>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
