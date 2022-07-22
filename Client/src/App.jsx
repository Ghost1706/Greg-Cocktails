import React from "react";
import Navbar from "./Components/Navbar";
import SearchBar from "./Components/SearchBar";
import Cards from "./Components/Cards";
import styled from "styled-components";
import Loader from "./Components/Loader";
import { useGlobalContext } from "./Components/Context";

const Container = styled.div`
  background-color: #f0efeff8;
`;

const App = () => {
  const { loading } = useGlobalContext();
  if (loading) {
    return (
      <React.Fragment>
        <Navbar />
        <Loader />
      </React.Fragment>
    );
  }
  return (
    <React.Fragment>
      <Container>
        <Navbar />
        <SearchBar />
        <Cards />
      </Container>
    </React.Fragment>
  );
};

export default App;
