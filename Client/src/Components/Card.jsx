import React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  margin: 0.3rem;
  width: 30vw;
  background-color: ${({ theme }) => theme.bg};
  border-radius: 7px;
  border: 1px solid green;
  box-shadow: -1px -1px 9px 1px rgba(10, 153, 35, 0.82);
  -webkit-box-shadow: -1px -1px 9px 1px rgba(10, 153, 35, 0.82);
  -moz-box-shadow: -1px -1px 9px 1px rgba(10, 153, 35, 0.82);

  @media screen and (max-width: 480px) {
    width: 100%;
  }
`;
const CardTop = styled.div`
  flex: 1;
`;
const CardBody = styled.div`
  padding: 2rem 1rem;
  flex: 1;
  background-color: ${({ theme }) => theme.bg};
`;
const Img = styled.img`
  width: 100%;
  border-radius: 5px 5px 0px 0px;
`;
const Text = styled.p`
  color: green;
  letter-spacing: 3px;
  font-weight: 300;
  font-size: 0.9rem;

  margin: 0.2rem;
`;
const Title = styled.h3`
  font-weight: 400;
  font-size: 1.5rem;
  margin-bottom: 1rem;
  letter-spacing: 2px;
  color: ${({ theme }) => theme.text};
`;
const Btn = styled(Link)`
  letter-spacing: 3px;
  background-color: #017c01c7;
  color: ${({ theme }) => theme.text};
  text-decoration: none;
  border-radius: 0px 0px 6px 6px;
  cursor: pointer;
  text-transform: uppercase;
  font-size: 0.9rem;
  font-weight: 300;
  padding: 1rem 1.5rem;
  &:hover {
    background-color: green;
  }
`;
const Card = ({ id, name, image, glass, category, type }) => {
  return (
    <React.Fragment>
      <Container>
        <CardTop>
          <Img src={image} alt={name} />
        </CardTop>
        <CardBody>
          <Title>{name}</Title>
          <Text style={{ fontWeight: "bold" }}>{category}</Text>
          <Text>{glass}</Text>

          <Text style={{ fontWeight: "200" }}>{type}</Text>
        </CardBody>
        <Btn to={`/cocktail/${id}`} className="btn-link">
          Details
        </Btn>
      </Container>
    </React.Fragment>
  );
};

export default Card;
