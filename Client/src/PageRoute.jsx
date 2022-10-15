import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import App from "./App";
import { useEffect, useState } from "react";
import SingleCocktail from "./Pages/SingleCocktail";
import { ThemeProvider } from "styled-components";
import { darkTheme, lightTheme } from "./utilis/Theme";
import Navbar from "./Components/Navbar";
import Login from "./Pages/Login";

const PageRoute = () => {
  const [user, setUser] = useState(null);
  useEffect(() => {
    const getUser = async () => {
      fetch("http://localhost:5000/auth/login/success", {
        method: "GET",
        credentials: "include",
        headers: {
          Accept: "application/json",
          "Content-type": "application/json",
          "Access-Control-Allow-Credentials": true,
        },
      })
        .then((response) => {
          if (response.status === 200) return response.json();
          throw new Error("authentication failed");
        })
        .then((resObject) => {
          setUser(resObject.user);
        })
        .catch((error) => {
          console.log(error);
        });
    };
    getUser();
  }, []);
  console.log(user);
  const [darkMode, setDarkMode] = useState(false);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>
      <Router>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <Routes>
          <Route path="/" element={<App />} />
          <Route
            path="cocktail/:id"
            element={user ? <SingleCocktail /> : <Navigate to="/Login" />}
          />
          <Route
            path="/Login"
            element={user ? <Navigate to="/" /> : <Login />}
          />
        </Routes>
      </Router>
    </ThemeProvider>
  );
};

export default PageRoute;
