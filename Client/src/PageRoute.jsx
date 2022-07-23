import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import App from "./App";
import { useState } from "react";
import SingleCocktail from "./Pages/SingleCocktail";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utilis/Theme";
import Navbar from "./Components/Navbar";

const PageRoute = () => {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<App />} />
          <Route path="cocktail/:id" element={<SingleCocktail />} />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default PageRoute;
