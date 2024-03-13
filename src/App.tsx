import React from "react";

// import { useDispatch } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { MainGallery } from "./components/pages/MainGallery";
import { SearchGallery } from "./components/pages/SearchGallery";
import { Login } from "./components/pages/SignIn";
import { Registration } from "./components/pages/SignUp";
import { Header } from "./components/separateComponents/Header";
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
          <Route path="/signIn" element={<Login />} />
          <Route path="/signUp" element={<Registration />} />
          <Route path="/*" element={<NotFound />} />
        </Routes>
      </AuthProvider>
    </BrowserRouter>
  );
};

export default App;
