import React from "react";
import Navbar from "./Components/Navbar";
import styled from "styled-components";

const App = () => {
  const Title = styled.h2`
    color: red;
  `;
  const Header = styled.h1({
    color: "blue",
  });
  return (
    <React.Fragment>
      <Navbar />
      <Header>HI WORLD</Header>
    </React.Fragment>
  );
};

export default App;
