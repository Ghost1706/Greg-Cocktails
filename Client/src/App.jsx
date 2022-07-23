import React from "react";
import SearchBar from "./Components/SearchBar";
import Cards from "./Components/Cards";
import styled from "styled-components";

const Container = styled.div`
  /* background-color: ${({ theme }) => theme.bg}; */
  height: auto;
`;

const App = () => {
  return (
    <React.Fragment>
      <Container>
        <SearchBar />
        <Cards />
      </Container>
    </React.Fragment>
  );
};

export default App;
