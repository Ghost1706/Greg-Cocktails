import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./Components/Navbar";
import App from "./App";
import SingleCocktail from "./Pages/SingleCocktail";
const PageRoute = () => {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="cocktail/:id" element={<SingleCocktail />} />
      </Routes>
    </Router>
  );
};

export default PageRoute;
