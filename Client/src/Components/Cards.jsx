import React from "react";
import Card from "./Card";
import { useGlobalContext } from "./Context";
import styled from "styled-components";
import Loader from "./Loader";

const Container = styled.div`
  display: flex;
  padding: 0 2rem;
  justify-content: space-evenly;
  flex-wrap: wrap;
  gap: 5px;
  background-color: ${({ theme }) => theme.bg};
`;
const Text = styled.h2`
  text-transform: capitalize;
  font-weight: 300;
  text-align: center;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.text};
`;
const Matches = styled.div`
  height: calc(100vh - 170px);
`;
const Cards = () => {
  const { cocktails, loading } = useGlobalContext();

  if (loading) {
    return <Loader />;
  }
  if (cocktails.length < 1) {
    return (
      <Matches>
        <Text>no cocktails matched your search criteria</Text>;
      </Matches>
    );
  }
  return (
    <React.Fragment>
      <Container>
        {cocktails.map((cocktail) => {
          const { id } = cocktail;
          return <Card key={id} {...cocktail} />;
        })}
      </Container>
    </React.Fragment>
  );
};

export default Cards;
