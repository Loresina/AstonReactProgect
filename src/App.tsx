import React from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import { Gallery } from "./components/Gallery";
import { Header } from "./components/Header";

const App: React.FC = () => {
  // const [count, setCount] = useState(0)

  return (
    <BrowserRouter>
      <Header />
      <Routes>
        <Route path="/" element={<Gallery />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
